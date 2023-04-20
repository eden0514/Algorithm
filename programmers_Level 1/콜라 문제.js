//https://school.programmers.co.kr/learn/courses/30/lessons/132267
function solution(a, b, n) {
    let empties = n;
    let coke = 0;
    
    while (empties >= a){
        let takes = parseInt(empties/a) * b
        empties = empties % a
        coke = coke + takes
        empties = empties + takes
    }
    return coke;
}
