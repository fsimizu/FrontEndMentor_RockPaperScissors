const paper_btn = document.getElementById("paper_container");
const scissors_btn = document.getElementById("scissors_container");
const rock_btn = document.getElementById("rock_container");

const my_play_btns = document.getElementsByClassName("button_container_play");

const buttons_container = document.getElementById("buttons_container");
const result_container = document.getElementById("result_container");

const result_text_container = document.getElementsByClassName("result_text_container")[0];
const result_text = document.getElementById("result_text");
const result_play_again = document.getElementById("result_play_again");

const my_play_img = document.getElementById("my_play_img");
const house_play_img = document.getElementById("house_play_img");
const house_play_container = document.getElementById("house_play_container");
const house_play_placeholder = document.getElementById("house_play_placeholder");
const my_play_container = document.getElementById("my_play_container");
const my_winner_container = document.getElementById("my_winner_container");
const house_winner_container = document.getElementById("house_winner_container");

const score_number = document.getElementById("score_number");

const src_img = (play) => {
    return `./images/icon-${play}.svg`
}


let my_play;
paper_btn.addEventListener('click', () => { 
    my_play = "paper" 
});
scissors_btn.addEventListener('click', () => { 
    my_play = "scissors"
});
rock_btn.addEventListener('click', () => { 
    my_play = "rock"
})

const game_three = {
    possibilities: 3,
    options: ['rock', 'paper', 'scissors'],
    play: function () {
        let index = Math.floor(Math.random() * this.possibilities);
        return this.options[index]
    }
}


let score = 0;

const youWin = () => {
    score ++;
    // console.log(score);
    
    house_winner_container.classList.remove('winner_shadow');
    my_winner_container.classList.remove('winner_shadow');
    setTimeout( ()=>{
        my_winner_container.classList.add('winner_shadow');
        score_number.innerHTML = score;
    },1000)
    return 'YOU WIN'
}

const youLose = () => {
    // if (score > 0) score --;
    my_winner_container.classList.remove('winner_shadow');
    house_winner_container.classList.remove('winner_shadow');
    setTimeout( ()=>{
        house_winner_container.classList.add('winner_shadow');
        // score_number.innerHTML = score;
    },1000)
    return 'YOU LOSE'
}

const youDraw = () => {
    my_winner_container.classList.remove('winner_shadow');
    house_winner_container.classList.remove('winner_shadow');
    return "IT'S A DRAW"
}


const game_play_three = (my_play, pc_play) => {
    if (my_play === 'rock') {
        if (pc_play === 'rock') {
            return youDraw();
        }
        else if (pc_play === 'paper') {
            return youLose()
        }
        else { return youWin() }
    }
    else if (my_play === 'paper') {
        if (pc_play === 'rock') {
            return youWin();
        }
        else if (pc_play === 'paper') {
            return youDraw()
        }
        else { return youLose() }
    }
    else {
        if (pc_play === 'rock') {
            return youLose();
        }
        else if (pc_play === 'paper') {
            return youWin()
        }
        else { return youDraw() }
    }
}



for (let i = 0; i < my_play_btns.length; i++) {
    my_play_btns[i].addEventListener('click', async () => {
        
        buttons_container.style.display = "none";
        result_container.style.display = "flex";

        setTimeout( ()=>{
            house_play_placeholder.style.display = "none";
            house_play_container.style.display = "flex";
        },500);
        setTimeout( ()=>{
            result_text_container.style.display = "block";
        }, 1000);

        let house_play = game_three.play();
        let result = game_play_three (my_play, house_play)

        my_play_img.src = src_img(my_play);
        // my_play_container.removeAttribute("class");
        my_play_img.parentNode.classList.remove(`paper_border`);
        my_play_img.parentNode.classList.remove(`scissors_border`);
        my_play_img.parentNode.classList.remove(`rock_border`);
        my_play_img.parentNode.classList.add(`${my_play}_border`);

        house_play_img.src = src_img(house_play);
        house_play_img.parentNode.classList.remove(`paper_border`);
        house_play_img.parentNode.classList.remove(`scissors_border`);
        house_play_img.parentNode.classList.remove(`rock_border`);
        house_play_img.parentNode.classList.add(`${house_play}_border`);

        
        // console.log(result);

        // console.log("my play: ", my_play);
        // console.log("opponent play: ", house_play);
        result_text.innerHTML = result

    });
}

const playAgain = () => {
    buttons_container.style.display = "flex";

    result_container.style.display = "none";
    result_text_container.style.display = "none";

    house_play_placeholder.style.display = "block";
    house_play_container.style.display = "none";
}

const closeRules = () => {
    const ovelay = document.getElementById("rules_overlay");
    ovelay.style.height = "0%";
}
const openRules = () => {
    const ovelay = document.getElementById("rules_overlay");
    ovelay.style.height = "100%";
}

