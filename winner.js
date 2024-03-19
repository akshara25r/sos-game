const winnerName = localStorage.getItem('winner');
if (winnerName) {
    const winnerpage = document.getElementById("winnerPage");
    winnerpage.innerHTML = `<h1 class="winner">${winnerName}, the winner</h1>`;
}
const btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    window.open("index.html","_self")
    
})