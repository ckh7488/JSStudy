const web3js = new Web3(web3.currentProvider)     
// 크롬의 메타마스크는 기본적으로 이더리움 노드가 정해져있다. 
//nodejs 에서 web3를 다운받아서 사용하고 싶다면, 이더리움 노드를 따로 설정해서 넣어줘야한다.
// node에서 쓰는 방법은 다른 js파일에서 시도할 것이고, 지금은 크롬 웹브라우저에 메타마스크가 깔린 상태에서 진행하는 것을 가정한다.
const abi = ""  // abi 는 remix에서 컴파일 한 후에 abi를 가져오면 된다.
const mAddress = '' // 마찬가지로, remix에서 디플로이 해주고, 컨트랙트 주소를 가져온다.
web3js.eth.contract(abi,mAddress)

ethereum.enable()   //메타마스크팝업창이 뜬다. 여기에서 연결을 해주자.

let transaction = {
    from: web3.currentProvider.selectedAddress,
    to: mAddress,
    value: web3.toWei("1", "ether")
}

web3.eth.sendTransaction(transaction)