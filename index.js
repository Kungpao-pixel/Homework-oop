

var totalAge = 0;
var totalPocketMoney = 0;
var totalRegistrants = 0;

function openTab(param){
    document.getElementById(param[0]).className='active'
    document.getElementById(param[1]).className='none'
}

function addDataToTable() {
    var table = document.getElementById("pendaftar").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    
    const name = document.getElementById("username").value;
    const age = parseInt(document.getElementById("age").value);
    const pocketMoney = parseInt(document.getElementById("pocket-money").value); 
    
    if (name.length < 10){
        alert ("Minimum username 10 character");
        return false;
    } 
    if (age < 25){
        alert("Minimum age 25");
        return false;
    } 
    if (pocketMoney < 100000 || pocketMoney > 1000000){
        alert("Minimum money 100.000 and maximum money 1.000.000");
        return false;
    }

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = pocketMoney;

    totalAge += age;
    totalPocketMoney += pocketMoney;
    totalRegistrants++; 

    var avgAge = totalAge / totalRegistrants;
    var avgPocketMoney = totalPocketMoney / totalRegistrants;

    document.getElementById("average-age").innerHTML = avgAge.toFixed(0);
    document.getElementById("average-pocket-money").innerHTML = avgPocketMoney.toFixed(0);

    document.getElementById("form").reset();
    return false;   
}
