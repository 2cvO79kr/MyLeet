var searchBST = function(root, val) {
    if (root == null) return null;
    if (root.val == val) {
        return root;
    } else {
         return searchBST(root.right, val) || searchBST(root.left, val);
    }
}