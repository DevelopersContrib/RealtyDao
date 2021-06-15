// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const RDAOCrowdsale = artifacts.require("RDAOCrowdsale");
const rDAO = artifacts.require('rDAO');
module.exports = async function (deployer, network, accounts) {
	const owner = '1b4';
	const token = '5DA';
	const beneficiary = '1b4';
	
	// price: 0.040900000000000000
	// rate = 1 / price
	// rate: = 24449877749999998855
	
	/*
	const rdao = await deployer.deploy(rDAO);
	const rdaoToken = await rDAO.deployed();
	const token = rdaoToken.address;
	
	const owner = '';
	const beneficiary = '';
	*/
	
	// await deployer.deploy(RDAOCrowdsale, '32', beneficiary, token, owner);
	
	//eth price: 0.00283
	//reit price: 0.022
	await deployer.deploy(RDAOCrowdsale, beneficiary, token, owner,'21999999999999999','2830000000000000');
	// await deployer.deploy(RDAOCrowdsale, '65444', beneficiary, token, owner,'40899999999999999','373600000000000');
	const crowdsale = await RDAOCrowdsale.deployed();


};