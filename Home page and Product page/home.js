let arr = ["Medicines","Home care","Child care","Food & Drinks","Hygien"];
let Question = document.getElementById("Question");
let i = 0;
setInterval((()=>{
    Question.style.color = "green";
    Question.innerText = arr[i];
    i++;
    if(i==arr.length-1){
        i=0;
    }
}),3000)




