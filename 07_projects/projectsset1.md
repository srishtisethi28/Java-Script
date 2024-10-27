# Projects related to dom

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code
## project1
```javascript
const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');

buttons.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.id==='grey')
    {
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='white')
    {
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='blue')
    {
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow')
    {
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === "purple") {
      body.style.backgroundColor = "rgb(241, 137, 241)"; 
    }
    
  })
})


```

## project2
```

```

## project 3
```
const clock=document.getElementById('clock')


setInterval(function(){
  let date=new Date()
  clock.innerHTML=date.toLocaleTimeString();
},1000)
```

## project 4
```
let randomNumber=(parseInt(Math.random()*100+1))
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessFeild')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')


let prevGuess=[]
let numGuess=1;

let playGame=true;

if(playGame)
{
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
  })
}
function validateGuess(guess){
  if(guess===''||isNaN(guess)||guess<1||guess>100)
  {
    alert('Please enter valid no.')
  }
  else
  {
    prevGuess.push(guess)
    if(numGuess===11)
    {
      displayGuess(guess)
      displayMessage(`Game over  correct was ${randomNumber}`)
      endGame()
    }
    else
    {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess===randomNumber)
  {
    displayMessage('You guess it right')

endGame()  
}
else if(guess<randomNumber)
{
  displayMessage('No. is low')
}
else
{
  displayMessage('No. is high')
}
}

function displayGuess(guess){
  userInput.value='';
  guessSlot.innerHTML+=`${guess}, `
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}


function displayMessage(message){
  lowOrHi.innerHTML=`h2${message}</h2>`
}

function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newgame">Start new</h2>`
  startOver.appendChild(p);
  playGame=0;
  newGame()

}
function newGame(){
  const newbutton=document.querySelector('#newgame')
  newbutton.addEventListener('click',function(e){
    randomNumber=(parseInt(Math.random()*100+1))
    prevGuess=[]
    numGuess=1;
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true;
  })
}
```
## Project5
```
const insert=document.querySelector('#insert')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`<div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key===" "?"space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});

```

## Project 6
```
//generate a random color
const randomcolor=function(){
  const hex="0123456789ABCDEF"
  let color="#"
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
};

let interval;
const startcolor=function(){
  if(!interval)
  interval=setInterval(change,1000)
  function change(){
    document.body.style.backgroundColor=randomcolor();
  }
}

const stopcolor=function(){
  clearInterval(interval)
  interval=null;
}

document.querySelector('#start').addEventListener('click',startcolor);
document.querySelector('#stop').addEventListener('click',stopcolor);

```