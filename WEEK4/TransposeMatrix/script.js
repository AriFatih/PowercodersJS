
const array1 = [["A","B","C"], ["D","E"]];     


function TransposeMatrix(){
    
    var t=[];
        
        for (let i=0; i< array1[0].length; i++){
              t[i]=[];
                 for (let j=0; j< array1.length; j++){
                    t[i][j]=array1[j][i];
            }
        }

console.log(t);   
return t;
}
TransposeMatrix()




