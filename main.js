nameOfTheStudentArray = [];

function submit ()
{
    var displayStudentArray = [];
for (var j = 1 ; j<=4 ; j++) 
{
var nameOfTheStudent = document.getElementById("nomeDoConvidado"+j).value;
nameOfTheStudentArray.push(nameOfTheStudent);
} 
var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;
for (var k = 0; k < lenghtOfNameOfStudentsArray; k++)
{
    displayStudentArray.push("<h4>NAME - "+ nameOfTheStudentArray[k] +"</h4>");
}
var removeCommas = displayStudentArray.join(" ");
document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
document.getElementById("submitButton").style.display = "none";
document.getElementById("sortButton").style.display = "inline-block";
}
function sorting()
 {
    nameOfTheStudentArray.sort();
    var displayStudentArraySorting = [];
var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;
for (var k = 0; k < lenghtOfNameOfStudentsArray; k++) {
    displayStudentArraySorting.push("<h4>NAME -" + nameOfTheStudentArray[k] + "</h4>");
}
var removeCommas = displayStudentArraySorting.join("<br>");
document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;

 }

 function sarching()
 {
    var s= document.getElementById("nomeProcurado").value;
    var found=0
    var j;
    for(j=0; j<nameOfTheStudentArray.length; j++)
    {
        if(s==nameOfTheStudentArray[j]){
            found=found+1;
        }
    }
    document.getElementById("P").innerHTML="Nome encontrado"+found+"vez(es)";
    console.log("nomeProcurado"+found+"vez(es)");
 }