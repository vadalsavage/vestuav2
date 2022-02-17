/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */

const args = process.argv.slice(-1);
console.log(`Running question #2 with args ${args}`)
const csv=require('csv-parser')
const fs=require('fs')
const results=[];

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'output.csv',
  header: [
    {id: 'productId', title: 'ProductId'},
    {id: 'clicks', title: 'Clicks'},
    {id: 'impressions', title: 'Impressions'},
    {id: 'ctr', title: 'Ctr'},
  ]
});

fs.createReadStream(`${args}`)
 .pipe(csv({}))
 .on('data',(data)=> results.push(data))
 .on('end',()=>{
    // funcion para eliminar objetos repetidos
    const eliminaDuplicados = (arr) => {

      const setObj = new Set(); // creamos pares de clave y array
      
      return arr.reduce((acc, elemento) => {
    
        const clave = JSON.stringify(elemento);
    
        if (!setObj.has(clave)){
          setObj.add(clave, elemento)
          acc.push(elemento)
        }
        return acc;
      },[]);
    }
    unicos=eliminaDuplicados(results);
    //usamos la funcion para encontrar los clicks impresiones y ctr
   var data=find(unicos, "entityId");
   console.log(find(results, "entityId"));
   csvWriter
  .writeRecords(data);
 });
 function find(arr, key){
  let arr2 = [];  
  arr.forEach((x)=>{ 
    // verificar si hay algun objeto existente en arr2 que contiene  la "key"
    if(arr2.some((val)=>{ return val["productId"] == x[key] })){  
       // dependiendo del evento que cumpla incremente en uno el valor
       arr2.forEach((k)=>{
         if(k["productId"] === x[key]&&(x["eventType"]=='click')){ 
           k["clicks"]++
           k["ctr"] =k["clicks"]/(k["impressions"]);
         }
         if(k["productId"] === x[key]&&(x["eventType"]=='impression')){ 
           k["impressions"]++
           k["ctr"] =k["clicks"]/(k["impressions"]);
        }
      })  
     }else if(x["eventType"]=='click'){
       // si no se encuentra en el arreglo  se crea el objeto con su respectiva "key"
       let a = {};
       a["productId"] = x[key];
       a["clicks"] =1;
       a["impressions"] = 0;
       arr2.push(a);
     }
     else if(x["eventType"]=='impression'){
      let a = {};
      a["productId"] = x[key];
      a["clicks"] =0;
      a["impressions"] =1;
      a["ctr"] =a["clicks"]/(a["impressions"]);
      arr2.push(a);
    }

  })
  return arr2
}