const LCS = function (str1, str2) {
    //TODO: 여기에 코드를 작성합니다.
    let ret = 0
    const memo = Array(str1.length+1).fill(0).map(e=>Array(str2.length+1).fill(0))
    return (function LCSrec(str1,str2,idx){
        if(str1.length === 0) return ret
        const mOne = str1[0]
        for(let i=1; i<str2.length+1; i++){
            if(str2[i-1] === mOne) {memo[idx][i] = memo[idx-1][i-1]+1}
            else {memo[idx][i] = Math.max(memo[idx-1][i],memo[idx][i-1])}
            ret = ret>memo[idx][i] ? ret : memo[idx][i]
        }
        console.log(memo)
        return LCSrec(str1.slice(1),str2,idx+1)
    })(str1,str2,1)
  };

console.log(LCS('codestates', 'c1o1d1e1s1t1a1t1e1s'))