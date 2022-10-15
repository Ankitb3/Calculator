function btall(btnval){
    let newtext = document.querySelector('.screen').value + btnval + "";

    document.querySelector('.screen').value = newtext;
    // console.log(btnval)
}
function calculate(){
    let newtext = document.querySelector('.screen').value;
    document.querySelector('.screen').value = eval(newtext);
}
function clears(){
    document.querySelector('.screen').value = "";
   
}