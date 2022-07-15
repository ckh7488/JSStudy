### 개요
let ans = Array.map 에서 각각의 return으로 Promise.all([promise, promise, ...]) 를 반환할 때,
Promise.all(ans) 할 시, 모든 promise가 종료될 때까지 진행되는가? 에 대한 의문이 들었다.
바로 테스트 코드를 짜보고, 실험해보았다.


```javascript
const A = [1,2,3,4,5,6,7];
let ans = A.map( e=>{
const ret = [];
for(let i=0; i<e; i++){
    ret.push(new Promise(res=>{setTimeout(()=>{ res((i+1)*e)},(i+1)*e*1000 )}))
}
return Promise.all(ret)
})
Promise.all(ans).then(console.log)
```

### 결과
let ans = Array.map(e=> return Promise.all( [promise, promise, ....])) 의 결과로 나온 ans 를 promise.all(ans) 로 다시 받아주면,
ans안의 모든 promise가 끝날 때 까지 기다렸다가 결과를 반환한다.
