https://forum.openzeppelin.com/t/simple-erc20-crowdsale/4863
https://forum.openzeppelin.com/t/setting-crowdsale-rate-manually/1659/7
https://docs.openzeppelin.com/contracts/2.x/crowdsales

https://forum.openzeppelin.com/t/setting-crowdsale-rate-automatically-after-every-purchase/5033/3
https://github.com/OpenZeppelin/openzeppelin-contracts/tree/v2.5.1/contracts/crowdsale

1. mkdir crowdsale && cd crowdsale
2. npm init -y
3. npm i --save-dev truffle
4. npx truffle init
5. npm install @openzeppelin/contracts@2.5.1
6. npm i @truffle/hdwallet-provider


token address = 0x0d7C5c6775B55C84057A2E9cB01E6cbA3dB395DA // REIT

npx truffle migrate --network ropsten
npx truffle console --network ropsten
crowdsale = await RDAOCrowdsale.deployed()
token = await rDAO.deployed()

crowdsale.address
0x6ff015a121cfB28bbAe70Fb20355878F69151441

(await crowdsale.price()).toString()
(await crowdsale.rate()).toString()
(await crowdsale.weiRaised()).toString()

// send 20000000 tokens to users
token.transfer(crowdsale.address, '20000000000000000000000000',{from:accounts[0]})

bal = await token.balanceOf(crowdsale.address)
web3.utils.fromWei(bal,'ether')

buy and send to: 0xEd73CB41d42b396464803E87c4b23330FDcd6582

await crowdsale.buyTokens(accounts[1], {value: web3.utils.toWei('0.036674816625916873')})
await crowdsale.buyTokens(accounts[1], {value: web3.utils.toWei('1')})

c = await crowdsale.compute(web3.utils.toWei('1'))
web3.utils.fromWei(c,'ether')

a1 = await token.balanceOf(accounts[1])
web3.utils.fromWei(a1,'ether')



await crowdsale.buyTokens('0xEd73CB41d42b396464803E87c4b23330FDcd6582', {value: web3.utils.toWei('0.03125')})

await crowdsale.buyTokens('0xEd73CB41d42b396464803E87c4b23330FDcd6582', {value: web3.utils.toWei('0.015625')})
--------------------

await crowdsale.setRate(16)

crowdsale: 0xb1D882FC3C897E2dE3Ccf6450758d75e7477e66D
creator: 1b4
owner: 1b4

crowdsale: 0xd4B81C9155F8604a5d5402ECCa058470163B9636
creator:0xE28E66CC34ef5ecac763188bD1636b758F1049B7
owner: 1b4

crowdsale: 0xEda7F0362eD9D6a9F88e5d4003780f7Ea632f360
creator:0xE28E66CC34ef5ecac763188bD1636b758F1049B7
owner: 1b4

crowdsale = await RDAOCrowdsale.deployed()
token = await rDAO.deployed()

0.0003736 * 0.0409 = 


token.transfer('0xB8cb36279d10E41b5c899fBFEFc46eAd6c9a3e05', '1000000000000000000000000',{from:'0xCaA8175b57Ab028c38359AeC26Ef9B2696eC91b4'})

token.transfer(crowdsale.address, '20000000000000000000000000',{from:accounts[0]})
(await crowdsale.rate()).toString()
(await crowdsale.price()).toString()
await crowdsale.buyTokens(accounts[1], {value: web3.utils.toWei('1')})

a1 = await token.balanceOf(accounts[1])
web3.utils.fromWei(a1,'ether')

(await crowdsale.ethPrice()).toString()
(await crowdsale.price()).toString()

(await crowdsale.tempA()).toString()
(await crowdsale.tempB()).toString()
(await crowdsale.tempC()).toString()

(await crowdsale.newRate()).toString()

(await crowdsale.rate()).toString()
(await crowdsale.totalToken()).toString()
(await crowdsale.total()).toString()
(await crowdsale.initRate()).toString()
(await crowdsale.amount()).toString()
