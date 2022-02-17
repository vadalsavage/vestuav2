/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

 const args = process.argv.slice(-1);
 console.log(`Running question #3 with args ${args}`)
 
 /**
  * Check if a string has correct use of parenthesis.
  * 
  * @param {String} str - String to be evaluated
  * @returns {Boolean} Returns true if string is valid.
  */
  function parenthesisChecker(str) {
    //se crea una base array
    let arr=[]
    for ( i=0;i<str.length;i++){
      //guardamos el array anterior en uno nuevo
      
      if((str[i]==='(')||
      (str[i]==='{')||
      (str[i]==='[')||
      (str[i]===')')||
      (str[i]===']')||
      (str[i]==='}')){
        let arr2=arr[arr.length -1]
      //preguntamos si se abre algunos de los simbolos y agregamos a la cadena si es asi
      if(str[i]==='('||str[i]==='{'||str[i]==='['){
        arr.push(str[i]);
      }else if(((arr2==='(') && (str[i]===')'))||
              ((arr2==='{') && (str[i]==='}'))||
              ((arr2==='[') && (str[i]===']'))){
        arr.pop();
      }else {
          return false;} 
      }
    }
    //en el caso de que cumpla con todas las condiciones el vector deberia estar vacio y retornar true
    return arr.length ? false:true;
  }
 const isValid = parenthesisChecker(`${args}`);
 console.log(`parenthesisChecker("${args}") = ${isValid}`);
 