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
 * calls the checkPal function and write the result in the "palRes" span
 */
function writePalResult(word){
    if(word!=""){
        if(checkPal(word)){
            document.getElementById("palRes").innerHTML="True";
        }else{
            document.getElementById("palRes").innerHTML="False";
        }
    }
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
            return;
        }
        console.log("the parity you chose is: "+parity);
        if(number%2==parity){
            document.getElementById("gameRes").innerHTML=" The AI played "+ aiNumber +", the sum is "+ number +", YOU WON!";
        }else{
            document.getElementById("gameRes").innerHTML=" The AI played "+ aiNumber +", the sum is "+ number +" YOU LOST!";
        }
    }else{
        document.getElementById("gameRes").innerHTML="The number should be from 1 to 5";
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