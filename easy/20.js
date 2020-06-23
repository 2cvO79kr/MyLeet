var isValid = function(s) {                 //проверка валидной записи скобок
    let a = ['(', '[', '{'];
    let b = [')', ']', '}'];
    let stack = [];
    for (let i = 0; i < s.length; i++){         
            if (a[0]==s[i]) {                   // поочередное сравнение с любой открывающейся скобкой
                stack.push(b[0]);               // запись валидной закрывающией скобки в конец списка
            } else if (a[1]==s[i]) {
                stack.push(b[1]);
            } else if (a[2]==s[i]) {
                stack.push(b[2]);
            } else {                            
            let temp = stack.pop();             //при появлении закрывающейся скобки извлекаем последнее записаное значение из stack
            if (temp!==s[i]) return false;      // если извлеченная скобка не совпадает с текущей - false
            }
    } 
    
    return stack.length == 0;                   
};