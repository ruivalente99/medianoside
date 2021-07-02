var table = document.getElementsByClassName("table");
var aNode = table[0];
let grades=[];
var credits=0;
for (var i = 1, row; row = aNode.rows[i]; i++) {
if(row.cells[6].innerHTML.length != 38)
{
   credits+=parseFloat(row.cells[5].innerHTML)
   grades.push(parseFloat(row.cells[6].innerHTML)*parseFloat(row.cells[5].innerHTML))
}
}
var average = grades.reduce((a, b) => a + b, 0)/credits;
alert(" Cadeiras feitas: "+grades.length+"\n Créditos feitos: "+credits+"\n Com a média: "+average);