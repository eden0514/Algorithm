function partTimeJob(k) {
  // TODO: 여기에 코드를 작성하세요.
  let coins = 0; //거슬러 주는 동전의 갯수
  let wallet = [500,100,50,10,5,1] //동전을 지갑 배열에 저장
  wallet.forEach((coin)=>{
    coins = coins + Math.floor(k / coin) //wallet의 동전으로 나누어지는 갯수를 더해주기
    k = k%coin //거스름돈을 동전으로 나눈 후 나머지 값으로 변경
  })
  return coins;
}
