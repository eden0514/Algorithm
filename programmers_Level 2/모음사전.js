https://school.programmers.co.kr/learn/courses/30/lessons/84512
function solution(word) {  
    let alp = ['A','E','I', 'O', 'U'];
    let res = -1;
    let bingo = false;
    
    function DFS(w){
        if (!bingo){
            res++;
            if(w === word){
                bingo = true;
                return;
            }else if(w !== word && w.length < 5){
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
