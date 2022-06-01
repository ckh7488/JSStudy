//풀이 1
const checkLP = (i, j, str) => {
    for(let k=0; k<j-i+1; k++){
        if(str[i+k] !== str[j-k]) return false; 
    }
    return true;
}


let longestPalindrome = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    if(str.length===1) return 1;
    let lp = 0
    for(let i=0; i<str.length; i++){
      for(let j=i+1; j<str.length; j++){
        if(str[i]===str[j] && j-i+1 > lp ) { if(checkLP(i,j,str)) lp=j-i+1  }
      }
    }
    return lp;
};



console.log(longestPalindrome('My dad is a racecar athlete'))
console.log(longestPalindrome(' dad '))
console.log(longestPalindrome('aibohphobia'))
console.log(longestPalindrome('aaaa level eye redivider hannah'))
