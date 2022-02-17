str='(}';
let arr=[];
var e=0;
for ( i=0;i<str.length;i++){
  //guardamos el array anterior en uno nuevo
  if(str[i]=="("||
  str[i]=="{"||
  str[i]=="["||
  str[i]==")"||
  str[i]=="]"||
  str[i]=="}"){
  let arr2=arr[arr.length -1]
  console.log(arr2);
  //preguntamos si se abre algunos de los simbolos y agregamos a la cadena si es asi
  if(str[i]=="("||str[i]=="{"||str[i]=="["){
    arr.push(str[i])
  }
  //si el simbolo anterior guardado es de apertura y el actual de cerrar  se elimina el de apertura
  else if((arr2=="(" && str[i]==")")||
          (arr2=="{" && str[i]=="}")||
          (arr2=="[" && str[i]=="]")){
    arr.pop()
  }
  //si no se cumple la condicion entonces automaticamente es falso
        else {console.log("false");
        //console.log(arr);
        e++; }
    }
}
//en el caso de que cumpla con todas las condiciones el vector deberia estar vacio y retornar true
console.log(arr);
return arr.length ? false:true;