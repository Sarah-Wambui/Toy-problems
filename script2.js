// Program that inputs speed of car
//Speed less that 70 to print "Ok"
//speed limit is 70
//Every 5km/s above 70 get 1 demerit point
// calculate demerit points
// use a prompt

function calculateSpeed(){
    let speed= prompt("Enter Speed of Car:");
    if ( speed < 70){
        console.log("Ok")
    }else {
        //calculate demeritPoints for every speed above 70
        demeritPoints = ((speed - 70) / 5)
        if(demeritPoints > 12){
            console.log ("Licence Suspended!")
        }else {
            console.log(`Your demeritPoints are ${demeritPoints}`)
        }
    }
}
calculateSpeed()