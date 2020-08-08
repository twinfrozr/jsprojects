function ageInDays()
{
    var birthYear = prompt('What year u were born?');
    var age_days = (2020-birthYear)*365;
    console.log(age_days);
    var h1=document.createElement('h1');
    var textAns = document.createTextNode('You are '+age_days+' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAns);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset()
{
    document.getElementById('ageInDays').remove();
    
}

function generateCat()
{
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}

function rpsGame(yourChoice)
{
    console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice = yourChoice.id;
    botChoice=numberToChoice(randToRpsInt());

    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);// {'message': 'You won!', 'color': 'green'}
    rpsFrontEnd(yourChoice.id,botChoice, message);

}

function randToRpsInt()
{
    return Math.floor(Math.random()*3);
}

function numberToChoice(number)
{
    return['rock','paper','scissors'][number];
}

function decideWinner(yourChoice, computerChoice)
{
    var rpsDatabase = {
        'rock':{'scissors':1, 'rock':0.5, 'paper': 0},
        'paper':{'rock':1, 'paper':0.5, 'scissors': 0},
        'scissors':{'paper':1, 'scissors':0.5, 'rock': 0},
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];  
}

function finalMessage([yourScore, computerScore])
{
    if(yourScore===0)
    {
        return {'message': 'You lost', 'color': 'red'};
    }
    else if(yourScore ===0.5)
    {
        return {'message': 'you tied', 'color': 'yellow'};
    }
    else
    {
        return {'message': 'won', 'color': 'green' };
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage)
{
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
        
    }

    //lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "height=150 width=150'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>"+ finalMessage['message'] + "</h1>"   
    botDiv.innerHTML = "<img src ='" + imagesDatabase[botImageChoice] + "' height=150 width=150'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    
}

// challenge 4: change the color of all btns

var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++)
{
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy)
{
    if (buttonThingy.value === 'red'){
        buttonsRed();
    }
    else if (buttonThingy.value === 'green'){
        buttonsGreen();
    }
    else if(buttonThingy.value === 'reset')
    {
        buttonsColorReset();
    }
    else if(buttonThingy.value === 'random')
    {
        randomColors();
    }
}

function buttonsRed()
{
    for(let i = 0; i < all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');  
    }
}


function buttonsGreen()
{
    for(let i = 0; i < all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');  
    }
}


function buttonsColorReset()
{
    for(let i = 0; i < all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors()
{
    var choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];
    for (let i =0; i < all_buttons.length; i++)
    {
        let randomNumber = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
        
    }
}