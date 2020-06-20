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

var removeElements = function(head, val) { 
    let res = {
        val: -1,
        next: null
    };
    let a = res;
    let v = res;
    res.next = head;
    while(v.next !== null){
        if (v.next == val){
            v.next = v.next.next;
        } else {
            v = v.next;
        }
    }
    return a.next;
 };





console.log(removeElements(list1, a));