pragma solidity ^0.5.0;

import "@openzeppelin/contracts/access/Roles.sol";
import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";

contract RDAOCrowdsale is Crowdsale{
	using Roles for Roles.Role;

	Roles.Role private _owners;
	
	uint256 private _initPrice;
	uint256 private _usdToEth;
	uint256 private _price;
	uint256 private _soldToken;
	
	uint256 private _rate;
	
	constructor(address payable wallet, IERC20 tokenAddr, address ownerAddr, uint256 initPrice, uint256 usdToEth) Crowdsale(1, wallet, tokenAddr) public {
		_owners.add(ownerAddr);
		
		_initPrice = initPrice;
		_usdToEth = usdToEth;
		
		_price = (_soldToken / 1000000) + _initPrice;		
		_rate = (((1  * 10**18 )*10**18) *10**18) / (_usdToEth * _price);		
	}
	
	function _updatePurchasingState(address beneficiary, uint256 weiAmount) internal {
	
		_soldToken = _soldToken + weiAmount.mul(_rate)/(1  * 10**18 );
		
		_price = (_soldToken / 1000000) + _initPrice;
		_rate = (((1  * 10**18 )*10**18) *10**18) / (_usdToEth * _price);
    }
	
	function _getTokenAmount(uint256 weiAmount) internal view returns (uint256) {
        return weiAmount.mul(_rate)/(1  * 10**18 );
    }
	
	function getUsdToEth() public view returns (uint256) {
		return _usdToEth;
	}
	
	function price() public view returns (uint256) {
		return _price;
	}
	
	function rate() public view returns (uint256) {
		return _rate;
	}
	
	function soldToken() public view returns (uint256) {
		return _soldToken;
	}
	
}