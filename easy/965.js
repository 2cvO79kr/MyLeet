var isUnivalTree = function(root) {//дерево из одинаковых значений
    if (root == null) return true;//условие выхода
    return ((root.left == null || root.val == root.left.val && isUnivalTree(root.left)) //проходимся по левой ветви и сравниваем текущие и следующие значения
    && (root.right == null || root.val == root.right.val && isUnivalTree(root.right)));// ----- для правой
};