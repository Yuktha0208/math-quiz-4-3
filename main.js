function adduser(){
    var player1=document.getElementById("player1name").value;
    var player2=document.getElementById("player2name").value;
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);
    window.location="math.html";
}