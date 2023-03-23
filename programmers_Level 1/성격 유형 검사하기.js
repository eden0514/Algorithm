function solution(survey, choices) { 
    let res = {"R":0,"T":0,"C":0,"F":0,"J":0,"M":0,"A":0,"N":0}
    let result="";
    for (let i = 0; i < survey.length ; i++){
        if (choices[i] > 4){
            res[survey[i][0]] += choices[i] - 4
        }else if(choices[i] < 4){
            res[survey[i][1]] += 4 - choices[i]
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

//답이 틀리다. 그리구 더 효율적으로 작성할 수 있는 방법이 있는지 찾아보자. 배열을 사용하면 저런 if문 사용하지 않고 할 수 있을까??
