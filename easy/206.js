






let list1 = {
    val: 1
}
let list2 = {
    val: 3
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



var reverseList = function(head) {
let current = head;
let temp;
let left;
while (current !== null){           //пока лист не закончится

temp = current.next;                //записываем следующее значение во временное хранилище
current.next = left;                //перезаписываем это значение 
left = current;                     //на текущее значение
current = temp;                     //записываем текущее значение во временное хранилище 
    }
return left;
};

let res = reverseList(list1);

