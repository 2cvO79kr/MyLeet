var isSameTree = function(p, q) {     //идиентичность деревьев
    // проверка первых элементов p и q
      // если элементы не равны - false
      // если элементы равны p и q - left до первого null
      if (p == null && q == null) return true;      //условие выхода из рекурсии
      if ((p == null && q != null) || (p != null && q == null)) return false;
      if (p.val != q.val) return false; 
      return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));    // при любом F в любой ветви выводит F
      
      
  };