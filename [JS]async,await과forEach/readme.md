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
