let value01=['Apple',1,false];
let value02=['Fries',2,true];
let value03=['Mars',9,'Apple'];

function check(val01,val02){

    for(let i=0; i< val01.length; i++ ){
        console.log("value01 = ", i ," is ", val01[i], " \ttype is :  ", typeof(val01[i]) );
    }
    console.log();

    for(let i=0;i<val02.length;i++){
        console.log("value02 = ", i ," is ", val02[i], " \ttype is :  ", typeof(val02[i]) );
    }
    console.log();

    for(let i =0; i<val01.length;i++){
    if(typeof(val01[i]) === typeof(val02[i])){
        console.log("value01 is ", val01[i]," \tvalue02 is ", val02[i], " \ttypeof is true");
    }else {
        console.log("value01 is ", val01[i]," \tvalue02 is ", val02[i], " \ttypeof is false");
         }
    }

}

check(value01,value02);