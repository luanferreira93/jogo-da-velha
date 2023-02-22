const cell = document.querySelectorAll('.cell');

const player_X = 'X';
const player_O = 'O';

let shiftCheck = true;

document.addEventListener('click',(event)=>{
    if(event.target.matches('.cell')){
       play(event.target.id);
    }
});


function play(id){
  const cell = document.getElementById(id);
  turn = shiftCheck ? player_X : player_O;
  cell.innerText = turn;
  shiftCheck = !shiftCheck;
}