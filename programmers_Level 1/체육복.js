function solution(n, lost, reserve) { 
    //우선 받은 값을 오름차순으로 정렬을 해준다. 이유는?
		// 인자로 받는 두 값이 정렬이 되어 있지 않으면
/*
n = 5
lost = [4,2]
reserve = [3,5]의 경우 3이 2에게 옷을 빌려주고,5가 4에게 옷을 빌려주면 모두 참여가 가능한데
만약 순서가 정렬이 되어 있지 않으면 3이 4에게 이미 옷을 빌려주어 2는 옷을 못빌리게 되고
5도 옷을 빌려줄 수 없으므로 최선의 정답이라고 할 수 없기 때문에 이러한 부분을 방지하고자 우선
받은 인자의 값을 정렬을 해주는 것입니다. 
*/
    lost.sort(function(a,b){
        return a -b
    })
    reserve.sort(function(a,b){
        return a - b
    })
    //그 다음 여벌의 옷이 있는 사람이 옷을 도둑맞은 경우 자신이 여벌의 옷을 입어야 하므로
		//lost와 reserve에 공통으로 있는 사람은 제외시킨다.
    let noClothes = lost.filter((el) => !reserve.includes(el))
    let real = reserve.filter((el)=> !lost.includes(el))
		//그 다음 여벌이 있는 사람을 돌며 여벌이 있는 사람 앞이나 혹은 뒤의 사람이 옷이 없는 경우
		//옷을 빌릴 수 있으므로 noClothes에서 제외시키고 break로 안의 반복문을 빠져나간다.
		//break의 이유는 해당 자는 이미 옷을 빌려주었으므로 중복으로 빌려줄 수 없으므로 다음으로 넘기기위해
    for(let i = 0; i < real.length;i++){
        for(let j = 0; j < noClothes.length; j++){
            if(real[i]-1 === noClothes[j]){
                noClothes.splice(j,1)
                break;
            }else if(real[i]+1 === noClothes[j]){
                noClothes.splice(j,1)
                break;
            }
        }
    }
//반복문을 빠져나왔음에도 옷이 없는 사람을 제외하면 참여 가능한 사람의 수를 알 수 있다.
    return n - noClothes.length
}
