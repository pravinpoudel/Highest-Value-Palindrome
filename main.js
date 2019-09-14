'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the highestValuePalindrome function below.
function highestValuePalindrome(s, n, k) {

 var i ; 
 var len= s.length;
 var remca =parseInt(k);
 var s = s.split("");
 var changelog=[];

if(len === 1 && remca >= 1)
 {
     s[0]=9;
     return s.join("");
 }

 
if (!(s === s.reverse)){
    for(i=0 ; i<n/2; i++){
    
     if(s[i]!=s[n-i-1] ){
         if(remca>0)
         {
         remca --;
         if(s[i]>s[n-1-i]){
             s[n-1-i]= s[i];
             if(s[i]!= 9)
             {
              changelog.push(n-1-i);
             }

         }
         else{
             s[i]= s[n-i-1];
             if(s[n-i-1]!=9){
               changelog.push(i);
             }

         }
 
         }

         else{
           return -1;
         }
     }

 }

}


 if(remca>0){

    for (i=0;i<n/2;i++){
        if((changelog.includes(i)||changelog.includes(n-1-i))&& (remca>0)){
           
            s[i]=9;
            s[n-1-i]=9;
            remca = remca-1;
        }

        if(!(changelog.includes(i)|| changelog.includes(n-1-i))|| !(changelog.length != null)){

            if((i==Math.floor(n/2)) && (n%2==1) && remca>0){
                var tempdata = Math.floor(n/2);
                s[tempdata] = 9;
         }

            if(remca>1 && s[i]!=9)
            {
            s[i]=9;
            s[n-1-i]=9;
            remca = remca-2;
            }
            
        }
    }

    if(i===n/2 && remca>0){
        var tempdata = n/2+1;
        s[tempdata] = 9;
    }
        
}

return s.join("");

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const s = readLine();

    let result = highestValuePalindrome(s, n, k);

    ws.write(result + "\n");

    ws.end();
}
