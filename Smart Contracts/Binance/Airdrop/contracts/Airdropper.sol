pragma solidity ^0.5.4;

import "@openzeppelin/contracts/ownership/Ownable.sol";
import "@openzeppelin/contracts/access/Roles.sol";

contract Token {
	function transfer(address to, uint value) public;
}

contract Airdropper is Ownable{	
	using Roles for Roles.Role;	
	Roles.Role private _sender;
	
	address[] private list;
	
    constructor() public {
		_sender.add(msg.sender);
		list.push(msg.sender);
    }
    
	function addSender(address sender) public onlyOwner {
		_sender.add(sender);
		list.push(sender);
	}
	
	function removeSender(address sender) public onlyOwner {
		_sender.remove(sender);
	}
	
	function isSender(address sender) public view returns(bool) {
        return _sender.has(sender);
    }
	
	function getList()public view returns( address  [] memory){
		return list;
	}

	function multisend(address[] memory _token , address[] memory dests , uint256[] memory values) public {
		require(_sender.has(msg.sender), "DOES_NOT_HAVE_SENDER_ROLE");
        uint256 i = 0;
        while (i < dests.length) {
           Token(_token[i]).transfer(dests[i], values[i]);
           i += 1;
        }
    }
}