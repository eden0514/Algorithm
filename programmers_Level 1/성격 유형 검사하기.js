function solution(survey, choices) { 
    let res = {"R":0,"T":0,"C":0,"F":0,"J":0,"M":0,"A":0,"N":0}
    let result="";
    for (let i = 0; i < survey.length ; i++){
        if (choices[i] < 4){
            res[survey[i][0]] += 4 - choices[i]
        }else if(choices[i] > 4){
            res[survey[i][1]] += choices[i]- 4
        }
    }
    if (res["R"] >= res["T"]){
        result="R"
    }else{
        result="T"
    }
    if(res["C"] >= res["F"]){
        result = result + "C"
    }else{
        result = result + "F"
    }
    if(res["J"] >= res["M"]){
        result = result + "J"
    }else{
        result = result + "M"
    }
    if(res["A"] >= res["N"]){
        result = result + "A"
    }else{
        result = result + "N"
    }
    return result;
}

//어제 문제를 틀린 이유 : 문제를 꼼꼼히 보지 않아서 반대로 값을 주고 있었음
// 저렇게 static하게 작성하는 거 말고 다른 방법 확인하기
