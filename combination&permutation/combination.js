function combination(n,r){
    const arr = Array(n);
    for(let i=0; i<n; i++){
        arr[i] = i;
    }

    function* recurCombination(cur){
        if(cur.length === r) { yield cur; return; }
        for(let i= cur.length > 0 ? cur.slice(-1)[0] : 0; i<n; i++){
            if (arr[i] <0 ) continue
            cur.push(arr[i])
            arr[i] = -1
            yield * recurCombination(cur)
            arr[i] = i;
            cur.pop()
        }
    }
    return recurCombination([])
    
}

function comb(n,r){
    return factorial(n)/(factorial(r)*factorial(n-r))
}


function factorial(n){
    let ans = 1
    for(let i=1; i<=n; i++){
        ans = ans*i
    }
    return ans
}

function retRandomCase(){
    let tmp1 = Math.floor(20*Math.random());
    let tmp2 = Math.floor(10*Math.random());
    const n = tmp1 > tmp2 ? tmp1 : tmp2;
    const r = tmp1 > tmp2 ? tmp2 : tmp1;
    const ans = comb(n,r);
    return [n,r,ans]
}

function testCase(){
    let [n, r, ans] = retRandomCase()
    while(ans > 100000000000){
        [n,r,ans] = retRandomCase()
    }

    console.log(n,r,ans)
    let c = 0;
    let tmpFunc = combination(n,r)
    let i = false;
    while(!i){
        const {value, done} = tmpFunc.next()
        i = done;
        if(done===false) c++;
    }
    console.assert(c === ans)
}


//test
for(let i=0; i<10; i++){
    testCase()
}
