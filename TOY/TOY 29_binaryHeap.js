//이진 힙(BINARY HEAP)=> 노드의 값이 특정한 순서를 가지고 있는 완전 이진 트리를 말함.
//그러면 완전 이진 트리(COMPLETE BINARY TREE)는? 이진 트리의 마지막 깊이의 노드(제일 끝턩이 자식 노드)를 제외하고는 모든 레벨이 노드로 가득 채워져 있는 것을 의미. 마지막 레벨은 왼쪽 -> 오른쪽으로
//차례대로 채움
//이진 힙 - 최대 힙(MAX HEAP): 부모 노드인 값이 자식 노드의 값보다 큰 경우
//      - 최소 힙(MIN HEAP): 부모 노드인 값이 자식 노드의 값보다 작은 경우

//최대힙 찾는 알고리즘

function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  //완전 이진 트리의 부모 노드의 인덱스가 i이면 왼쪽 자식 노드의 인덱스는 2i+1이고, 오른쪽 자식 노드의 인덱스는 2i +2이다.
  return Math.floor((idx-1)/2)
}

function insert(heap, item) {
  heap.push(item);
  //현재 들어온 item의 값은 항상 마지막 값이므로
  let currentIdx = heap.length-1;
  let parentIdx = getParentIdx(currentIdx);
  //swap 여부를 가르기 위해
  //while문인 이유는 swap후에도 부모노드와 자식노드를 바꿔야 하는 상황이 있을 수 있으므로 
  while(parentIdx >= 0 && heap[currentIdx] > heap[parentIdx]){
    swap(currentIdx,parentIdx,heap)
    currentIdx = parentIdx //들어왔던 값이 부모 노드의 자리와 바뀌었으니까
    parentIdx = getParentIdx(currentIdx)
  }
  return heap;
}
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};
