//https://school.programmers.co.kr/learn/courses/30/lessons/120904
function solution(num, k) {
    if(String(num).indexOf(String(k)) !== -1){
        return String(num).indexOf(String(k)) + 1
    }
    return String(num).indexOf(String(k))
}
