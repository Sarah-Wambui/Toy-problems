//Student Grade Generator
//must be a function ,,,function key word
//check  the input ,,,btwn 0 and 100
//output to corresspond ,,,correct grades shown

//pseudocode notes
//write the function
//declare variable
// use if statements and console log the results

function gradeGenerator(){
    let mark = prompt("Enter Student Mark:");
    if(mark > 79){
        console.log ("Grade A")
    }else if (mark >= 60 && mark <= 79){
        console.log ("Grade B")
    }else if (mark >= 50 && mark <= 59){
        console.log ("Grade C") 
    }else if (mark >= 40 && mark <= 49){
        console.log ("Grade D")
    }else {
        console.log ("Grade E")
    }
}
gradeGenerator() 