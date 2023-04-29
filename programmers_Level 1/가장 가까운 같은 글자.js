https://school.programmers.co.kr/learn/courses/30/lessons/142086
function solution(s) {
    let result = [];
    let before = {};
    for(let i = 0 ; i < s.length ; i++){
       let check = s[i] in before
        if(!check){
           before[s[i]] = i;
        }
        if(i == before[s[i]]){
            result.push(-1)
        }else{
            result.push(i-before[s[i]])
            before[s[i]] = i;
        }
    }
    return result;
}
