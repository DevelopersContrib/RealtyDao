pragma solidity ^0.5.4;

import "@openzeppelin/contracts/ownership/Ownable.sol";
import "@openzeppelin/contracts/access/Roles.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Exchange is Ownable{
	using Roles for Roles.Role;
	using SafeMath for uint256;
	
	Roles.Role private _creator;
		
    ERC20 public rDAO;
	uint256[] domainid;
	address[] private list;
	
    struct Swap {
		uint256 initPrice;
		uint256 bnbUsdPrice;
		uint256 price;
		uint256 soldToken;
		
		ERC20 eshToken;
		uint256 totalRdaoEnter;
		uint256 rate;
		uint256 base; // 1000000
		
		uint256 ownerRdaoAmount;
		uint256 totalWithdrawEsh;
		uint256 totalWithdrawRdao;
    }
	
	
    mapping(uint256 => Swap) public exchange;
	
    constructor(address _rdao) public {
        rDAO = ERC20(_rdao);
		
		_creator.add(msg.sender);
		list.push(msg.sender);
    }
    
    function create(uint256 _id, uint256 _initPrice, uint256 _bnbUsdPrice, address _eshToken, uint256 _base, uint256 _owner_rdao_amount) public {
		require(_creator.has(msg.sender), "DOES_NOT_HAVE_CREATOR_ROLE");
		require(_id>0, "INVALID_ID");
		Swap storage _ex = exchange[_id];
		
		if(_ex.rate>0){
			uint256 _price = (0 / _base) + _initPrice;		
			uint256 _rate = ((1  * 10**18 )*10**18) / (_bnbUsdPrice * _price);			
			
			exchange[_id] = Swap(_initPrice, _bnbUsdPrice, _price, 0, ERC20(_eshToken), 0, _rate, _base, _ex.ownerRdaoAmount, 0, 0);
		}else{
			
			require(rDAO.transferFrom(msg.sender, address(this), _owner_rdao_amount), "ERROR_TRANSFER_RDAO");
			
			domainid.push(_id);
			
			uint256 _price = (0 / _base) + _initPrice;		
			uint256 _rate = ((1  * 10**18 )*10**18) / (_bnbUsdPrice * _price);			
			
			exchange[_id] = Swap(_initPrice, _bnbUsdPrice, _price, 0, ERC20(_eshToken), 0, _rate, _base, _owner_rdao_amount, 0, 0);
		}
    }
    
	function computeRate(uint256 bnbUsdPrice, uint256 price) public pure returns (uint256) {
		
		uint256 totalRate =  ((1  * 10**18 )*10**18) / (bnbUsdPrice * price);
		return totalRate;
	}
	
	function getRate(uint256 _id) public view returns(uint256) {
        Swap storage _ex = exchange[_id];
        return _ex.rate;
    }
	
	function compute(uint256 _id, uint256 _amount) public view returns (uint256) {
		Swap storage _ex = exchange[_id];
		uint256 _lastAmount = _amount;
		
		uint256 _lastEx = _lastAmount.mul(_ex.rate);
		return _lastEx;
	}
	
    function enter(uint256 _id, uint256 _amount, address _recipient) public {
        Swap storage _ex = exchange[_id];
		require(_id>0 && _ex.rate>0, "INVALID_ID_OR_RATE");
		require(_recipient == address(_recipient),"INVALID_RECIPIENT");
		
        require(rDAO.transferFrom(msg.sender, address(this), _amount), "ERROR_TRANSFER_RDAO");
		_ex.totalRdaoEnter = _ex.totalRdaoEnter.add(_amount);
		
		uint256 _lastAmount = _amount;
		
		uint256 _lastEx = _lastAmount.mul(_ex.rate);
		
		_ex.eshToken.transfer(_recipient, _lastEx);
		
		_ex.soldToken = _ex.soldToken.add(_lastEx);
		
		uint256 bal = _ex.soldToken - _ex.totalWithdrawEsh;
		
		_ex.price = (bal / _ex.base) + _ex.initPrice;
		_ex.rate = ((1  * 10**18 )*10**18) / (_ex.bnbUsdPrice * _ex.price);
    }
	
	
	function withdraw(uint256 _id, uint256 _amount) public {
		Swap storage _ex = exchange[_id];
		require(_id>0 && _ex.rate>0, "INVALID_ID_OR_RATE");
		
		require(_ex.soldToken >= _ex.totalWithdrawEsh.add(_amount), "SOLD_IS_LESS_THAN_WITHDRAW_AMOUNT");
		
		uint256 total = _amount.div(_ex.rate);
		
		require(_ex.eshToken.transferFrom(msg.sender, address(this), _amount), "ERROR_TRANSFER_ESH"); // send esh to contract
		
		require(rDAO.transfer(msg.sender, total), "ERROR_TRANSFER_RDAO"); // send rdao to user
		_ex.totalWithdrawRdao = _ex.totalWithdrawRdao.add(total);
		
		_ex.totalWithdrawEsh = _ex.totalWithdrawEsh.add(_amount);

		uint256 bal = _ex.soldToken.sub(_ex.totalWithdrawEsh);
		
		_ex.price = (bal / _ex.base) + _ex.initPrice;
		_ex.rate = ((1  * 10**18 )*10**18) / (_ex.bnbUsdPrice * _ex.price);	
	}
	
		
	function computeWithdraw(uint256 _id, uint256 _amount) public view returns(uint256) {
		Swap storage _ex = exchange[_id];
		require(_id>0 && _ex.rate>0, "INVALID_ID_OR_RATE");
		
		uint256 total = _amount.div(_ex.rate);
		return total;
	}
		
	function getList()public view returns( address  [] memory){
		return list;
	}
	
	function addCreator(address creator) public onlyOwner {
		_creator.add(creator);
		list.push(creator);
	}
	
	function removeCreator(address creator) public onlyOwner {
		_creator.remove(creator);
	}
	
	function isCreator(address creator) public view returns(bool) {
        return _creator.has(creator);
    }
	
	function transferFund(uint256 amount, address token, address to) public onlyOwner {
		ERC20(token).transfer(to, amount);
	}
	
	function sendRDAOtoOwner(uint256 _id, address toOwner) public onlyOwner {
		Swap storage _ex = exchange[_id];
		require(_ex.ownerRdaoAmount>0, "INSUFFICIENT_RDAO");
		require(rDAO.transfer(toOwner, _ex.ownerRdaoAmount), "ERROR_TRANSFER_RDAO");
		_ex.ownerRdaoAmount = 0;
	}
	
	function setEshToken(uint256 _id, address _eshToken) public onlyOwner {
        Swap storage _ex = exchange[_id];
		require(_ex.rate>0, "INVALID_OR_RATE");
		_ex.eshToken = ERC20(_eshToken);
    }
	
	function soldToken(uint256 _id) public view returns (uint256) {
		Swap storage _ex = exchange[_id];
		return _ex.soldToken;
	}
	
	function getTotalWithdrawEsh(uint256 _id) public view returns (uint256) {
		Swap storage _ex = exchange[_id];
		return _ex.totalWithdrawEsh;
	}
	
	function getTotalRdaoEnter(uint256 _id) public view returns(uint256) {
        Swap storage _ex = exchange[_id];
        return _ex.totalRdaoEnter;
    }
	
	function getOwnerRDAOAmount(uint256 _id) public view returns(uint256) {
        Swap storage _ex = exchange[_id];
        return _ex.ownerRdaoAmount;
    }
	
	function getEshToken(uint256 _id) public view returns(ERC20) {
		Swap storage _ex = exchange[_id];
		return _ex.eshToken;	
	}
	
	function getBnbUsdPrice(uint256 _id) public view returns (uint256) {
		Swap storage _ex = exchange[_id];
		return _ex.bnbUsdPrice;
	}
	
	function getInitPrice(uint256 _id) public view returns (uint256) {
		Swap storage _ex = exchange[_id];
		return _ex.initPrice;
	}
	
	function price(uint256 _id) public view returns (uint256) {
		Swap storage _ex = exchange[_id];
		return _ex.price;
	}
	
	function getDomains() public view returns(uint256[] memory) {
        return domainid;
    }	
}