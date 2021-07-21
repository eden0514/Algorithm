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
    let first = el;
    let restArr = stuffArr.filter((ele,index)=> idx !== index) // 
    let recursionF = newChickenRecipe(restArr,choiceNum-1)
    let comArr = recursionF.map(el=>[first, ...el])
    result.push(...comArr)
  })
  return result;
}
