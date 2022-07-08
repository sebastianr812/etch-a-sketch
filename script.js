let color='black'
let click=true

function makeBoard(size){
    const board=document.querySelector('#gameBoard')
    const squares=board.querySelectorAll('div')
    squares.forEach((div)=>{div.remove()})
    board.style.gridTemplateColumns= `repeat(${size}, 1fr)`
    board.style.gridTemplaterows= `repeat(${size}, 1fr)`

    let amount=size*size

    for(let i=1;i<amount+1;i++){
        const div=document.createElement('div')
        div.addEventListener('mouseover',colorSquare)
        div.className='grid'
        div.id=`${i}`
        board.appendChild(div)
    }
}
makeBoard(16)

//sets all divs to white and maintains current grid 
function resetBoard(){
    const board=document.querySelector('#gameBoard')
    const squares=board.querySelectorAll('div')
    squares.forEach((div)=>{div.style.backgroundColor='white'})
}

//function run with event listener
function colorSquare(){
    if (click){
        if(color==='random'){
            this.style.backgroundColor= `hsl(${Math.random() * 360}, 100%, 50%)`
        }else {
            this.style.backgroundColor=color
        }
    }
    
 }

 function changeColor(choice){
    color=choice
 }


function changeSize(input){
    if (input>=2 && input<=100){
        document.querySelector('.error').textContent=''
        makeBoard(input)    
    }else{
        
        document.querySelector('.error').textContent='Error, must be between 2 and 100'
    }
   
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function changeMode(e){
    if (e.target.tagName !== 'BUTTON'){
        click=!click
        if(click){
            document.querySelector('.mode').textContent='Mode:Coloring'
            document.querySelector('.mode').style.color=getRandomColor()
        }else {
            document.querySelector('.mode').textContent='Mode:Not-Coloring'
            document.querySelector('.mode').style.color='black'
            
        }
    }
}

document.querySelector('body').addEventListener('click',changeMode)




