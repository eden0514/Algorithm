function newChickenRecipe(stuffArr, choiceNum,OorX=true) {
  //stuffArr => 재료 ->  이 재료 중 0이 3개 이상이 들어 있는 재료는 상한 것이므로 제외시킨다.
  //남은 재료가 없거나 choiceNum보다 작으면 빈배열을 리턴한다.
  //상한 재료를 제외하고 남은 재료 중 choiceNum개를 골라 순열로 만들어준다.
  
  
  let result = [];// 결과를 담아줄 그릇
  if(OorX){
    //상한 재료가 있는지 여부를 판단하여 걸러주기
    stuffArr = stuffArr.filter((el)=>{
    let count = 0;
    let str = String(el)
    for(let i = 0; i< str.length;i++){
      if(str[i] === '0'){
        count++
      }
      if(count === 3) break;
    }
    if(count < 3) return el
  })
    //처음 한 번만 걸러주기 위해 
    OorX = false;
  }
   
  
  //남은 재료가 없거나 choiceNum보다 작으면 빈배열을 리턴
  if(stuffArr.length === 0 || stuffArr.length < choiceNum) return result;
  
  //만약에 초이스 넘이 한개면 배열의 요소 중 하나씩만 뽑아내면 되므로
  if(choiceNum === 1) return stuffArr.map(el=>[el]);
  //초이스 넘이 2개 이상일 때
  stuffArr.forEach((el,idx,arr)=>{
    let first = el; // 배열의 첫번째 값
    let restArr = stuffArr.filter((ele,index)=> idx !== index) // 처음 값을 제외한 나머지 배열을 담아준다.
    let recursionF = newChickenRecipe(restArr,choiceNum-1,OorX) // 첫번째 요소를 제외한 나머지 배열 , 이미 first로 하나를 골랐기 때문에 choiceNum은 하나 뺴준 값을 다시 재귀
    let comArr = recursionF.map(el=>[first, ...el])// 다시 조합하기
    result.push(...comArr)
  })
  return result;
}
