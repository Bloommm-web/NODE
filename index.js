let elevatorFloor = Math.floor(Math.random()*9)
const maxFloor = 9
const minFloor = 0
function elevator(yourFloor){
    if(yourFloor > maxFloor || yourFloor < minFloor){
        console.log("There is only 9 floors bro")
    }
    else{
    if(elevatorFloor < yourFloor){
    do {
        console.log("UP " + elevatorFloor);
        elevatorFloor++;
      } while (elevatorFloor < yourFloor);
    }
    if(elevatorFloor > yourFloor){
      do {
        console.log("DOWN " + elevatorFloor);
        elevatorFloor--;
      } while (elevatorFloor > yourFloor);
    } 
    if(elevatorFloor == yourFloor){
            console.log("The elevator is on yours floor bro")
    }
}
}
elevator(5)dasdas