function equation(value){

   var strva=value;
   var numstr='';
   var oparetor='';
   var total;
   
for(i=0;i<value.length;i++){
    if(strva[i]=='+') oparetor += '+';
    else if (strva[i]=='-') oparetor +='-';
    else if (strva[i]=='*') oparetor +='*';
    else numstr+=strva[i];
}

    total=parseInt(numstr[0]);
    for(i=0;i<numstr.length;i++){
        if(oparetor[i-1]=='+') total+=parseInt(numstr[i]);
        else if (oparetor[i-1]=='-') total-=parseInt(numstr[i]);
        else if (oparetor[i-1]=='*') total*=parseInt(numstr[i]);
    }
    return total;

}
console.log(equation("1+1"));
console.log(equation("7*4-2"));
console.log(equation("1+1+1+1+1"));