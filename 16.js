var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
var array3 = [];

function merge_array(array1, array2) {
    
      for(let i = 0; i < array1.length; i++) 
            if(!array3.includes(array1[i]))
               array3.push(array1[i]);

      for(let j = 0; j < array2.length; j++) 
            if(!array3.includes(array2[j]))
               array3.push(array2[j]);

      return array3;         
}


console.log(merge_array(array1, array2));