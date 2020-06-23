var hasPathSum = function(root, sum) {
    if (root == null) return false;         //базовое условие выхода из рекурсии
    if (root.left == null && root.right == null) return (sum - root.val == 0);  //фиксирование наличия требуемой суммы в ветви
    
    return (hasPathSum(root.left, sum - root.val)||hasPathSum(root.right, sum - root.val)); // =если хоть в одной ветви сумма нашлась - true
  
};