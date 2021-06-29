const EshToken = artifacts.require('EshToken');

module.exports = async function(deployer, network, accounts) {
	const DAN_ADDRESS = "";
	const DAN_SUPPLY = 100000;
	const OWNER_ADDRESS = "";
	const OWNER_SUPPLY = 800000;
	
	const RESERVE_ADDRESS = "";
	const RESERVE_SUPPLY = 100000;
	
	const esh = await deployer.deploy(EshToken, "ESH TOKEN", "ESH", DAN_ADDRESS, DAN_SUPPLY, OWNER_ADDRESS, OWNER_SUPPLY, RESERVE_ADDRESS, RESERVE_SUPPLY);
	
};
