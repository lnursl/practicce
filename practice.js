alert("Nursultan Raiymbayev, CS-2110");
function knowCurrent() {
    var myDate = new Date();{
    var fullDate = myDate.getFullYear();
     document.getElementById("year").innerHTML = "Year : " + fullDate;
}{
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const a = new Date();
let day = days[myDate.getDay()];
document.getElementById("day").innerHTML = "Today is: " + day;
}{
const a = new Date();
document.getElementById("date").innerHTML ="Date: " + a.getDate();
}{
const a = new Date();
document.getElementById("month").innerHTML ="Month: " + (a.getMonth()+1);
}{
const a = new Date();
document.getElementById("time").innerHTML ="Current time is: " +a.getHours()+":"+ a.getMinutes()+":" + a.getSeconds();
}
}
function knowDaysLeft(){
var today = new Date("02/02/2022");
var gradDay = new Date("05/31/2024");
var Time_diff = gradDay.getTime() - today.getTime();
var Time_diff_days = Time_diff / (1000 * 3600 * 24);
document.getElementById("daysLeft").innerHTML= Time_diff_days + " days left until the freedom!";
}
function multiply()
{
        first_num = document.getElementById("firstNumber").value;
        second_num = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = "Result is: " + (first_num * second_num);
}
function divide()
{
        first_num = document.getElementById("firstNumber").value;
        second_num = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML ="Result is: " +(first_num / second_num);
}