const Web3 = require("web3");
require("dotenv").config();
const mUrl = process.env.mURL;
const web3 = new Web3(mUrl)

const contractAddress = '0x7a39105Afcb241F68F8940A5F1d267B368C9B6d3'
const abi =[
	{
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "x",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const myContract = new web3.eth.Contract(abi,contractAddress)

let getterAnswerPromise = myContract.methods.get().call()
getterAnswerPromise.then(e=>console.log(e)).then(e=>process.exit(1))
