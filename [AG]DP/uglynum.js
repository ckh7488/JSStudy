const multipleNum = (num) => n => {
    return num * n
  }
  const multipleNum2 = multipleNum(2)
  const multipleNum3 = multipleNum(3)
  const multipleNum5 = multipleNum(5)
  
  const uglyNumbers = function (n) {
    // TODO: 여기에 코드를 작성합니다.
    if (n === 1) return 1
    const memo = [0,1]
    let idx1=1,idx2=1,idx3=1,count=2
    while(count <= n){
      let num1 = multipleNum2(memo[idx1]), num2 = multipleNum3(memo[idx2]), num3 = multipleNum5(memo[idx3])
      memo[count] = Math.min(num1,num2,num3)
      if(memo[count] === num1) idx1++
      if(memo[count] === num2) idx2++
      if(memo[count] === num3) idx3++
      count++
    }
    // console.log(memo)
    return memo[n]
  };

  console.log(uglyNumbers(15))