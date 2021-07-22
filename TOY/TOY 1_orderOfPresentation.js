// 우선 n개의 배열의 순열 찾아주고
//그 순열 중 k의 순서를 찾아주기
function orderOfPresentation (N, K) {
    //배열을 우선 n의 길이로 만들어주기
  
  
    let arr = [];
    for(let i = 1; i <= N; i++){
      arr.push(i);
    }

  let permutation = function(N,arr){
    let result = [];
    
    if(N === 1) return arr.map(el=>[el]);
  
    arr.forEach((ele,idx,arr)=>{
      let first = ele;
      let restArr = arr.filter((e,index)=> idx !== index)
      let reF = permutation(N-1, restArr)
      let comb = reF.map((el)=>[first,...el])
      result.push(...comb);
     })
    return result
    }
    
  return permutation(N,arr).indexOf(K) // 이렇게 하면 정답을 찾을 수 있을 것이라고 생각했으나.... 배열은 비교하면 주소값이 다르기 때문에 찾을 수 없다.... 기초적인 부분을 빼먹었다. 다시 공부해보자..
}
