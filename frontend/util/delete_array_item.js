 export const deleteItem = (array,item) => {
    let res = [];
     for (let i = 0; i < array.length; i++ ) {
         if ( array[i] !== item) {
             res.push(array[i]);
         }
     }
     return res;
 }

