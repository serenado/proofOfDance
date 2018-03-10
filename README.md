### blockRevolution

with help from https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2

In node console
- `Web3 = require('web3')`
- `web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))`
- `code = fs.readFileSync('Dancing.sol').toString()`
- `solc = require('solc')`
- `compiledCode = solc.compile(code)`
- `abiDefinition = JSON.parse(compiledCode.contracts[':Dancing'].interface)`
- `DancingContract = web3.eth.contract(abiDefinition)`
- `byteCode = compiledCode.contracts[':Dancing'].bytecode`
- `deployedContract = DancingContract.new(['Player'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})`
- `deployedContract.address`
- `contractInstance = DancingContract.at(deployedContract.address)`
