//timecheck func
const timecheck = (cb, ...args)=>{
    const start = new Date()
    const ans = cb(...args)
    const end = new Date()
    console.log(`answer : ${ans}, time : ${end-start}`)
}

// Naive 
const fibo = (n)=>{
    if(n<3) return 1
    return fibo(n-1)+fibo(n-2)
}
timecheck(fibo,40)

// DP
const memo = []
const fiboDP = (n)=>{
    const memo = [0,1,1]
    return (function fiboDPrec(n){
    if(memo[n] === undefined) memo[n]=BigInt(fiboDPrec(n-1))+BigInt(fiboDPrec(n-2))
    // console.log(memo)
    return memo[n]
    })(n)
}

timecheck(fiboDP,100)
// console.log("number : ",Number.MAX_SAFE_INTEGER)