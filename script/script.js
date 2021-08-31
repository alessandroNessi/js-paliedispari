/**
 * returns a random number between the given range
 */
function random(min, max){
    if(min<max){
        return(Math.floor(Math.random()*(max-min+1)+min));
    }else{
        return(Math.floor(Math.random()*(min-max+1)+max));
    }
}
/**
 * return True if ("word") is palindrome else False;
 */
function checkPal(word){
    let len=word.length;
    for(let i=0; i<Math.floor(len/2);i++){
        if(word[i]!=word[len-1-i]){
            return false;
        }
    }
    return true;
}
/**
 *  calls the checkPal function and write the result in the "palRes" span
 */
function writePalResult(word){
    if(word!=""){
        if(word.toLowerCase()=="bird"){
            var audio = new Audio("media/bird.mp3");
            audio.play();
        }
        if(checkPal(word)){
            document.getElementById("palRes").innerHTML="True";
            document.getElementById("palRes").classList.replace("red","green");
        }else{
            document.getElementById("palRes").innerHTML="False";
            document.getElementById("palRes").classList.replace("green","red");
        }
    }
}
/**
 * given a number return 'true' if it's even
 */
function isEven(num){
    if(num%2==0){
        return true;
    }
    return false;
}
/**
 * check if the input is formally correct, the result of the game and write it in "gameRes" span
 */
function checkGameResult(number){
    if(number>0 && number<6){
        number= parseInt(number);
        let aiNumber=random(1,5);
        let parity="";
        console.log("the ai number is: " +aiNumber);
        number+=aiNumber;
        if(document.getElementById("evenRadio").checked){
            parity=0;
        }else if(document.getElementById("oddRadio").checked){
            parity=1;
        }else{
            document.getElementById("gameRes").innerHTML="Select a parity!";
            document.getElementById("gameRes").classList.replace("green","red");
            return;
        }
        console.log("the parity you chose is: "+parity);
        if(number%2==parity){
            document.getElementById("gameRes").innerHTML=" The AI played "+ aiNumber +", the sum is "+ number +", YOU WON!";
            document.getElementById("gameRes").classList.replace("red","green");
        }else{
            document.getElementById("gameRes").innerHTML=" The AI played "+ aiNumber +", the sum is "+ number +" YOU LOST!";
            document.getElementById("gameRes").classList.replace("green","red");
        }
    }else{
        document.getElementById("gameRes").innerHTML="The number should be from 1 to 5";
        document.getElementById("gameRes").classList.replace("green","red");
    }
}
//event listener part
//palindrome event listener
document.getElementById("checkPal").addEventListener("click", function(){writePalResult(document.getElementById("wordInput").value)});
document.getElementById("wordInput").addEventListener("keydown", function(event){
    if(event.key=="Enter"){
        writePalResult(document.getElementById("wordInput").value);
    }
});
//gamenumber eventlistener
document.getElementById("checkGame").addEventListener("click", function(){checkGameResult(document.getElementById("numInput").value)});
document.getElementById("numInput").addEventListener("keydown", function(event){
    if(event.key=="Enter"){
        checkGameResult(document.getElementById("numInput").value);
    }
});