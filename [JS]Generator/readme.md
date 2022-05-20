
# Generator
## 개요
 js에서 async/await이 내부적으로는 promise와 generator를 합쳐 쓴 것과 거의 동일하다고 한다.   
 여기서 호기심을 느끼고 promise와 generator의 개념적 구현(실제 구현은 더 어려우므로)을 공부했다.  
 promise도 내부적으로 유심히 봤으나 일단 좀 더 정리하기 쉬운 generator를 정리하기로 했다.  
  
## 간단 설명
함수를 선언 할 때 `function*` 키워드를 이용하면 generator 함수를 만들 수 있다.
generator는 함수와 거의 같으나 몇 가지 다른 특성이 있다.
##### `Generator`의 특성
> 1. 내부에서 `yield`  키워드를 사용하여 함수의 실행을 끊고, yield 뒤의 변수를 return 할 수 있다.
> 2. caller에서 yield된 값을 받을 수 도 있고, yield 된 변수를 다음 사용 할 때 다른 값으로 전달 할 수 도 있다.
> 3. 만들어진 함수 자체에 method가 존재하고, 이 method를 통해 호출 및 제어해야 한다.  
  
이 정도의 특성만 알면 기본적인 사용은 가능하다.
주로 사용하는 메서드는 next, return, throw가 있다.  
## 함수 선언
```javascript
function*  retNumCalled() {
let  counter = 0
while (1) {yield ++counter}
}

const  myGen = retNumCalled()
console.log(myGen.next(), myGen.next(), myGen.next())
```  
자신이 몇 번 불렸는지 알려주는 `제너레이터`이다.  
내부가 무한루프여야 next가 계속 불려 질 수 있다.  
## 메서드  
### next  
위에서 보면 next메서드를 실행한다. 결과값으로는 yield에서 나올 값과 이 제너레이터가 끝났는지 확인하는 done값을 객체로 리턴한다.  
{value : 값, done: (true or false)} 이런 형태이며, done 이 true 가 되면 next를 다시 호출해도  value를 undefined로 리턴한다.  
  
### return  
return 메소드는 제너레이터가 무한루프여도, 더 이상 next로 진행이 불가능하게 하도록 상태를 변경한다.  
return(값) 형태이며, 호출 시 {value: 값, done: true}의 객체를 리턴하며, 이 후부터는 제너레이터가 끝난 것 처럼 작동한다. (next를 써도 {value: undefined, done:true} 객체를 리턴한다.  
  
### throw  
throw(에러메시지) 로 호출한다. 제너레이터 실행시 강제로 에러를 일으키고 에러메시지를 전달해준다.  
내부적으로 try catch를 해주면 제너레이터가 done:false 상태이기 때문에 throw 호출 이후에도 정상적으로 제너레이터를 쓸 수 있다.  
  
  
  


