//Function to count correct answers and print results to document 
let QuestionNo =0;
let correctAnswers =0;
let iname ="null";
let ans =["q2a","q2b","q2c","q2b","q2d"];


function myFunction(){
    var ans4 = document.getElementById(ans[4]).checked;
        if(ans4){
            correctAnswers+=1;
        }
        document.getElementById("quiz-form").reset();
        document.getElementById("result").innerHTML = "Congratulations! "+ iname +" You got " + correctAnswers + " answers correct";
    if (correctAnswers === 0) {
        document.getElementById("result").innerHTML = " "+iname +" You didn't answer a single answer correctly!";}
  
}

function question(){
let question = ["1. Javascript is an _______ language?","2. Which of the following keywords is used to define a variable in Javascript?"
,"3. Which of the following methods is used to access HTML elements using Javascript? "
,"4. Upon encountering empty statements, what does the Javascript Interpreter do?"
,"5. Which of the following methods can be used to display data in some form using Javascript?"];

let opt1 = ["Object-Oriented","var","getElementbyId()","Throws an error","document.write()"];

let opt2 = ["Object-Based","Both A and C","getElementsbyClassName()","ignores the statement","console.log()"];

let opt3 = ["Procedural","let","Both A and B","Gives a warning","window.alert()"];

let opt4 = ["None of the above","None of the above","None of the above","None of the above","All of the above"];


    document.getElementById("nxt").innerHTML = "Next";
    document.getElementById("name").style.display ="none";
    QuestionNo = QuestionNo+1; 

    if (QuestionNo === 1){
        iname = document.getElementById("q1").value;
        document.getElementById("Q").innerHTML = question[0];
        document.getElementById("opt1").innerHTML = opt1[0];
        document.getElementById("opt2").innerHTML = opt2[0];
        document.getElementById("opt3").innerHTML = opt3[0];
        document.getElementById("opt4").innerHTML = opt4[0];
         
        
    }
    else if(QuestionNo >= 2){
        // = document.getElementByName("q2").value;
        var ans2 = document.getElementById(ans[QuestionNo-2]).checked;
        if(ans2){
            correctAnswers+=1;
        }
        document.getElementById("quiz-form").reset();
        document.getElementById("Q").innerHTML = question[QuestionNo-1];
        document.getElementById("opt1").innerHTML = opt1[QuestionNo-1];
        document.getElementById("opt2").innerHTML = opt2[QuestionNo-1];
        document.getElementById("opt3").innerHTML = opt3[QuestionNo-1];
        document.getElementById("opt4").innerHTML = opt4[QuestionNo-1];
        //document.getElementById("result").innerHTML = ans[QuestionNo-1];
       if (QuestionNo === 5){ 
        document.getElementById("nxt").style.visibility ="hidden";                                          
        document.getElementById("nxt").disabled = true;
        document.getElementById("submit").disabled =false;
       }

    }
 

}


