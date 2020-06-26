let list1 = {
    val: 1
}
let list2 = {
    val: 4
}
let list3 = {
    val: 4
}
let list4 = {
    val: 6
}

list1.next = list2;
list2.next = list3;
list3.next = list4;
list4.next = null;
a = 4;

var removeElements = function(head, val) {          // VAL - целевой элемент
    let res = {
        val: -1,
        next: null
    };
    let a = res;                    //указатель-ссылка в начале списка
    let v = res;                        //динамичный указатель
    res.next = head;
    while(v.next !== null){                     //выполняется до тех пор, пока список не закончится
        if (v.next == val){                     //если ц.элемент найден
            v.next = v.next.next;               //пропускаем ссылку
        } else {
            v = v.next;                         //иначе переходим на след лист
        }
    }
    return a.next;
 };
