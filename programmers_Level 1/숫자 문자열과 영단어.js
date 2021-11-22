//s는 "one4seveneight"이러한 문자열이고 리턴값은 영어로 들어온 숫자를 숫자로 변경하여 해당 값을 숫자형태로 리턴해야함.
//들어온 문자열 중 해당하는 부분을 전부 숫자로 치환

function solution(s) {
    s = s.replace(/zero/g,0)
    .replace(/one/g,1)
    .replace(/two/g,2)
    .replace(/three/g,3)
    .replace(/four/g,4)
    .replace(/five/g,5)
    .replace(/six/g,6)
    .replace(/seven/g,7)
    .replace(/eight/g,8)
    .replace(/nine/g,9)
    
    return Number(s);
}
