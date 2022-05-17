function swap(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  
  function getParentIdx(idx) {
    return Math.floor((idx + 1) / 2) - 1
  }

  function getChildIdx(idx) {
      let left = (idx+1)*2 -1
      return [left, left+1]
  }

  
  function insert(heap, item) {
    let cidx = heap.length
    heap.push(item)
    while (1) {
      let pidx = getParentIdx(cidx)
      if (heap[pidx] > item) swap(cidx, pidx, heap)
      else return heap;
      cidx = pidx
    }
  }
  
  function removeRoot(heap) {
    let end = heap[heap.length-1]
    heap[0] = end
    heap.splice(-1,1)
    let cidx = 0;
    // console.log(heap)
    while(1){
        let [left,right] = getChildIdx(cidx);
        if(heap[left] >= heap[right]){
            if(heap[right] < heap[cidx]) {swap(cidx,right,heap); cidx=right}
            else {return heap}
        }
        else {
            if(heap[left] < heap[cidx]) {swap(cidx,left,heap); cidx=left}
            else return heap
        }


    }
  
  }
  
  const binaryHeap = function (arr) {
    return arr.reduce((heap, item) => {
    //   console.log(heap);
      return insert(heap, item);
    }, []);
  };
  
  const heapSort = function (arr) {
    let minHeap = binaryHeap(arr);
    const ret = [];
    while(minHeap.length !== 0){
      ret.push(minHeap[0])
      minHeap = removeRoot(minHeap)
    }
    return ret
  };
  

  // console.log(heapSort([4, 10, 3, 5, 1]))
//   console.log(heapSort([9, 6, 7, 4, 5, 2, 10]))