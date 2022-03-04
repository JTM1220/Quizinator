// All button elements

const start_btn = document.querySelector('.start_btn button');
const info_box = document.querySelector('.info_box');
const exit_btn = info_box.querySelector('.buttons .quit');
const continue_btn = info_box.querySelector('.buttons .restart');
const quiz_box = document.querySelector('.quiz_box');
const timeCount = quiz_box.querySelector('.timer .timer_sec');
const result_box = document.querySelector('.result_box');
const restart_quiz = result_box.querySelector('.buttons .restart');


// If start quiz button is clicked

start_btn.onclick=()=>{
    info_box.classList.add("activeInfo");
}
//Exit quiz button

exit_btn.onclick=()=>{
    info_box.classList.remove("activeInfo");
}
//continue quiz button

continue_btn.onclick=()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(30);
}


restart_quiz.onclick=()=>{
    result_box.classList.remove("activeResult");
    window.location.reload();
}
let que_count = 0;
let que_numb = 1;
let counter;
let userScore = 0


const next_btn = quiz_box.querySelector('.next_btn');

next_btn.onclick = ()=>{
    if(que_count<questions.length -1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
    }else{
        showResultBox();
        alert('New highscore' + " "+ userScore);

    }    
}

function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>' +questions[index].numb + '.'+ questions[index].question +'<span>';
    let option_tag = '<div class="option">' + questions[index].options[0]+ '<span></span></div>'
                    +'<div class="option">' + questions[index].options[1]+ '<span></span></div>'
                    +'<div class="option">' + questions[index].options[2]+ '<span></span></div>'
                    +'<div class="option">' + questions[index].options[3]+ '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll('.option');
    for( let i = 0; i<option.length; i++){
        option[i].setAttribute('onclick','optionSelected(this)');
    }
}


function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    if(userAns == correctAns){
        userScore += 1;
        answer.classList.add('correct');
        console.log('Correct');
    }else{
        answer.classList.add('incorrect');
        console.log('Incorrect');
    }
}
    
function showResultBox(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoretext = result_box.querySelector('.score_text');
    if(userScore < 3){
        let scoreTag = '<span>You Scored <p>' + userScore + '</p>out of<p>'+ questions.length+'</p>!</span>'
        scoretext.innerHTML= scoreTag;
    }
    if(userScore > 4){
        let scoreTag = '<span>Awesome! You Scored <p>' + userScore + '</p>out of<p>'+ questions.length+'</p>!</span>'
        scoretext.innerHTML= scoreTag;
    }
    if(userScore < 2){
        let scoreTag = '<span>TRY AGAIN! You only got<p>' + userScore + '</p>out of<p>'+ questions.length+'</p>!</span>'
        scoretext.innerHTML= scoreTag;
    }

}

function startTimer(time){
    counter= setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 0){
            clearInterval(counter);
            showResultBox();
        }
    }
}

function queCounter(){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ que_count +"</p><p>of</p><p>"+ questions.length+"</p><p>questions</span>"
    bottom_ques_counter.innerHTML =totalQuesCountTag;
}
const submit_quiz = result_box.querySelector('.submit ');


submit_quiz.onclick=()=>{

    var hiscore = document.getElementById('hiscore').value;
    alert(hiscore);
}



