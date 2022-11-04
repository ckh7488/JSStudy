function permutation(n,r){
    const arr = Array(n);
    for(let i=0; i<n; i++){
        arr[i] = i;
    }

    function* recurPermutation(cur){
        if(cur.length === r) { yield cur; return }
        for(let i=0; i<n; i++){
            if (arr[i] <0 ) continue
            cur.push(arr[i])
            arr[i] = -1
            yield * recurPermutation(cur)
            arr[i] = i;
            cur.pop()
        }
    }
    return recurPermutation([])
    
}


function testCase(){
    let [n, r, ans] = retRandomCase()
    while(ans > 1000000000){
        [n,r,ans] = retRandomCase()
    }

    console.log(n,r,ans)
    let c = 0;
    let tmpFunc = permutation(n,r)
    let i = false;
    while(!i){
        const {value, done} = tmpFunc.next()
        i = done;
        if(done===false) c++;
    }
    console.assert(c === ans)
}

function retRandomCase(){
    let tmp1 = Math.floor(20*Math.random());
    let tmp2 = Math.floor(10*Math.random());
    const n = tmp1 > tmp2 ? tmp1 : tmp2;
    const r = tmp1 > tmp2 ? tmp2 : tmp1;
    const ans = perm(n,r);
    return [n,r,ans]
}



function perm(n,r){
    return factorial(n)/factorial(n-r)
}


function factorial(n){
    let ans = 1
    for(let i=1; i<=n; i++){
        ans = ans*i
    }
    return ans
}


for(let i=0; i<10; i++){
    testCase()
}



