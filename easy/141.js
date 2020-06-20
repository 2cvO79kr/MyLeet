var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    if (head == null || head.next == null) return false;
 while (fast != null && fast.next != null) {
  
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast)break;   
 }
  return slow==fast;    
};