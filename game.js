    
let turnOfPlayer = 1
let finalArr = []
finalArr[0] = 0
let finalIndexArr =[]
finalIndexArr[0] = 0
let score1 = 0
let score2 = 0
let score3 = 0
let score4 = 0

// dynamically arrange boxes
var container = document.getElementById("sosBox");
    for (var i = 1; i <= 49; i++) {
        finalIndexArr[i] = i;
        var box = document.createElement("div");
        box.className = "box";
        box.id = i;
        container.appendChild(box);
    }



    //placing icon in table
    document.addEventListener("DOMContentLoaded", function () {

        const storedImages = localStorage.getItem("selectedImages");
        const selectedImages = JSON.parse(storedImages);
        const userName = localStorage.getItem("usernames");
        const userNames = JSON.parse(userName);
        const userElements = document.querySelectorAll('.user');

        selectedImages.forEach(function (imageUrl, index) {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.className = "image"
            userElements[index].textContent = userNames[index]; 
            userElements[index].appendChild(img);
        });


    });



    
    //onload the message
    window.onload = showMessage;
    function showMessage() {
        const game = document.getElementById("sosBox");
        const turn = document.getElementById("turn");
        const Content = document.querySelector(".content");
        const userName = localStorage.getItem("usernames");
        let userNames = JSON.parse(userName);
        Content.innerHTML = "<p>Start the game</p>";
        turn.style.display = "block";
        setTimeout(function() {
            Content.innerHTML = ''; 
            turn.style.display = "none"; 
            Content.innerHTML = `<p>${userNames[0]}, it's your turn.</p>`;
            turn.style.display = "block";
            setTimeout(function() {
                Content.innerHTML = ''; 
                turn.style.display = "none"; 
            }, 2000); 
        }, 2000); 
    }
//create an eventlistener to handle the game 
    document.getElementById("sosBox").addEventListener("click", handleGameClick)
    function handleGameClick(event) {
        const elemt = event.target;
        if (elemt.classList.contains('box')) {
            if(turnOfPlayer==1){
                elemt.innerHTML=elemt.textContent="S"
                finalArr[elemt.id] = "S"
                score(elemt,turnOfPlayer)
                turnOfPlayer = 2
            }
            else if(turnOfPlayer==2){
                elemt.innerHTML=elemt.textContent="O"
                finalArr[elemt.id] = "O"
                score(elemt,turnOfPlayer)
                turnOfPlayer = 3
            }
            else if(turnOfPlayer==3){
                elemt.innerHTML=elemt.textContent="S"
                finalArr[elemt.id] = "S"
                score(elemt,turnOfPlayer)
                turnOfPlayer = 4
            }
            else if(turnOfPlayer==4){
                elemt.innerHTML=elemt.textContent="O"
                finalArr[elemt.id] = "O"
                score(elemt,turnOfPlayer)
                turnOfPlayer = 1
            }
          
            playerTurns(turnOfPlayer)
        }
    }
//display the player turns 
    function playerTurns(turnOfPlayer){
      
        const game = document.getElementById("sosBox");
        const turn = document.getElementById("turn");
  const Content = document.querySelector(".content");
  const userName = localStorage.getItem("usernames");
  let userNames = JSON.parse(userName);
 

        if (turnOfPlayer==2){
            Content.innerHTML = `<p>${userNames[1]}, it's your turn.</p>`;
  turn.style.display = "block";
  setTimeout(function() {
     Content.innerHTML = ''; 
      turn.style.display = "none"; 
    }, 2000); 
}
else if (turnOfPlayer==3){
    Content.innerHTML = `<p>${userNames[2]}, it's your turn.</p>`;
    turn.style.display = "block";
    setTimeout(function() {
        Content.innerHTML = ''; 
        turn.style.display = "none"; 
    }, 2000); 
  
}
else if (turnOfPlayer==4){
    Content.innerHTML = `<p>${userNames[3]}, it's your turn.</p>`;
    turn.style.display = "block";
    setTimeout(function() {
        Content.innerHTML = ''; 
        turn.style.display = "none"; 
    }, 2000); 
}
else if (turnOfPlayer==1){
    Content.innerHTML = `<p>${userNames[0]}, it's your turn.</p>`;
    turn.style.display = "block";
    setTimeout(function() {
        Content.innerHTML = ''; 
        turn.style.display = "none"; 
    }, 2000); 
        }
        }


    
 // Update score in display
function updateScore(turnOfPlayer,scores){
    if(turnOfPlayer==1){
        const user1Element = document.getElementById("1")
        user1Element.innerHTML = user1Element.textContent = scores
        
    }
    else if(turnOfPlayer==2){
        const user1Element = document.getElementById("2")
        user1Element.innerHTML = user1Element.textContent = scores
        
    }
    else if(turnOfPlayer==3){
        const user1Element = document.getElementById("3")
        user1Element.innerHTML = user1Element.textContent = scores
     
        
        
    }
    else if(turnOfPlayer==4){
        const user1Element = document.getElementById("4")
        user1Element.innerHTML = user1Element.textContent = scores

    }

}

function findWinner(){
   var  winner = 0
  const arrscore = [score1,score2,score3,score4]
    const maxNumber = Math.max(arrscore[0],arrscore[1],arrscore[2],arrscore[3])
    const winnerIndex = arrscore.indexOf(maxNumber);
    const userName = localStorage.getItem("usernames");
    let userNames = JSON.parse(userName);
    const winnerName = userNames[winnerIndex];
    localStorage.setItem('winner', winnerName);
    window.open('winner.html', '_self');

}
//  calculate the score
       function score(element,turnOfPlayer){
        var c=0
        for (var i=0;i<finalArr.length;i++){
            if(finalArr[i]=='S'||finalArr[i]=='O'){
                c++
            }
        }
       if(c==49){
        findWinner()
        
       }
           const id =Number(element.id) 
           var scores = 0;
           function findScore(scores,turnOfPlayer){
               if (turnOfPlayer == 1){
                return score1 += scores
               }
               else if (turnOfPlayer == 2){
                return score2 +=scores
               }
               else if (turnOfPlayer == 3){
                return score3 +=scores
               }
               else if (turnOfPlayer == 4){
                return score4 +=scores
               }
            
           }

           function setStyles(id) {
            const element = document.getElementById(id.toString());
            if (element) {
                element.style.color = 'wheat';
                element.style.fontFamily = "Lucida Handwriting";
            }
        }
           
           if (element.textContent=='S'){
               let arr = [1,2,3,4,5,6,7,8,15,22,29,36,43,44,45,46,47,48,49,42,35,28,21,14,9,10,11,12,13,20,27,34,41,40,39,38,37,30,23,16]
               let arr1 =[17,18,19,24,25,26,31,32,33]
            if(arr.includes(id)){
                if (element.textContent=='S' && finalArr[id+1] == 'O' && finalArr[id+2] == 'S' ){
                   setStyles(id)
                   setStyles(id + 1)
                   setStyles(id + 2)
                scores++;
                const num = findScore(scores,turnOfPlayer)
                updateScore(turnOfPlayer,num)

                }
                if (element.textContent=='S' && finalArr[id-1]=='O' && finalArr[id-2]=='S'){
                    setStyles(id)
                   setStyles(id - 1)
                   setStyles(id - 2)
                scores++;
                const num = findScore(scores,turnOfPlayer)
                updateScore(turnOfPlayer,num)
                }
                 if(element.textContent=='S' && finalArr[id+7]=='O'  && finalArr[id+14] == 'S') {
                    setStyles(id)
                    setStyles(id + 7)
                    setStyles(id + 14)
                scores++;
                const num = findScore(scores,turnOfPlayer)
                updateScore(turnOfPlayer,num)
                 }
                 if(element.textContent=='S' && finalArr[id-7]=='O'  && finalArr[id-14] == 'S') {
                    setStyles(id)
                   setStyles(id - 7)
                   setStyles(id - 14)
                scores++;
                const num = findScore(scores,turnOfPlayer)
                updateScore(turnOfPlayer,num)
                 }
                 if(element.textContent=='S' && finalArr[id-7-1]=='O'  && finalArr[id-14-2] == 'S') {
                    setStyles(id)
                   setStyles(id - 7 - 1)
                   setStyles(id - 14 - 2)
                scores++;
                const num = findScore(scores,turnOfPlayer)
                updateScore(turnOfPlayer,num)
                 }
                 if( element.textContent == 'S' && finalArr[id+7+1]=='O'  &&  finalArr[id+14+2] == 'S'){
                    setStyles(id)
                    setStyles(id + 7 + 1)
                    setStyles(id + 14 + 2)
                scores++;
                const num = findScore(scores,turnOfPlayer)
                updateScore(turnOfPlayer,num)
                }
                 if( element.textContent == 'S' && finalArr[id+7-1]=='O'  &&  finalArr[id+14-2] == 'S'){
                    setStyles(id)
                    setStyles(id + 7 - 1)
                    setStyles(id + 14 - 2)
                scores++;
                const num = findScore(scores,turnOfPlayer)
                updateScore(turnOfPlayer,num)
                }
               
                
            }
            else if(arr1.includes(id)){
                if( element.textContent=='S'&& finalArr[id+1]=='O' && finalArr[id+2]=='S'){ 
                    setStyles(id)
                    setStyles(id + 1)
                    setStyles(id + 2)
                scores++;
                const num = findScore(scores,turnOfPlayer)
                updateScore(turnOfPlayer,num)
            }
                 if(element.textContent=='S' && finalArr[id+7]=='O' && finalArr[id+14]=='S'){ 
                    setStyles(id)
                   setStyles(id + 7)
                   setStyles(id + 14)
                scores++;
                const num = findScore(scores,turnOfPlayer)
                updateScore(turnOfPlayer,num)
            }
               if(element.textContent=='S' && finalArr[id-7]=='O' && finalArr[id-14]=='S') { 
                setStyles(id)
                setStyles(id - 7)
                setStyles(id - 14)
                scores++;
                const num = findScore(scores,turnOfPlayer)
                updateScore(turnOfPlayer,num)}
                if(element.textContent=='S'&& finalArr[id-1]=='O' && finalArr[id-2]=='S'){  
                    setStyles(id)
                   setStyles(id - 1)
                   setStyles(id - 2)
                scores++;
                const num = findScore(scores,turnOfPlayer)
                updateScore(turnOfPlayer,num)
            }
                if(element.textContent=='S' && finalArr[id+7+1]=='O' && finalArr[id+14+2] =='S'){ 
                    setStyles(id)
                   setStyles(id + 7 + 1)
                   setStyles(id + 14 +2 )
                scores++;
                const num = findScore(scores,turnOfPlayer)
                updateScore(turnOfPlayer,num)
            }
                if(element.textContent=='S' && finalArr[id+7-1]=='O' && finalArr[id+14-2] =='S'){ 
                    setStyles(id)
                    setStyles(id + 6)
                    setStyles(id + 12)
                scores++;
                const num = findScore(scores,turnOfPlayer)
                updateScore(turnOfPlayer,num)
            }
                 if(element.textContent=='S' && finalArr[id-7-1]=='O' && finalArr[id-14-2]=='S') {
                     scores++;
                     setStyles(id)
                     setStyles(id - 7 - 1)
                     setStyles(id - 14 - 2)
                    const num = findScore(scores,turnOfPlayer)
                    updateScore(turnOfPlayer,num)
                }
                 if(element.textContent=='S' && finalArr[id-7+1]=='O' && finalArr[id-14+2]=='S') {
                     scores++;
                     setStyles(id)
                     setStyles(id - 7 + 1)
                     setStyles(id - 14 + 2)
                    const num = findScore(scores,turnOfPlayer)
                    updateScore(turnOfPlayer,num)
                }
           
            }

           }
           else if(element.textContent=='O'){
            let arr =[9,10,11,12,13,16,17, 18,19,20,23 , 24, 25, 26,27,30 ,31, 32,33,34,37,38,39,40,41 ]
            let arr1 = [2,3,4,5,6,44,45,46,47,48]
            let arr2 = [8,15,22,29,36,14,21,28,35,42]
            if(arr.includes(id)){
                if(element.textContent=='O' && finalArr[id+1]=='S' && finalArr[id-1]=='S'){
                    scores++;
                    setStyles(id)
                    setStyles(id + 1)
                    setStyles(id - 1)
                    const num = findScore(scores,turnOfPlayer)
                    updateScore(turnOfPlayer,num)

                }
              if(element.textContent=='O' && finalArr[id+7]=='S' && finalArr[id-7]=='S'){
                scores++;
                setStyles(id)
                setStyles(id + 7)
                setStyles(id - 7)
                const num = findScore(scores,turnOfPlayer)
                updateScore(turnOfPlayer,num)
              }
        if(element.textContent=='O' && finalArr[id+7+1]=='S' && finalArr[id-7-1]=='S'){
            scores++;
            setStyles(id)
                   setStyles(id + 7 + 1)
                   setStyles(id - 7 - 1)
            const num = findScore(scores,turnOfPlayer)
            updateScore(turnOfPlayer,num)
        }
         if(element.textContent=='O' && finalArr[id+7-1]=='S' && finalArr[id-7+1]=='S'){
            scores++;
            setStyles(id)
            setStyles(id + 7 -1)
            setStyles(id - 7 +1)
            const num = findScore(scores,turnOfPlayer)
            updateScore(turnOfPlayer,num)
        }
            }
            else if(arr1.includes(id)){
                if(element.textContent=='O' && finalArr[id+1]=='S' && finalArr[id-1]=='S'){
                    scores++;
                    setStyles(id)
                    setStyles(id + 1)
                    setStyles(id - 1)
                    const num = findScore(scores,turnOfPlayer)
                    updateScore(turnOfPlayer,num)

                }
            }
            else if(arr2.includes(id)){
                if(element.textContent=='O' && finalArr[id+7]=='S' && finalArr[id-7]=='S'){
                    scores++;
                    setStyles(id)
                           setStyles(id + 7 )
                           setStyles(id - 7 )
                    const num = findScore(scores,turnOfPlayer)
                    updateScore(turnOfPlayer,num)
                }

            }
           
            
           }
        }
        