function solution(s){
  //p의 소문자 대문자를 배열로 묶어놓음
    let strP = ['p', 'P'];
  //y의 소문자 대문자를 배열로 묶어놓음
    let strY = ['y', 'Y'];
  //문자열인 s를 배열의 형태로 만듦
    s = s.split('');
  //p가 포함된 갯수를 담은 변수
    let pLen = s.filter((el)=>strP.includes(el)).length;
  //y가 포함된 갯수를 담은 변수
    let yLen = s.filter((el)=>strY.includes(el)).length;
  // 두 값 이 같으면 true 아니면 false
    if(pLen === yLen) return true;
    else return false;
}
