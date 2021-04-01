
function setValue(num){
    document.getElementById("show_selected_value").innerHTML = num;
}

var a = "";
var b = "";
var op = '';
var numLIst= [];
var operatorList = []
var isCalculated = false
function getValue(getNum){ 
    b = b + getNum;
    a = a+getNum;
    setValue(a);
}
function deleteSingleDigit(digit){
    a = digit.slice(0, -1);
    setValue(a);
}

function delSingleDigit(){
    if(!isCalculated){
        deleteSingleDigit(a)
        operatorList.pop()
    }
}

function allClear(){
    a = ""
    b = ''
    numLIst = []
    operatorList=[]
    setValue("0000000")
}
function pushOperator(operator){

    if(b!= ""){
        numLIst.push(b)
        b = ""
    }
    operatorList.push(operator);
    a = a+ operator;
    setValue(a)
}
function equals(){
    op = a.slice(-1);
    if(op === '-' || op === '+' || op === '*' || op === '/' ){
        setValue('Invalid Opeartion');
        // allClear();
    }
    else{
        numLIst.push(b)
        console.log(op)
        console.log(numLIst)
        console.log(operatorList)
        setValue(calculate())
        isCalculated = true
    }

}

function calculate(){
    // B - Bracket
    // O - of
    // D - Division
    // M - Multiplication
    // A - Addition
    // S - Subtraction
    var i = 0;
    var BODMAS_list = ["/","*","+","-"]

    while(operatorList.length>0){
        console.log(operatorList.indexOf(BODMAS_list[i]))
        while(operatorList.indexOf(BODMAS_list[i]) != -1){
            let j = operatorList.indexOf(BODMAS_list[i])
            let a = parseFloat(numLIst[j])
            let b = parseFloat(numLIst[j+1])
            let op = operatorList[j]
            numLIst[j] = operate(a,b,op)
            numLIst.splice(j+1,1)
            operatorList.splice(j,1)
            console.log("*********")
            console.log(operatorList)
            console.log(numLIst)
        }
        i++
        
    }

   return numLIst[0]
}

function operate(a,b,op){
    switch (op){
        case '/':
            return a/b
        case '*':
            return a*b
        case '+':
            return a+b
        default:
            return a-b
    }
}


