function checkPal(word){
    let len=word.length;
    for(let i=0; i<Math.floor(len/2);i++){
        if(word[i]!=word[len-1-i]){
            return false;
        }
    }
    return true;
}
function writePalResult(word){
    if(word!=""){
        if(checkPal(word)){
            document.getElementById("palRes").innerHTML="True";
        }else{
            document.getElementById("palRes").innerHTML="False";
        }
    }
}
//event listener part
document.getElementById("checkPal").addEventListener("click", function(){writePalResult(document.getElementById("wordInput").value)});
document.getElementById("wordInput").addEventListener("keydown", function(event){
    if(event.key=="Enter"){
        writePalResult(document.getElementById("wordInput").value);
    }
});
