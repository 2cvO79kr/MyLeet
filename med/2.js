var addTwoNumbers = function(l1, l2) {
    let prev = {
        val: 0   
    }
    let head = prev;
    let i = 0;
  while (l1 != null || l2 != null || i!=0){
      let current = {
          val: 0
      }
      let val1 = l1 == null ? 0 : l1.val;
      let val2 = l2 == null ? 0 : l2.val;
      let val3 = (val1 + val2 + i) % 10;
      i = Math.floor((val1 + val2 + i)/10);
      current.val = val3;
    prev.next = current;
    prev = prev.next;
    l2 = l2 == null ? l2 : l2.next;
    l1 = l1 == null ? l1 : l1.next;
    }
    return head.next;
};