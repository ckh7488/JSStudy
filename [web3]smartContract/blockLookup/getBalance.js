const Web3 = require('web3');
require('dotenv').config();
const rpcURL = process.env.rpcURL;

const web3 = new Web3(rpcURL);

const account = "0xb1497712F0306228A2A92004A46902c25712Ba51";

// web3.eth.getBalance(account)
//     .then((bal) => {
//         console.log("지갑 ${account}의 잔액은... ${bal} wei 입니다.");
//         return web3.utils.fromWei(bal, "ether"); // web3.utils.fromWei 를 사용해 ether 단위로 변경
//     })
//     .then((eth) => {
//         console.log(`이더 단위로는 ${eth} ETH 입니다.`);
//     });

// const txId = '0x33dd627d5ef392d056cee55a3c02a73ffc5540c2d39c482285d97dc08fa4db9a';

// web3.eth.getTransaction(txId)
//     .then((obj) => {
//         console.log(obj);
//     });


const blockNum = "12326340";

web3.eth.getBlock(blockNum).then((obj) => {
    console.log(obj);
});