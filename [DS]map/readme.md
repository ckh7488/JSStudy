
# [C++] unordered_map 과 map  
  
  
  
## map  
  
`red black tree` 기반 data structure이다.  
내부에서 자동으로 순서를 맞춘다 (order를 정한다.)  
  

### red black tree 기반  
  
balanced-binary tree 로, 꽉찬 이진트리로 생각하면 된다.  
  
balanced-binary tree군의 장점으로 속도가 삽입,삭제,탐색이 logn 이하로 보장된다.  
  
balanced-binary tree군 중, 이 rb-tree가 좋은 점은 삽입/삭제가 조금 더 빠르다는 점이 있다.  
  

## unordered_map  
`hash table`기반의 data structure이다.    
내부적으로 `load factor` 라는 것이 존재하고, 이 값을 기준으로 bucket의 개수를 늘린다.  
기본 값은 16, 0.75가 가장 많이 쓰인다고 한다.  
즉,  (16*75%)의 bucket의 값이 차면, bucket을 두배로 늘린다.  
#### 과정     
> 1. 12개의 bucket이 차면, bucket을 32개로 늘린다.  
> 2. bucket을 out하는 함수를 변경하여, range가 32개가 되도록 한다.  
> 3. 기존에 저장된 데이터를 변경된 함수로 다시 해싱한다.    
  
  
75% 인 이유 : 100%에 가까울수록, 데이터가 한쪽 bucket 몰리는 worst case에 더 약해짐.  
  
아래에 일반적인 경우의 time complexity를 보면 장점이 확실하다.  
하지만, 가끔 이런 재배치 과정이 걸릴 경우에 생각보다 느린 결과값이 나올 수 있다.  
    
##  
### TimeComplexity  
일반적인 경우의 속도이다.  

Ds | Find | Insert | Erase
--- | --- | --- | --- | ---



두 데이터 구조 모두 메모리는 데이터의 양 n에 선형적으로 비례한다.  

Markdown | Less | Pretty
--- | --- | ---


