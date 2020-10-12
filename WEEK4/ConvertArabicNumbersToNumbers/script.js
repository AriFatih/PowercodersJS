
// Individual decimal places
// Thousands	Hundreds	Tens	Units
// 1	M	C	X	I
// 2	MM	CC	XX	II
// 3	MMM	CCC	XXX	III
// 4		CD	XL	IV
// 5		D	L	V
// 6		DC	LX	VI
// 7		DCC	LXX	VII
// 8		DCCC	LXXX	VIII
// 9		CM	XC	IX



//const chars1 = str1.split('');
//const chars2 = str2.split('');

function arabicToRoman(number1){

    const x = number1.split('');
   
    if (x.length==1){
        x.unshift[0,0,0]
    }else if (x.length==2){
        x.unshift[0,0] 
    }else if (x.length==3){
            x.unshift[0] }


        if (  x[3]==1){
            x[3]= I;
        } else if (x[3]==2){
            x[3]= II;
         } else if ( x[3]==3){
                x[3]= III;
        } else if ( x[3]==4){
            x[3]=IV;
        } else if ( x[3]==5){
            x[3]= V;
        } else if ( x[3]==6){
            x[3]= VI;
        }else if ( x[0]==7){
            x[3]= VII;
        }else if ( x[0]==8){
            x[3]= VIII;
        }else if ( x[0]==9){
            x[3]= IX;
        }

        if (  x[2]==1){
            x[2]= X;
        } else if (x[2]==2){
            x[3]= XX;
         } else if ( x[2]==3){
                x[2]= XXX;
        } else if ( x[2]==4){
            x[2]= XL;
        } else if ( x[3]==5){
            x[2]= L;
        } else if ( x[3]==6){
            x[2]= LX;
        }else if ( x[0]==7){
            x[2]= LXX;
        }else if ( x[0]==8){
            x[2]= LXXX;
        }else if ( x[0]==9){
            x[2]= XC;
        }
    
    
    
   

console.log(x);   
return x;
}
HammingDistance();




