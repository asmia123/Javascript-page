function myFunction()
{

   let btn = document.getElementById('selectAll');
    var checkboxes = document.getElementsByName('jS');
    for (i = 0;  i< checkboxes.length; i++) {
        checkboxes[i].checked = btn.checked;
    }
}


function checkValue()
{
   
var e = document.getElementById('selectValue').value;
if(e == '1')
{
    hideRow();
}
else if(e == '2'){
    showRow();
}

}
function hideRow(){
    var counter = 0;
    var table = document.getElementById('myTable');
    for (var i = 0; i < table.rows.length; i++) {
        var firstCol = table.rows[i].cells[0]; //first column
      
        console.log(firstCol.getElementsByTagName('input')[0].value)
        if(firstCol.getElementsByTagName('input')[0].checked){
            var arr = [table.rows[i].style.display="none"];
            }
else{
    counter++;
}
    }
if(counter == table.rows.length)
{
    alert("Please select a row");
}

}
function showRow()
{
    location.reload();
}