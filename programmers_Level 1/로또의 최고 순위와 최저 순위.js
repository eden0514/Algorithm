function solution(lottos, win_nums) {
		
    const rank = [6,6,5,4,3,2,1];
  
    const findZero = lottos.filter((el)=>el===0).length;
    const min = lottos.filter((el)=>win_nums.includes(el)).length;
    
    const max = min + findZero;

		
    
    return [rank[max],rank[min]];
}

/*
function solution(lottos, win_nums) {
		//우선 문제에서 원하는 것이 무엇인지 파악
		//동생이 낙서한 숫자와 살아남은 로또 번호를 가지고 해당 값이 최소 몇등일지와 최대 몇등일지를 알아보는
		//문제
		//최소 몇등일지를 생각해본다면 우선 0으로 되어 있는 값이 당첨번호와 일치하는 숫자가 없는 경우가 되겠다.
		// 그러므로 보이는 값 중 당첨번호와 일치하는 것을 찾아준다.
		//최대 몇등일지를 알아보기 위해서는 0으로 되어 있는 값이 모두 당첨번호일 경우를 생각하면
		//해당 값은 이미 일치하는 값 + 0의 갯수가 되겠다.
		//결론적으로는 최소 등수는 보이는 값 중 당첨번호와 일치하는 숫자의 갯수이고
		//최대 등수는 당첨번호와 일치하는 번호 + 0의 갯수를 찾아 등수를 찾으면 되는 것.

		//우선 lottos에서 0의 갯수를 찾아주기
    const findZero = lottos.filter((el)=>el===0).length;
    //당첨 숫자에서 내 로또 번호와 같은 숫자의 갯수를 찾기
    const sameNum = lottos.filter((el)=>win_nums.includes(el)).length;
    
    const max = sameNum + findZero;
    const min = sameNum;
		//찾은 멕스와 민 값이 맞은 숫자의 갯수이므로 등수를 찾기 위해 펑션으로 해당 값을 찾아주게끔 해준다.
    function Lotto(num){
        if(num === 6) return 1;
        if(num === 5) return 2;
        if(num === 4) return 3;
        if(num === 3) return 4;
        if(num === 2) return 5;
        if(num <= 1) return 6;
    }
    return [Lotto(max),Lotto(min)]
}
*/
