var swapPairs = function(head) {    
    
    if (head == null || head.next == null) return head 
    
    let temp = head.next                    //запоминаем ссылку текущего значения на следующий элемент текущей пары
    
    head.next = swapPairs(temp.next)        //назначаем новую ссылку на следующий элемент под видом вызова рекурсии для следующей пары
    temp.next = head                //определяем записанный элемент перед первым в паре
    return temp
   
};