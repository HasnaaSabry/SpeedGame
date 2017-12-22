
var num=0;
var key=11;
var count=0;
var all=0;
    function start(){
        count=0;
        all=0;
        document.getElementById('score').innerHTML=count;
        document.getElementById('final1').innerHTML="";
    document.getElementById('final2').innerHTML="";
   myint=setInterval(inter, 1000);     
        
    }
function inter(){
    num=Math.floor(Math.random()*10);
    document.getElementById('box').innerHTML=num;
    all++;
}
function press(){
    key=event.keyCode-48;
    if(num==key){
        count++;     
    }
    document.getElementById('score').innerHTML=count;
}
 function stop(){
    clearInterval(myint);
    document.getElementById('final1').innerHTML="Your Final Score:";
    document.getElementById('final2').innerHTML=count+"/"+all;
    
    
}  
        document.onkeypress=press;
