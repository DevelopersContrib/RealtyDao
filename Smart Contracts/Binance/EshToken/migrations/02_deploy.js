
const EshToken = artifacts.require('EshToken');

module.exports = async function(deployer, network, accounts) {
	const esh = await deployer.deploy(EshToken,"ESH TOKEN","ESH","0xd6D6148bc1BE577a6d4411Cd70f2D982e6cD96ca",1000000);
	
};
