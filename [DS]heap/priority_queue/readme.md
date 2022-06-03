# C++ priority_queue  
## 개요  
#include \<queue\> 에 있는 priority_queue 에 대한 간단한 설명.  
    
## 선언  
```c
priority_queue<vector<int>, vector<vector<int>>, cmp1> pq; 
```  
1번 인자 : vector<int> 형태의 자료를 쓴다.   
2번 인자 : vector<vector<int>>의 컨테이너를 사용.  
3번 인자 : cmp1이라는 operator 를 사용하여 자료들의 크기 비교를 한다.  
  
## 자주 사용하는 method/attribute  
#### 내부 확인  
`pq.top()`		:	맨 위의 값을 알려줌. (큐에서 빼지는 않음)  
`pq.empty()`	:	true/false 로 비어있는지 확인 가능.  
`pq.size()`		:	현재 큐의 사이즈 확인.  
  
  
#### 값 추가 삭제  
`pq.push()`		:	큐 값을 추가.  
`pq.pop()`		:	큐의 맨 위의 값을 제거.  
  
  
