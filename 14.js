const prompt=require('prompt-sync')();
let text=prompt("Enter your text:");
let newText="";

function swapCase(text){
  for(let i=0; i<text.length; i++){
    if(text[i]==text[i].toLowerCase()){
        newText+=text[i].toUpperCase();
    }else{
        newText+=text[i].toLowerCase();  
    }
  }
  

}

swapCase(text);
console.log(newText);

