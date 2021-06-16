pragma solidity ^0.5.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Exchange {
	using SafeMath for uint256;
    ERC20 public rDAO;
    address private owner;
	uint256[] domainid;
	
    struct Swap {
		uint256 initPrice;
		uint256 bnbUsdPrice;
		uint256 price;
		uint256 soldToken;
		
		ERC20 eshToken;
		uint256 rdaoAmount;
		uint256 rate;
		uint256 base; // 1000000
		
		uint256 ownerRdaoAmount;
    }
	
    mapping(uint256 => Swap) public exchange;
	
    constructor(address _rdao) public {
        rDAO = ERC20(_rdao);
        owner = msg.sender;
    }
    
    modifier isOwner(){
        require(msg.sender == owner);
        _;
    }
        
    function create(uint256 _id, uint256 _initPrice, uint256 _bnbUsdPrice, address _eshToken, uint256 _base, uint256 _owner_rdao_amount) public isOwner {
		require(_id>0);		
		Swap storage _ex = exchange[_id];
		
		if(_ex.rate>0){
			uint256 _price = (0 / _base) + _initPrice;		
			uint256 _rate = ((1  * 10**18 )*10**18) / (_bnbUsdPrice * _price);			
			
			exchange[_id] = Swap(_initPrice, _bnbUsdPrice, _price, 0, ERC20(_eshToken), 0, _rate, _base, _ex.ownerRdaoAmount);
		}else{
			
			require(rDAO.transferFrom(msg.sender, address(this), _owner_rdao_amount));
			
			domainid.push(_id);
			
			uint256 _price = (0 / _base) + _initPrice;		
			uint256 _rate = ((1  * 10**18 )*10**18) / (_bnbUsdPrice * _price);			
			
			exchange[_id] = Swap(_initPrice, _bnbUsdPrice, _price, 0, ERC20(_eshToken), 0, _rate, _base, _owner_rdao_amount);
		}
    }
    
    function enter(uint256 _id, uint256 _amount) public {
        Swap storage _ex = exchange[_id];
		require(_id>0 && _ex.rate>0);
		
        require(rDAO.transferFrom(msg.sender, address(this), _amount));
		_ex.rdaoAmount = _ex.rdaoAmount.add(_amount);
		
		uint256 _lastAmount = _amount;
		
		uint256 _lastEx = _lastAmount.mul(_ex.rate);
		
		_ex.eshToken.transfer(msg.sender, _lastEx);
		
		_ex.soldToken = _ex.soldToken.add(_lastEx);
		
		_ex.price = (_ex.soldToken / _ex.base) + _ex.initPrice;
		_ex.rate = ((1  * 10**18 )*10**18) / (_ex.bnbUsdPrice * _ex.price);
    }
	
	function compute(uint256 _id, uint256 _amount) public view returns(uint256) {
		Swap storage _ex = exchange[_id];
		uint256 _lastAmount = _amount;
		
		uint256 _lastEx = _lastAmount.mul(_ex.rate);
		return _lastEx;
	}
	
	function transferFund(uint256 amount, address token, address to) public isOwner {
		ERC20(token).transfer(to, amount);
	}
	
	function sendRDAOtoOwner(uint256 _id, address toOwner) public isOwner {
		Swap storage _ex = exchange[_id];
		require(_ex.ownerRdaoAmount>0);
		require(rDAO.transfer(toOwner, _ex.ownerRdaoAmount));
		_ex.ownerRdaoAmount = 0;
	}
	
	function setEshToken(uint256 _id, address _eshToken) public isOwner {
        Swap storage _ex = exchange[_id];
		require(_ex.rate>0);
		_ex.eshToken = ERC20(_eshToken);
    }
	
	function getRate(uint256 _id) public view returns(uint256) {
        Swap storage _ex = exchange[_id];
        return _ex.rate;
    }
	
	function soldToken(uint256 _id) public view returns (uint256) {
		Swap storage _ex = exchange[_id];
		return _ex.soldToken;
	}
	
	function getEshToken(uint256 _id) public view returns(ERC20) {
		Swap storage _ex = exchange[_id];
		return _ex.eshToken;	
	}
	
	function getRDAO(uint256 _id) public view returns(uint256) {
        Swap storage _ex = exchange[_id];
        return _ex.rdaoAmount;
    }
	
	function getOwnerRDAOAmount(uint256 _id) public view returns(uint256) {
        Swap storage _ex = exchange[_id];
        return _ex.ownerRdaoAmount;
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