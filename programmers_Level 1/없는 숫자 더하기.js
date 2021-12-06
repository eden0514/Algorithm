function solution(numbers) {
  //0부터 9까지의 합은 45이고, numbers로 들어온 배열의 합을 구해 45에서 그 합을 빼면 없는 값의 합과 같게 됨.
  return 45 - numbers.reduce((a,c)=>a+c);
}


/*
//처음 
function solution(numbers) {
  //0부터 9 숫자 중 numbers에 없는 숫자를 찾아 해당하는 값을 더한 값을 리턴
    const num = [0,1,2,3,4,5,6,7,8,9];
    //해당 값을 필터를 통해 두 배열을 비교하여 없는 수를 찾음
    let diff = num.filter(el => !numbers.includes(el))
    //없는 수의 배열을 합한 값을 리턴
    return diff.reduce((a,c)=> a+c);
}
*/
