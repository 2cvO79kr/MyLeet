var searchBST = function(root, val) {           //вывести дерево значения val
    if (root == null) return null;          //условие выхода и рекурсии
    if (root.val == val) {              //если значение совпадает, то выводим дерево со значения val
        return root;
    } else {
         return searchBST(root.right, val) || searchBST(root.left, val);        //ищем совпадения c val в обеих ветвях
    }
}