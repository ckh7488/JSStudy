// N = 5; number = 12 일때 5를 최대한 적게 써서 사칙연산만 가지고 12를 만드는 리턴값 answer를 찾기.
// N을 사용할  개수는 8개까지, 8개넘으면 -1

const mAdd = (a, b) => { return a + b }
const mSub = (a, b) => { return a - b }
const mMul = (a, b) => { return a * b }
const mDiv = (a, b) => { return parseInt(a / b) }


function solution(N, number) {
    let answer = 0;
    const memo = [null]
    for(let i = 1; i<9; i++){
        memo[i] = new Set();
        memo[i].add(parseInt(N.toString().repeat(i)))     // N중복 (ex: 5, 55 이런것을 추가.)
        for(let j=1; j<i; j++ ){                    //이중 for문으로, 중복 순열을 찾는 것을 구현 (ex : 3 = [1,2],[2,1], 4 = [2,2],[2,2],[1,3],[3,1])
            for(let k=1; k<i; k++){
                if(j+k === i) {
                    for(let a of memo[j]){
                        for(let b of memo[k]){
                            memo[i].add(mAdd(a,b))
                            memo[i].add(mSub(a,b))
                            memo[i].add(mMul(a,b))
                            memo[i].add(mDiv(a,b))
                        }
                    }
                }
            }
        }
        if(memo[i].has(number)) return i;
    }
    return -1;
}

console.log(solution(5,12))
// console.log(solution(5,31168))


