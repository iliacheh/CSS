window.onload = function(){
    let door1 = document.getElementById('door1');
  	let door2 = document.getElementById('door2');
    let door3 = document.getElementById('door3');
    let startButton = document.getElementById('start');
    let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
    let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
  	let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
    let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
    let currentPlaying = true;  

    let numClosedDoors = 3;
    
    let openDoor1;
    let openDoor2;
    let openDoor3;

    const isBot = (door) =>{
        if(door.src === botDoorPath){
            return true;
        }else{
            return false;
        }
    }

    const isClicked = (door) =>{
        if(door.src === closedDoorPath){
            return false;
        }else{
            return true;
        }
    }

    const playDoor = (door) =>{
        numClosedDoors--;
        if(numClosedDoors === 0){
            gameOver('win');
        }else if(isBot(door)){
            gameOver('lose');
        }
    }

    const randomChoreDoorGenerator = () => {
        const choreDoor = Math.floor(Math.random() * numClosedDoors);
        if(choreDoor === 0){
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
        }else if(choreDoor === 1){
            openDoor1 = beachDoorPath;
            openDoor2 = spaceDoorPath;
            openDoor3 = botDoorPath;
        }else if(choreDoor === 2){
            openDoor1 = spaceDoorPath;
            openDoor2 = botDoorPath;
            openDoor3 = beachDoorPath;
        }else{
            alert("F*ck, something went wrong");
        }
    }
      
  
    door1.onclick = () => { 
        if(currentPlaying && !isClicked(door1)){
        door1.src = openDoor1;
        playDoor(door1);
        }
    } 
		
    door2.onclick = () =>{
        if(currentPlaying && !isClicked(door2)){
        door2.src = openDoor2;
        playDoor(door2);        
        } 
    }

    door3.onclick = () =>{
        if(currentPlaying && !isClicked(door3)){
        door3.src = openDoor3; 
        playDoor(door3);  
        }
    }

    startButton.onclick = () =>{
        if(!currentPlaying){
        startRound();
    }}

    const startRound = () =>{
        door1.src = closedDoorPath;
        door2.src = closedDoorPath;
        door3.src = closedDoorPath;
        numClosedDoors = 3;
        startButton.innerHTML = "Good Luck";
        currentPlaying = true;
        randomChoreDoorGenerator();
    }

    const gameOver = (status) =>{
        if(status === 'win'){
            startButton.innerHTML = "You won! Play again?";
        } else{
            startButton.innerHTML = "Game over! Play again?";
        }
        currentPlaying = false;
    }

    startRound();
};


