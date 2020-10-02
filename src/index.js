module.exports = function check(str, bracketsConfig) {
    let bracketsStr = bracketsConfig.map( (item) => item.join("") );
    i = 0;
    while (i < bracketsStr.length) {
      while(str.includes(bracketsStr[i]) ) {
        str = str.replace(bracketsStr[i], "");
        i = -1;
      }
      i++;
    }
    return (str) ? false : true;
  }
