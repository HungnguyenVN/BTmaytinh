let check = false;
function setOutput(number){
    if (check == true){
        document.getElementById('output').value ="";
    }
document.getElementById('output').value += number;
check = false;
}
function cal(){
let input = document.getElementById('output').value;
result = eval(input);
document.getElementById('output').value = result;
check =true;
}
function xoa(){
    var str = document.getElementById('output').value;
    var result1 = str.substring(0, str.length-1);
    document.getElementById('output').value = result1;
}
function clear1(){
    document.getElementById("output").value = "";
}
