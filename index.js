const arrPic =[
    'https://cdn-icons-png.flaticon.com/256/4825/4825112.png' ,'https://cdn-icons-png.flaticon.com/256/4825/4825047.png',
    'https://cdn-icons-png.flaticon.com/256/4825/4825082.png','https://cdn-icons-png.flaticon.com/256/4825/4825031.png',
    'https://cdn-icons-png.flaticon.com/256/4825/4825015.png','https://cdn-icons-png.flaticon.com/256/8360/8360539.png',
    'https://cdn-icons-png.flaticon.com/256/8326/8326722.png','https://cdn-icons-png.flaticon.com/256/4825/4825076.png',
    'https://cdn-icons-png.flaticon.com/256/4825/4825027.png','https://cdn-icons-png.flaticon.com/256/6729/6729050.png',
    'https://cdn-icons-png.flaticon.com/256/8326/8326716.png','https://cdn-icons-png.flaticon.com/256/4825/4825051.png',
    'https://cdn-icons-png.flaticon.com/256/4825/4825051.png','https://cdn-icons-png.flaticon.com/256/15197/15197100.png',
    'https://cdn-icons-png.flaticon.com/256/15196/15196530.png','https://cdn-icons-png.flaticon.com/256/15197/15197091.png',
    'https://cdn-icons-png.flaticon.com/256/15196/15196520.png','https://cdn-icons-png.flaticon.com/256/11564/11564847.png',
    'https://cdn-icons-png.flaticon.com/256/9559/9559020.png','https://cdn-icons-png.flaticon.com/256/8830/8830758.png',
    'https://cdn-icons-png.flaticon.com/256/4825/4825072.png','https://cdn-icons-png.flaticon.com/256/5020/5020319.png',
    'https://cdn-icons-png.flaticon.com/256/8360/8360497.png','https://cdn-icons-png.flaticon.com/256/7985/7985404.png',
    'https://cdn-icons-png.flaticon.com/256/7985/7985404.png','https://cdn-icons-png.flaticon.com/256/10006/10006116.png',
    'https://cdn-icons-png.flaticon.com/256/4825/4825038.png','https://www.flaticon.com/premium-sticker/thinking_6066614',
    'https://cdn-icons-png.flaticon.com/256/6066/6066521.png','https://cdn-icons-png.flaticon.com/256/4825/4825072.png'
     ]
   
     const container = document.getElementById("imageContainer");
       let currentIndex = 0;
       function displayImages(startIndex) {
         container.innerHTML = "";
         for (let i = startIndex; i < Math.min(startIndex + 4, arrPic.length); i++) {
           const img = document.createElement("img");
           img.src = arrPic[i];
           img.className = "image";
           img.onclick = function() {selectedImage(arrPic[startIndex + i]); };
           container.appendChild(img);
         }
       }
   document.getElementById("howtoplay").addEventListener("click",function(){

    const how_toplay = document.getElementById("howToplay")
    const Content = document.querySelector(".content");
    Content.innerHTML =  `<p> 
  <strong>SOS Game Rules:</strong><br><br>

  🔹 <strong>Objective:</strong> Be the player to create the most "SOS" sequences either horizontally, vertically, or diagonally.<br><br>

  🔹 <strong>Step 1:</strong> Each player enters their name and chooses an avatar by clicking on one of the images.<br><br>

  🔹 <strong>Step 2:</strong> After all players are ready, click on <strong>“Play...!”</strong> to start the game.<br><br>

  🔹 <strong>Step 3:</strong> Players take turns placing either "S" or "O" in the grid.<br><br>

  🔹 <strong>Step 4:</strong> A point is awarded each time a valid “SOS” sequence is formed.<br><br>

  🔹 <strong>Step 5:</strong> The game continues until the board is full. The player with the highest score wins!<br><br>

  🔹 💡 <em>Tip:</em> Think ahead and block your opponents while creating your own “SOS” chain!
</p>
`;
    how_toplay.style.display = "block";

    window.onclick = function (event) {
            if (event.target == how_toplay) {
               how_toplay.style.display = "none";
            }
        }

    console.log("heyyy")
   })
       function showNextImages() {
         if (currentIndex + 4 < arrPic.length) {
           currentIndex++;
           displayImages(currentIndex);
         }
       }
   
       function showPrevImages() {
         if (currentIndex > 0) {
           currentIndex--;
           displayImages(currentIndex);
         }
       }
   
       const prevBtn = document.getElementById("prevBtn");
       const nextBtn = document.getElementById("nextBtn");
   
       prevBtn.addEventListener("click", showPrevImages);
       nextBtn.addEventListener("click", showNextImages);
   
       displayImages(currentIndex);
   
   function selectedImage(imgurl) {
     const imageBoxes = document.getElementsByClassName('image-box');
               for (let i = 0; i < imageBoxes.length; i++) {
                   if (!imageBoxes[i].hasChildNodes()) {
                       const selectedImage = document.createElement('img');
                       selectedImage.src = imgurl;
                       selectedImage.classList.add('selected-image');
                       imageBoxes[i].appendChild(selectedImage);
                       break; 
                   }
               }
               currentIndex = arrPic.indexOf(imgurl);
             }
   
   
   
   
             
             document.addEventListener('DOMContentLoaded', function () {
       const form = document.querySelector('.gameForm');
   
     
       function checkInputs() {
           const inputs = form.querySelectorAll('input[type="text"]');
           let allFilled = true;
           inputs.forEach(input => {
               if (input.value === '' || input.value === 'Enter Your Name') {
                   allFilled = false;
               }
           });
           return allFilled;
       }
       
      
       form.addEventListener('submit', function (event) {
         const checkImg = form.querySelectorAll(".selected-image")
           event.preventDefault(); 
   
           if (!checkInputs() && checkImg.length<4) {
               alert('Please enter your names. And choose your icon');
             } 
             else if(!checkInputs() && checkImg.length==4){
             alert('Please enter your names. ');
           }
             else if(checkInputs() && checkImg.length<4){
             alert('Please choose your icon. ');
           }
           else if(checkInputs() && checkImg.length==4){
             const usernames = Array.from(form.querySelectorAll('input[type="text"]')).map(input => input.value);
             localStorage.setItem("usernames", JSON.stringify(usernames));
             
   
   
           const selectedImages = Array.from(checkImg).map(img => img.src);
           localStorage.setItem("selectedImages", JSON.stringify(selectedImages));
             window.open('game.html','_self')
           }
       });
   });
   
