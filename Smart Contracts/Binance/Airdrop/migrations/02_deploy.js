const CTBAirdropper = artifacts.require('CTBAirdropper');


module.exports = async function(deployer, network, accounts) {

	const airdrop = await deployer.deploy(CTBAirdropper);
	
};
