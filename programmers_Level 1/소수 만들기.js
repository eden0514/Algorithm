//인자인 배열을 받아와서 3개의 조합의 경우의 수를 모두 이차원 배열의 형태로 리턴해준다.
function combination(arr, selectNum = 3) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
    return result;
}
//소수인지 여부 확인해주는 함수
// 2를 제외한 짝수는 모두 소수가 아님. 그 외의 값들은 홀수로 나눠지는 값이 있으면 false
//소수인 경우 true 값으로 리턴이 되므로 filter를 이용해 걸러줄 수 있음
function decimal(num) {
    if(num === 2) return true;
    else if(num%2 === 0){
        return false;
    }else{
        for(let i = 3; i < num; i += 2){
            if(num%i === 0){
                return false;
            }
        }
        return true;
    }
}

function solution(nums) {
  //우선 해당하는 배열의 숫자 중 3개를 골라 3개의 숫자의 합을 만들어줘야한다.
  //배열의 조합을 이용해 모든 경우의 수를 만들어 준다.
    let arr = combination(nums)
    //해당하는 값을 더한 값들을 찾아준다.
    arr = arr.map((el)=>el.reduce((a,c)=>a+c));
  // 더한 값들 중 소수인 것을 filter해서 갯수를 리턴해준다.
    return arr.filter((el)=> decimal(el)).length;
}
