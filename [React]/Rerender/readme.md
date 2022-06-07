
# Rerende  
  
## 개요  
React는 `Virtual DOM`을 사용하여 랜더링이 필요한 부분만 다시 랜더링을 한다.  
이 `Rerendering` 과정은  `DOM`에서는 모든 객체를 싹 다 없애고 다시 계산하여 그리는 방식이다.  
  
`Virtual DOM`사용시 삭제할 이유가 없는 객체는 그대로 보존 할 수 있게 된다.  
이 차이가 생각보다 엄청 크다 (다 없애고 지우는 양이 상당하다)   
때문에 기존의 `DOM`과 거의 같은 `Virtual DOM`이라는 것을 만들면서 까지 이 과정을 최소화 한다.  
  
## 코드 및 예제  
```Javascript
const  App  =  ()  =>  {
  const  [message, setMessage]  = React.useState('');
  return  (  
			  <>  
				  <Tile message={message} />  
				  <Tile />  
			 </>  
		  );  
  };
```  
  
이 코드에서, Tile 컴포넌트안에 console.log("Tile")을 넣어주면, message 라는 state의 값이 바뀔 때 마다  App 컴포넌트가 `Virtual DOM`에서 다시 호출 된다.   
위에서는 두 번 호출 된다. (4번일 수도 있다)  

그 이후, return의 Tile 컴포넌트 두 개도 같이 실행되므로, 저 세 컴포넌트(App, Tile, Tile)는 `Virtual DOM`에서 다 재 실행된다.  

단, 실제 `DOM`에서는 불필요한 아래쪽 Tile 컴포넌트를 리 랜더링하지는 않는다.  
리액트는 이 3 컴포넌트를 실행하면서, `DOM`을 업데이트 할 요소들을 찾아서, 다시 그려야 하는 요소들만 찾아서 그 요소들만 다시 그리기를 한다.  
  
  
## 출처  
굉장히 자세히 설명된 글이다.   
https://felixgerschau.com/react-rerender-components/  
  
(참고) 리엑트 메모에 대한 글  
https://felixgerschau.com/react-performance-react-memo/  
  
    
