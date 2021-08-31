function checkPal(word){
    let len=word.length;
    for(let i=0; i<Math.floor(len/2);i++){
        if(word[i]!=word[len-1-i]){
            return false;
        }
    }
    return true;
}