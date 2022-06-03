const Web3 = require('web3');
require('dotenv').config();
const rpcURL = process.env.rpcURL;

const web3 = new Web3(rpcURL);

const addressName = "0xb1497712F0306228A2A92004A46902c25712Ba51";


// web3.eth.getBlockNumber()
//     .then(console.log);


// 1. getBlockNumber() : 최신블록 조회
// 2. getBlock(blockNum) : 블록넘버에 맞는 블록 정보 조회
// 3. getBlock 으로 받은 값 . transactions : 그 블록의 모든 트랜잭션들.
// 4. transactions.from, to : 이 값이랑 address랑같은지 조회, 그 값들을 리턴


const getTransactionsByAccount = async (addressName, startR, endR) => {
    return new Promise(res=>{
            let ret = [];
            for (let i = 0; i < endR-startR; i++) {
                ret.push(web3.eth.getBlock(startR + i));
            }
            res(ret);
        })
        .then(rt =>
            Promise.all(rt)
        )
        .then(ret =>
            ret.flatMap(e => e['transactions'])
        )
        .then(trxs =>
            trxs.map(trx => {
                return web3.eth.getTransaction(trx)
                    .then(trxd => {
                        if (trxd.from === addressName) return trx;
                        else if (trxd.to === addressName) return trx;
                        else return null;
                    })
            }
            )
        )
        .then(trxsArr=>{
            return Promise.all(trxsArr)
        })
        .then(retArr=>
            retArr.filter(e=>e!==null)
        )
}





    getTransactionsByAccount(addressName,12326300,12326350).then(console.log)


    // web3.eth.getBlock(blockNum).then((obj) => {
    //     console.log(obj);
    // });

