// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
    const yDiff = p2[0] - p1[0];
    const xDiff = p2[1] - p1[1];
    return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
  }
  
  const baseCase = (arr) => {
    if(arr.length === 3) return Math.min(calculateDistance(arr[0],arr[1]),calculateDistance(arr[1],arr[2]),calculateDistance(arr[0],arr[2]))
    if(arr.length === 2) return calculateDistance(arr[0],arr[1])
  }
  
  const divideNconquer = (points)=>{
    const ptslen = points.length
    if(ptslen <= 3) return baseCase(points)
  
    //divide
    const mid = Math.ceil(ptslen/2)
    const mL= points.slice(0,mid)
    const mR = points.slice(mid)
    console.log(mL,mR)
    let minlen = Math.min(divideNconquer(mL), divideNconquer(mR))
    console.log(minlen)
    //merge
    let ridx = mid
    let lidx = mid
    while(1){
      try{
      if(Math.abs(points[ridx][0] - points[mid][0]) <= minlen) ridx++
      else {ridx--; break}
      } catch (e) {ridx--; break}
    }
    while(1){
      try{
      if(Math.abs(points[lidx][0] - points[mid][0]) <= minlen) lidx--
      else {lidx++; break}
      } catch (e) {lidx++; break}
    }
    console.log(lidx,ridx)
    while(lidx<mid){
      for(let i =mid; i<=ridx; i++){
        let d = calculateDistance(points[lidx],points[i])
        console.log(d)
        if( d < minlen ) minlen = d
      }
      lidx++
    }
    console.log(minlen)
    return minlen
  }
  
  
  const closestPairOfPoints = function (points) {
    // TODO: 여기에 코드를 작성합니다.
    points.sort((a,b)=>a[0]-b[0]) //x 좌표로 정렬
    console.log(points)
    return divideNconquer(points)
  
  };
  
  let points =[[0, 2], [6, 67], [42, 81], [39, 101], [189, 140]]
  output = closestPairOfPoints(points);
  console.log(output); // --> 100 ([0, 0], [0, 1])