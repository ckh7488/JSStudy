//풀이 2
function longestPalindrome(str) {
  let ret = 0;
  const strLen = str.length;
  if (strLen < 2) return strLen;
  const memo = Array(strLen).fill(0).map(_ => Array(strLen).fill(false));

  for (let plen = 0; plen < strLen; plen++) {
    for (let si = 0; si < strLen-plen; si++) {
      if (plen < 2) {
        if (str[si] === str[si + plen]) memo[plen][si] = true;
      }
      else {
        if(memo[plen-2][si+1] === true) {
          if(str[si] === str[si+plen]) { memo[plen][si] = true; ret=plen+1; }
        }
      }
    }
  }
  // console.log(memo);
  return ret;

}




console.log(longestPalindrome('My dad is a racecar athlete'))
console.log(longestPalindrome(' dad '))
console.log(longestPalindrome('aibohphobia'))
console.log(longestPalindrome('aaaa level eye redivider hannah'))
