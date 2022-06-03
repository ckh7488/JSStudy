const Web3 = require('web3');
require('dotenv').config();
const rpcURL = process.env.rpcURL;

const web3 = new Web3(rpcURL);

const addressName = "0xb1497712F0306228A2A92004A46902c25712Ba51";

const getAllblocks = (range = 50) => {
    return web3.eth.getBlockNumber()
        .then(n => {
            let ret = [];
            for (let i = 0; i < range; i++) {
                ret.push(web3.eth.getBlock(n - i))
            }
            return Promise.all(ret).then(retArr => retArr.flatMap(obj => {
                try{
                    return obj['transactions']
                } catch (e) {return null;}
            }))
        })
        .then(async transactionIds => {
            console.log(transactionIds.length)
            let ret = [];
            // let count = 0;
            for(let id of transactionIds){
                if(id === null) continue;
                ret.push(web3.eth.getTransactionReceipt(id));
                // console.log(++count)
            }
            return Promise.all(ret);
        })





}

getAllblocks().then(console.log);