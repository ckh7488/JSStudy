class minHeap {
    
    constructor(arr = []) {
        arr.forEach(el=>this.mInsert.bind(this)(el))
    }
    //private property
    #items = [];
    //private method
    #swap(idx1, idx2) {
        [this.#items[idx1], this.#items[idx2]] = [this.#items[idx2], this.#items[idx1]]
    }
    #getChildIdx(idx) {
        let left = (idx + 1) * 2 - 1
        return [left, left + 1]
    }
    #getParentIdx(idx) {
        return Math.floor((idx + 1) / 2) - 1
    }

    //public method
    mRetSorted(isPure=true) { 
        const tmp = [...this.#items]
        const ret = []
        while(this.#items.length !== 0){
            ret.push(this.mPopRoot())
        }
        if(isPure) this.#items = tmp
        else this.#items = ret
        return [...ret]
     }
    mInsert(item) {
        let cidx = this.#items.length
        this.#items.push(item)
        while(1){
            let pidx = this.#getParentIdx(cidx)
            if(this.#items[pidx] > this.#items[cidx]) this.#swap(cidx,pidx)
            else return
            cidx = pidx
        }
    }
    mPopRoot() { 
        const ret = this.#items[0]
        let end = this.#items[this.#items.length-1]
        this.#items[0] = end
        this.#items.splice(-1,1)
        let cidx = 0
        while(1){
            const [left,right] = this.#getChildIdx(cidx)
            if(this.#items[left] < this.#items[right]) {
                if(this.#items[left] < this.#items[cidx])  { this.#swap(cidx,left); cidx = left } 
                else return ret
            }
            else {
                if(this.#items[right] < this.#items[cidx]) { this.#swap(cidx,right); cidx = right }
                else return ret
            }
        }
     }

    mRetHeap() {
        return [...this.#items]
    }
}

// A = new minHeap([9, 6, 7, 4, 5, 2, 10]);
// console.log([9, 6, 7, 4, 5, 2, 10]);
// console.log(A.mRetHeap());
// console.log(A.mPopRoot());
// console.log(A.mRetHeap())

// B = new minHeap()
// B.mInsert(10)
// B.mInsert(3)
// B.mInsert(0)
// B.mInsert(5)
// B.mInsert(1)
// B.mInsert(4)
// B.mInsert(7)
// console.log(B.mRetHeap());
// console.log(B.mPopRoot());
// console.log(B.mRetSorted());
// console.log(B.mRetHeap());
// console.log(B.mRetSorted(false));
// console.log(B.mRetHeap());
