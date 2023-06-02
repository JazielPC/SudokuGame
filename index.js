const selectedNum = null;
const selectedTile = null;

let gameBoard = [
    '-3567----',
    '4--8295--',
    '-8---3-6-',
    '-2---58-7',
    '8--2-6--5',
    '3-17---2-',
    '-4-9---7-',
    '--2487--6',
    '----5249-'
];

let gameSolution = [
    '135674982',
    '476829513',
    '289513764',
    '624195837',
    '897236145',
    '351748629',
    '543961278',
    '912487356',
    '768352491'
];

function startGame(){
    for(let i = 1; i <= 9; i++){
        //<div id="i" class="number">i</div>
        let number = document.createElement('number');
        number.id = i;
        number.classList.add('number')
        number.innerText = i;
        document.getElementById("gameNums").appendChild(number);
    }
}
