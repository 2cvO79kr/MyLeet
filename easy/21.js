var mergeTwoLists = function(l1, l2) {              // слияние двух листов
    let head = {                                    // задаем начальй лист с сохранением ссылки для вывода результата
        val: -1
    }
    let l3 = head;
    while (l1!=null && l2!=null){                   // выполнение цикла пока один из списков не закончится
        if (l1.val > l2.val){                       // сравнение значений обоих листов, сперва записываем наибоьлшее
            l3.next = l2;
            l2 = l2.next;
         } else {
             l3.next = l1;
             l1 = l1.next;
         }
        l3 = l3.next
    }
    l3.next = l1||l2;
    return head.next;
};