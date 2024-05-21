let btn1=document.querySelectorAll(".btn1")//array
let btn2=document.querySelector(".btn2")
let quit=document.querySelector(".quit")
let reset=document.querySelector(".reset")
let openGame=document.querySelector(".open")
let player1="start"
let turnX=document.querySelector("#player1")
let turnY=document.querySelector("#player2")
let temp=""
quit.addEventListener("click",function(){
    document.querySelector("body").style.backgroundColor="#7F9C96"
    document.querySelector(".result").innerHTML="Thanks for playing Tic-Tac-Toe game"
    document.querySelector(".newGame").style.display="none"
    openGame.style.display="block"
})
reset.addEventListener("click",()=>{
    btn1.forEach((item1)=>{
        item1.innerHTML=""
        item1.disabled=false
})
})
openGame.addEventListener("click",()=>{
    document.querySelector(".result").style.display="none"
    document.querySelector(".container").style.marginTop="25vh"
    document.querySelector(".game").style.display="block"
    openGame.style.display="none"
    btn1.forEach((item1)=>{
        item1.disabled=false
        item1.innerHTML=""
        item1.style.backgroundColor="rgb(228, 225, 225)"
})
})
btn2.addEventListener("click",()=>{
         document.querySelector(".result").style.display="none"
        document.querySelector(".newGame").style.display="none"
        document.querySelector(".container").style.marginTop="25vh"
        document.querySelector(".game").style.display="block"
    if(turnX.value=='X'){
        turnX.value=""
    }
    else{
        turnY.value=""
    }
        btn1.forEach((item1)=>{
            item1.disabled=false
            item1.innerHTML=""
            item1.style.backgroundColor="rgb(228, 225, 225)"
    })
})
btn1.forEach(function(value){
value.addEventListener("click",function(){
    value.style.backgroundColor="rgb(228, 225, 225)"
if(player1=="start")
    {
       turnX.value="X"
      turnY.value=""
        value.innerHTML="X"
        value.style.color="red"
         player1="stop"
    }
    else{
      turnY.value="0"
        turnX.value=""
        value.innerHTML="0"
        value.style.color="blue"
        player1="start"
    }
    value.disabled=true
    checkingWinner()
})
})
function disable(v1al){
    btn1.forEach((item)=>{
     item.disabled=true
        temp=v1al
          setTimeout("showResult(temp)",3000)
    })
}
function showResult(v1al)
{      
    document.querySelector("body").style.backgroundColor="#7F9C96"
        document.querySelector(".game").style.display="none"
    document.querySelector(".result").style.display="block"
    if(v1al=='X'){

        document.querySelector(".result").innerHTML="Congratulations player1, You win"
    }
    else{
        document.querySelector(".result").innerHTML="Congratulations player2, You win"
    }
    document.querySelector(".container").style.marginTop="40vh"
    document.querySelector(".newGame").style.display="block"
}
let arr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]]
function checkingWinner(){
    arr.forEach(function(item){
  let v1al=btn1[item[0]].innerText
  console.log(v1al)
      let v2al=btn1[item[1]].innerText
      console.log(v2al)
    let v3al= btn1[item[2]].innerText
    console.log(v3al)
    if(v1al!="" && v3al!="" && v3al!=""  ){
       if(v1al==v2al && v2al==v3al){
        GameOver=true
        for(let i=0;i<3;i++){
            btn1[item[i]].style.backgroundColor="#FF2E63"
            btn1[item[i]].style.color="white"
        }
        disable(v1al)
    }
    }
      })
    }
