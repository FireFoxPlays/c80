student_list= [];

function submit(){
for(var j=1; j <=4; j++){
    var name=document.getElementById("name"+j).value;
    console.log(name);
    student_list.push("<h4> name - "+name+"</h4>");
}


console.log(student_list);
document.getElementById("result").innerHTML=student_list;
}
function sort(){
    var sort_students=student_list.sort()
    for(var j=1; j <=4; j++){
        var name=document.getElementById("name"+j).value;
        console.log(name);
        student_list.push("<h4> name - "+name+"</h4>");
    }
    
    
    console.log(student_list);
    document.getElementById("result").innerHTML=student_list;
}