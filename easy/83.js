var deleteDuplicates = function(head) {
    let a = head;
    let v = head;
        if (v == null) return v;
        while (v.next !== null){
            if (v.next.val == v.val){
                v.next = v.next.next;
            } else {
                v = v.next;
            }
            
        }
        return a;
    };