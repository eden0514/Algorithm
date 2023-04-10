//https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
    let obj = {}
    let resArr = []
    for (let i = 0; i< name.length ; i++){
        obj[name[i]] = yearning[i]
    }
    let len = photo.length;
    
    for (let j = 0; j < len; j++){
        let res =0
        for(let n of photo[j]){
            if(n in obj){
                res = res + obj[n]
             }
        }
        resArr.push(res)
    }
    return resArr
}
