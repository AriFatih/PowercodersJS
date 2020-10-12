// Write a function to compare two strands of DNA and 
// count the differences between them. The Hamming distance 
// is only defined for sequences of equal length, 
// so an attempt to calculate it between sequences of different lengths should not work.

// Example: GAGCCTACTAACGGGAT vs CATCGTAATGACGGCCT
/** array / list of users */

    const str1 = 'GAGCCTACTAACGGGAT';
    const str2 = 'CATCGTAATGACGGCCT';   
    const chars1 = str1.split('');
    const chars2 = str2.split('');

//const chars1 = str1.split('');
//const chars2 = str2.split('');

function HammingDistance(){
    let counter=0; 

    if (chars1.length==chars2.length){        
        for (let i=0; i< chars1.length; i++){
            if(chars1[i]!== chars2[i]){
                counter++;    
             }
        }
    }else {
            alert("Strings should have same length")
        }
        
            // console.log("first One " + chars1[i]);
            // console.log("second One " +chars2[i]);

console.log(counter);   
return counter;
}
HammingDistance();




