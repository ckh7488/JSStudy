

const coinChange = function (total, coins) {
  const hT = {};

  const aux = (total, status) => {
    // console.log(hT[status.join('')])
    if(hT[status.join(',')] !== undefined ) return 0;
    hT[status.join(',')] = true;
    if (total === 0) return 1;
    if (total < 0) return 0;

    let count = 0;

    for (let i = 0; i < coins.length; i++) {
      let mStatus = [...status];
      mStatus[i]+=1
      count += aux(total - coins[i], mStatus)
    }
    // console.log(hT)
    return count;
  }
  return aux(total,coins.map(e=>0));
};

console.log(coinChange(10, [1, 5])) // 3개
console.log(coinChange(4, [1, 2, 3]))
console.log(coinChange(8, [1, 7, 8, 10]))
console.log(coinChange(10, [2, 3, 5, 6]))
console.log(coinChange(256, [1, 5, 10, 50, 100, 500]))