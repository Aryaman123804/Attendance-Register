var studentnames= [];
function submit() {
    var name1= document.getElementById("Student1").value;
    var name2= document.getElementById("Student2").value;
    var name3= document.getElementById("Student3").value;
    var name4= document.getElementById("Student4").value;

    studentnames.push(name1);
    studentnames.push(name2);
    studentnames.push(name3);
    studentnames.push(name4);
    console.log(studentnames);
    document.getElementById("answer").innerHTML= studentnames;
    document.getElementById("buttonsubmit").style.display= "none";
    document.getElementById("buttonsort").style.display= "inline-block";
}
function sort() {
    studentnames.sort();
    console.log(studentnames.sort);
    document.getElementById("answer").innerHTML= studentnames;
}