function* retNumCalled() {
    let counter = 0
    while (1) {
        try{
        yield ++counter
        } catch(e) { console.log(e)}
    }
}

const myGen = retNumCalled()
console.log(myGen.next(), myGen.next(), myGen.next())
console.log(myGen.throw("error"))
console.log(myGen.return(3))
console.log(myGen.next())