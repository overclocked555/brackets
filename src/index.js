function noOfOpenBracket(char, bracketsConfig) {
    for (i = 0; i < bracketsConfig.length; i++) {
        if (char === bracketsConfig[i][0]) return i;
    }
    return undefined;
}
function noOfCloseBracket(char, bracketsConfig) {
    for (i = 0; i < bracketsConfig.length; i++) {
        if (char === bracketsConfig[i][1]) return i;
    }
    return undefined;
}

module.exports = function check(str, bracketsConfig) {
    queue = [];
    for (let char of str) {
        noOfCurrentOpenBracket = noOfOpenBracket(char, bracketsConfig);
        noOfCurrentCloseBracket = noOfCloseBracket(char, bracketsConfig);
        //console.log(char, noOfCurrentOpenBracket, noOfCurrentCloseBracket);
        // если не скобка - пропускаем символ
        if (noOfCurrentOpenBracket === undefined && noOfCurrentCloseBracket === undefined) continue;
        //если открывающая скобка - запишем в массив ее номер
        if (noOfCurrentOpenBracket !== undefined) queue.push(noOfCurrentOpenBracket)         
        //если закрывающая, соотвествующая последней открытой - удалим из массива
        else {
            if (queue.pop() !== noOfCurrentCloseBracket) return false;
        }
      }
    return queue.length === 0;
}
