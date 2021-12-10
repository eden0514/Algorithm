function solution(nums) {
    let half = Math.floor(nums.length/2);
    let result = [];
    for(let i of nums){
        if(!result.includes(i)){
            result.push(i)
        }
    }
    if(half < result.length) return half;
    else return result.length;
}
