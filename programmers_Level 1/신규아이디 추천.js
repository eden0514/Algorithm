function solution(new_id) {
    new_id = new_id.toLowerCase();
    // 앞의 ^은 not을 의미 뒤의 값을 제외 한 값을 전역에서 찾는다. 
    // 숫자 /d
    new_id = new_id.replace(/[^a-z0-9-_.]/g,"");
    //특수 기호 앞에 \를 붙이면 정규식 패턴이 아닌, 기호 자체로 인식
    //+ 1회 이상 연속으로 반복되는 문자와 가능한 많이 일치 뒤에 '.'은 .으로 치환한다는 의미
    new_id = new_id.replace(/\.+/g,'.')
    //^줄의 시작에서 일치 | or 뒤에 $는 줄 끝에서 일치
    new_id = new_id.replace(/^\.|\.$/g,'')
    if(!new_id.length){
       new_id = 'a' 
    }
    //substr 시작 인덱스와 길이를 넣어줘서 문자열을 잘라줌
    if(new_id.length >= 16){
        new_id = new_id.substr(0,15)
    }
//마지막값이 .이 된 경우 다시 빼줘야함.
    new_id = new_id.replace(/\.$/,'')
//chartAt은 문자열에서 특정 인덱스에 위치하는  유니코드 단일문자를 반환 그래서 해당 값의 마지막값을
//가져올 수 있음
//그 다음 repeat으로 해당 값을 반복해서 작성한다. 단 새아이디의 문자열의 길이가 3이 될때까지만 반복.
    if(new_id.length <= 2){
        new_id = new_id+ new_id.charAt(new_id.length-1).repeat(3-new_id.length)
    }
    
    return new_id
    
}
