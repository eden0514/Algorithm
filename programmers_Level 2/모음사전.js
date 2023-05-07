https://school.programmers.co.kr/learn/courses/30/lessons/84512
function solution(word) {  
    let alp = ['A','E','I', 'O', 'U'];
    let res = -1;
    let bingo = false;
    
    function DFS(w){
        //w가 word랑 같지 않은 경우는 결과값을 1 증가
        if (!bingo){
            res++;
            //w와 인자 값이 일치하게 되면 bingo를 true로 변경
            if(w === word){
                bingo = true;
                return;
            }else if(w !== word && w.length < 5){
                //완전탐색을 하기 때문에 bingo가 true 값이 되더라고 계속 탐색하게 됨. 그러나 bingo가 true 이기에 res 값이 올라가지는 않음.
                for(let i = 0 ; i < alp.length; i++){
                    DFS(w + alp[i])
                }
            }else{
            return;
        }
        }
    }
    DFS("")
    return res;
}
