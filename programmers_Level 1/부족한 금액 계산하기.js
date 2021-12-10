function solution(price, money, count) {
  //price에 몇을 곱해야하는지 찾는 것.
  //1부터 count까지이므로 1 + count를 해준 값을 마지막 값의 반으로 곱해주면 몇 번을 곱해야하는지 알 수 있음
    let mul = (count + 1)*(count/2)
    //총 들어가는 금액이 얼마인지 알 수 있음
    let total = price * mul;
  //만약 들어가는 금액이 가진 돈보다 큰 경우에는 부족한 금액을 리턴하고 가진 돈이 부족하지 않다면 0을 리턴
    return total > money ? total - money : 0
}
