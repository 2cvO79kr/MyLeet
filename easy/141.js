var hasCycle = function(head) {                                //наличие цикла в листе
    let slow = head;                                            //быстрый и медленный указатели
    let fast = head;
    if (head == null || head.next == null) return false;                //если лист пуст либо имеет одно значение false
 while (fast != null && fast.next != null) {                //пока быстрый не дойдет до конца списка
  
    slow = slow.next;                        // указатели переходят с разным шагом на след значения
    fast = fast.next.next;
    if (slow == fast)break;         //если значения совпадут, то F завершил цикл как минимум раз
 }
  return slow==fast;    
};