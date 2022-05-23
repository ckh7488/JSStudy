
# LCS(Longest Common Subsequence)  
## 개요  
알고리즘 문제를 풀다가 생각보다 너무 어려워서 설명을 보고 이해한 후, 혼자서 다시 짜서 올렸다.  
점화식`(Recurrence relation)`의 중요성을 느껴서 포스팅의 필요성을 느꼈다.  
    
## 점화식
```javascript  
if i == 0 or j == 0:  // 왼쪽과 위쪽을 0으로 채우는 마진이 필요하다.
	memo[i][j] = 0
elif str1[i] == str2[j]:
	memo[i][j] = memo[i - 1][j - 1] + 1
else:
	memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1])
```  
코드의 레퍼런스를 봐도 이해가 되지 않았다.  
내용을  구글링하니, 점화식이 깔끔하게 정리된 것을 보았다.  
이를 통해 구현해보니 굉장히 쉽게 구현되었다.  
  
## 참조
https://velog.io/@emplam27/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B7%B8%EB%A6%BC%EC%9C%BC%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-LCS-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Longest-Common-Substring%EC%99%80-Longest-Common-Subsequence







