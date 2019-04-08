web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"pointsForPlayer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
DancingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = DancingContract.at('0x544759eca7c769adbf1b21d6217b7db1f9b2ae45');
players = {"Player": "player-1"}

function pointsForPlayer() {
	contractInstance.pointsForPlayer("Player", {from: web3.eth.accounts[0]});
	var blocksMined = web3.eth.blockNumber;
	$(".counter").html(blocksMined);
}

var randomHashes = 
['0x9c02f5c68e02390a3ab81f63341edc1ba5dbb39e',
'0x7d920be073e92a590dc47e4ccea2f28db3f218cc',
'0xf8a9c7c65c4d1c0c21b06c06ee5da80bd8f074a9',
'0x9d8ee8c3d4f8b1e08803da274bdaff80c2204fc6',
'0x26bb5d139aa7bdb1380af0e1e8f98147ef4c406a',
'0x622e557aad13c36459fac83240f25ae91882127c',
'0xbf8b1630d5640e272f33653e83092ce33d302fd2',
'0xe37a3157cb3081ea7a96ba9f9e942c72cf7ad87b',
'0x175dae81345f36775db285d368f0b1d49f61b2f8',
'0xc26bda5f3370bdd46e7c84bdb909aead4d8f35f3']

setInterval(function() {
	var hash = randomHashes[Math.floor(Math.random() * (randomHashes.length))]
	$(".hashes").html(hash);
}, 600)
