






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
while (current !== null){

temp = current.next;
current.next = left;
left = current;
current = temp;
    }
return left;
};

let res = reverseList(list1);

console.log(res.next.next.next.next.val);