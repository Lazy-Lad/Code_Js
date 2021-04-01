document.getElementById("expression").style.display = "none"

function setValue(num){
    document.getElementById("show_selected_value").innerHTML = num;
}
function setExpression(){
    document.getElementById("expression").style.display = "block"
    document.getElementById("expression").innerHTML = "Exepression is : " + a
}

var a = "";
var b = "";
var op = '';
var numLIst= [];
var operatorList = []
var isCalculated = false
var isDarkModeOn = false
function getValue(getNum){ 
    if(!isCalculated){
        b = b + getNum
        a = a+getNum
        setValue(a)
    }
}
function deleteSingleDigit(digit1,digit2){
    a = digit1.slice(0, -1)
    b = digit2.slice(0, -1)
    setValue(a)
}

function delSingleDigit(){
    if(!isCalculated){
        deleteSingleDigit(a,b)
        if(operatorList.length>1){
            operatorList.pop()
        }
    }
}

function allClear(){
    a = ""
    b = ''
    numLIst = []
    operatorList=[]
    setValue("0000000")
    isCalculated = false
    document.getElementById("expression").style.display = "none"
}
function pushOperator(operator){

    if(!isCalculated){
        if(b!= ""){
            numLIst.push(b)
            b = ""
        }
        operatorList.push(operator);
        a = a+ operator;
        setValue(a)
    }
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
        setExpression()
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
            operate(a,b,op,j)
            console.log("*********")
            console.log(operatorList)
            console.log(numLIst)
        }
        i++
        
    }

   return numLIst[0]
}

function operate(a,b,op,j){
    switch (op){
        case '/':
            numLIst[j] = a/b
            numLIst.splice(j+1,1)
            operatorList.splice(j,1)
            break
        case '*':
            numLIst[j] = a*b
            numLIst.splice(j+1,1)
            operatorList.splice(j,1)
            break
        case '+':
            if(operatorList[j-1] === "-")
            {
                a= parseFloat(numLIst[0])
                b = parseFloat(numLIst[numLIst.length-1])
                numLIst[0] = a + b
                numLIst.pop()
                operatorList.pop()
                break
            }
            else{
                numLIst[j] = a+b
                numLIst.splice(j+1,1)
                operatorList.splice(j,1)
                break
            }
            // return a+b
        default:
            numLIst[j] = a-b
            numLIst.splice(j+1,1)
            operatorList.splice(j,1)
            break
    }
}

function toggleDarkMode(){
    if(!isDarkModeOn){
        document.body.style.backgroundColor = "rgb(11,11,11)"
        document.getElementById("change_title").style.color ="white"
        document.getElementById("screen").style.backgroundColor ="rgb(11,11,11)"
        document.getElementById("numberPad").style.backgroundColor ="rgb(11,11,11)"
        document.getElementById("ControlKey").style.backgroundColor ="rgb(11,11,11)"
        document.getElementById("expression").style.color ="white"
        document.getElementById("show_selected_value").style.color ="white"
        document.getElementById("UI_Theme_button").innerHTML = "Turn off Dark Mode"
        document.getElementById("UI_Theme_button").style.color = "rgb(11,11,11)"
        document.getElementById("UI_Theme_button").style.backgroundColor = "white"
        isDarkModeOn = true
    }else{
        document.body.style.backgroundColor = "white"
        document.getElementById("change_title").style.color ="black"
        document.getElementById("screen").style.backgroundColor ="white"
        document.getElementById("numberPad").style.backgroundColor ="white"
        document.getElementById("ControlKey").style.backgroundColor ="white"
        document.getElementById("expression").style.color ="gray"
        document.getElementById("show_selected_value").style.color ="black"
        document.getElementById("UI_Theme_button").innerHTML = "Turn on Dark Mode"
        document.getElementById("UI_Theme_button").style.color = "whitesmoke"
        document.getElementById("UI_Theme_button").style.backgroundColor = "rgb(11,11,11)"
        isDarkModeOn = false
    }
    
}

