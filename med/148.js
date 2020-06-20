var sortList = function(head){
    let leftSlow = head;
    let rigthSlow = head;
    let rigthFast = head.next;
    while (rigthFast!==null){
        if (rigthSlow <= rigthFast){
            rigthSlow = rigthFast;
            } else if (leftSlow <= rigthFast){
            leftSlow.next = leftSlow;
            leftSlow = rigthFast;
            } else {
            leftSlow.next = rigthFast;
            }
        rigthFast = rigthFast.next;
        
    }
    return leftSlow;
}