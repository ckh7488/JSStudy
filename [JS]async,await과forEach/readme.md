### async/await과 forEach,map 등의 함수에 대해.

프로젝트 진행하면서, 처음 생각했던 개념과 달라서 잠시 정리한다.

```javascript
const A = [1,2,3,4,5];
const timeStart = new Date();
A.map(async (a,idx)=>{
	const x = await new Promise(
		res=>{setTimeout(()=>{console.log(`hi from ${idx}`); 
		res(a); 
		if(a===A.slice(-1)[0]){console.log(new Date() - timeStart)}},1000*(idx+1))}
		)
	console.log(x);
	})
```
이 함수를 실행 시킬 때, 처음 생각에는 async 함수 안의 await이므로, promise가 끝날 때 까지 기다렸다가 진행되는 걸로 생각했다. 즉 5초동안 진행하므로, 15초후에 끝날 줄 알았다.
```javascript
async asyncFun (){ 
	await fun1	// 10초짜리
	await fun2	// 20초짜리
} 
```
하지만 대충 이런상황인 경우, asyncFun 내부에서 await끼리의 순서가 보장 될 뿐이다.
위의 첫번째 코드에서는 forEach로 async 함수를 5개 돌렸다.
이 5개의 async함수는 
>처음 실행된 async 함수가 끝나던 말던 await을 만나면 일단 멈춘다.
두번째 async함수가 실행되고 await을 만나면, promise중 결과 나온게 있나 확인한다.
지금 예제에선 없으므로, 다음 async 함수를 또 실행한다.

이런식으로 진행되므로, 5초보다 아주 약간 더 끌고 종료된다. (대충 5.01~50.2 사이 인듯하다)

for loop 형태에서 순서를 맞추고 싶다면,
```javascript
async forFun(){
	for(let i of someIterable){
		await someAsyncFun();
	}
}
```
이런식으로 하면 someAsyncFun 이 끝날때까지 이 forFun 함수는 잠시 진행을 멈추고 제어를 넘겼다가 await 이끝나고 스케쥴링을 통해 제어가 돌아오면 다음 someAsyncFun 을 실행하고 제어를 다시 넘기는 식으로 반복되어 진행된다.

#### 결론
async await 은 async 함수 자신의 내부에서만 await으로 순서가 맞춰진다.
async 함수끼리에서의 관계에서는 await마다 자신을 호출했던 코드에 다시 제어를 넘겨주고, await이 끝나서 다시 event queue에 돌아와서 자신의 실행 타이밍에 다시 실행되는 방식으로 진행된다.
