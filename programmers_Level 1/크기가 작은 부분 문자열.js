function solution(t, p) {
    let p_len = p.length;
    let num = t.length - p_len + 1; //p와 같은 길이의 숫자를 t에서 만들 수 있는 개수
    let t_arr=t.split('');// 배열로 쪼갬
    let res = [];
    for(let i = 0 ; i < num; i++){ //p 길이만큼 배열을 잘라내서 문자열로 res 배열에 저장
        let tmp = t_arr.slice(i,i+p_len)
        res.push(tmp.join(''))
    }
    let result = res.filter(num => Number(p) >= Number(num)) //배열에 저장된 값 중 p보다 작은 수를 필터링 해주고 해당 개수를 리턴해준다.
    return result.length
}
