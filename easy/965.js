var isUnivalTree = function(root) {
    if (root == null) return true;
    return ((root.left == null || root.val == root.left.val && isUnivalTree(root.left)) && (root.right == null || root.val == root.right.val && isUnivalTree(root.right)));
};