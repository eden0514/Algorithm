// 더 좋은 코드가 있을 것 같다. 다른 방법도 생각해보기
function solution(s) {
    if(s.length === 4 || s.length === 6){
      //지수형태의 값이 들어오게 된다면 해당 값도 숫자로 보기 때문에 이것을 걸러줘야함. ex) 1e2
       if(s.includes('e')){
          return false; 
       }
        return isNaN(+s) ? false : true;
    }else{
        return false;
    }
}
