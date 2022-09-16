

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
    document.getElementById("delete" + no + "").outerHTML = "";
}

function add_row() {
    var new_name = document.getElementById("new_name").value;
    var new_country = document.getElementById("new_country").value;
    var new_age = document.getElementById("new_age").value;

    var table = document.getElementById("table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr> <td><input onblur='findTotalcol1()' type='text' name='col1'  class='row1'/></td><td> <input onblur='findTotalcol2()' type='text' name='col2' class='row2' /></td><td> <input onblur='findTotalcol3()' type='text' name='col3' class='row3' /></td><td> Total row:<input onblur='findTotalrow1()'type='text' id='totalrow1' /></td><td> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>"

    document.getElementById("new_name").value = "";
    document.getElementById("new_country").value = "";
    document.getElementById("new_age").value = "";
}


function findTotalcol1() {
    var arr = document.getElementsByName('col1');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('totalcol1').value = tot;
}
function findTotalcol2() {
    var arr = document.getElementsByName('col2');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('totalcol2').value = tot;
}

function findTotalcol3() {
    var arr = document.getElementsByName('col3');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('totalcol3').value = tot;
}


function findTotalrow1() {
    var arr = document.getElementsByClassName('row1');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('totalrow1').value = tot;
}

function findTotalrow2() {
    var arr = document.getElementsByClassName('row2');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('totalrow2').value = tot;
}


function findTotalrow3() {
    var arr = document.getElementsByClassName('row3');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('totalrow3').value = tot;
}




