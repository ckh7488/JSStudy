

function* A (){
    let id = 0;
    while(1){
        const A = yield id;
        console.log(A);
        if(A !== undefined) id+=A;
        id++;
    }
}

// 제너레이터는 내부에서 값을 외부로 'yield 내보낼 값' 형태로 내보 낼 수 있고, 외부에서 값을 받고 싶을 땐 const rec = yield a 이런식으로 rec  로 받아올 수 있다.
// 주된 메서드로는 next return throw가 있다. throw 는 에러처리 용이고, next 는진행, return 제너레이터 종료(exit)으로 보면 될듯.

const myA = A();
console.log(myA.next());
console.log(myA.next());
console.log(myA.next(2));       // yield 한 부분에서 인자를 위에처럼 받을 경우, 제너레이터 내부에서 이 받아온 값을 사용가능.
console.log(myA.next());
console.log(myA.next());
console.log(myA.next());
console.log(myA.return());      // 끝 더이상 A함수를 next로 진행시킬 수 없음.