function solution(nums) {
    //우선 nums의 갯수의 반보다 이상으로 가져갈 수 없으므로 길이의 반 값을 정수로
    let half = Math.floor(nums.length/2);
    //배열을 돌으며 같은 값이 있는 것은 한 개의 값만 들어가게 result라는 배열에 저장을 해줌
    let result = [];
    for(let i of nums){
        if(!result.includes(i)){
            result.push(i)
        }
    }
    //그러면 중복된 값은 이제 없어졌고, 그 값이 반보다 많으면 반만 가져갈 수 있고, 반보다 작으면 result의 길이 만큼 가져갈 
    if(half < result.length) return half;
    else return result.length;
}
