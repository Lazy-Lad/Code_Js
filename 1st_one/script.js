
function setValue(num){
    document.getElementById("show_selected_value").innerHTML = num;
}

var a = "";
var b = "";
var op = '';
var numLIst= [];
var operatorList = []
function getValue(getNum){ 
    a = a+getNum;
    setValue(a);
}
function deleteSingleDigit(digit){
    a = digit.slice(0, -1);
    setValue(a);
}

function delSingleDigit(){
    deleteSingleDigit(a);
}

function allClear(){
    a = "";
    numLIst = [];
    operatorList=[];
    setValue('');
}
function pushOperator(operator){
    numLIst.push(a);
    operatorList.push(operator);
    a = a+ operator;
    b = b +  numLIst.slice(-1) + operatorList.slice(-1);
    setValue(b)
}
function equals(){
    op = a.slice(-1);
    if(op === '-' || op === '+' || op === 'X' || op === '/' ){
        setValue('Invalid Opeartion');
    }
    else{
        numLIst.push(a);
    }
    console.log(op)
    console.log(numLIst)
    console.log(operatorList)
}


