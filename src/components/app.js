//Skin Logic

const settingBtn = document.getElementById('settings')
const settingsModal = document.getElementById('settings-modal')
const cancelBtn = document.getElementById('cancel-btn')

const submenu = document.getElementById('submenu')
const player1Btn = document.getElementById('player1-btn');
const player2Btn = document.getElementById('player2-btn');

// settingBtn.addEventListener('click',()=>{
//     settingsModal.showModal();
// })

// cancelBtn.addEventListener('click',()=>{
//     settingsModal.close()
// })

// player1Btn.addEventListener('click',()=>{
    
//     submenu.innerHTML = `
//     <div id='cross' className="prueba"><img src="../../img/cross.svg" width="50px" alt=""></div>   
//     <div id='star1' className="prueba"><img src="../../img/star.svg" width="50px" alt=""></div>
//     <div id='rocket1' className="prueba"><img src="../../img/rocket.svg" width="50px" alt=""></div>
//     <div id='robot1' className="prueba"><img src="../../img/robot.svg" width="50px" alt=""></div>
//     <div id='disk1' className="prueba"><img src="../../img/disk.svg" width="50px" alt=""></div>`

//     const crossBtn = document.getElementById('cross');
//     crossBtn.addEventListener('click',()=>{
//     player1 = 'cross'
//     generarTablero('Player 1 Skin Change')
//     settingsModal.close()
//     submenu.innerHTML=``
//     })

//     const star1Btn = document.getElementById('star1');
//     star1Btn.addEventListener('click',()=>{
//     player1 = 'star'
//     generarTablero('Player 1 Skin Change')
//     settingsModal.close()
//     submenu.innerHTML=``
//     })

//     const rocket1Btn = document.getElementById('rocket1');
//     rocket1Btn.addEventListener('click',()=>{
//     player1 = 'rocket'
//     generarTablero('Player 1 Skin Change')
//     settingsModal.close()
//     submenu.innerHTML=``
//     })

//     const robot1Btn = document.getElementById('robot1');
//     robot1Btn.addEventListener('click',()=>{
//     player1 = 'robot'
//     generarTablero('Player 1 Skin Change')
//     settingsModal.close()
//     submenu.innerHTML=``
//     })

//     const disk1Btn = document.getElementById('disk1');
//     disk1Btn.addEventListener('click',()=>{
//     player1 = 'disk'
//     generarTablero('Player 1 Skin Change')
//     settingsModal.close()
//     submenu.innerHTML=``
//     })

// })

// player2Btn.addEventListener('click',()=>{
    
//     submenu.innerHTML = `
//     <div id='circle' class="prueba"><img src="../../img/circle.svg" width="50px" alt=""></div>         
//     <div id='star2' class="prueba"><img src="../../img/star-blue.svg" width="50px" alt=""></div>
//     <div id='rocket2' class="prueba"><img src="../../img/rocket-blue.svg" width="50px" alt=""></div>
//     <div id='robot2' class="prueba"><img src="../../img/robot-blue.svg" width="50px" alt=""></div>
//     <div id='disk2' class="prueba"><img src="../../img/disk-blue.svg" width="50px" alt=""></div>`

//     const circleBtn = document.getElementById('circle');
//     circleBtn.addEventListener('click',()=>{
//     player1 = 'circle'
//     generarTablero('Player 2 Skins Change')
//     settingsModal.close()
//     submenu.innerHTML=``
//     })

//     const star2Btn = document.getElementById('star2');
//     star2Btn.addEventListener('click',()=>{
//     player2 = 'star-blue'
//     generarTablero('Player 2 Skins Change')
//     settingsModal.close()
//     submenu.innerHTML=``
//     })

//     const rocket2Btn = document.getElementById('rocket2');
//     rocket2Btn.addEventListener('click',()=>{
//     player2 = 'rocket-blue'
//     generarTablero('Player 2 Skins Change')
//     settingsModal.close()
//     submenu.innerHTML=``
//     })

//     const robot2Btn = document.getElementById('robot2');
//     robot2Btn.addEventListener('click',()=>{
//     player2 = 'robot-blue'
//     generarTablero('Player 2 Skins Change')
//     settingsModal.close()
//     submenu.innerHTML=``
//     })

//     const disk2Btn = document.getElementById('disk2');
//     disk2Btn.addEventListener('click',()=>{
//     player2 = 'disk-blue'
//     generarTablero('Player 2 Skins Change')
//     settingsModal.close()
//     submenu.innerHTML=``
//     })
// })

//Table Logic

var crossTurn = true;
var win = false

var player1 = 'cross'

var player2 = 'circle';

console.log(player1)

const table = document.getElementById('table')
console.log(table)
function pieceFunction(){

    const piezas = document.querySelectorAll('#pieza');


    function verifyWin(){

        


        if(piezas[0].className == player1 && piezas[1].className == player1 && piezas[2].className == player1){
            setTimeout(() => {
                generarTablero('player1 Win')
            }, 200);
        }
    
        if(piezas[3].className == player1 && piezas[4].className == player1 && piezas[5].className == player1){
            setTimeout(() => {
                generarTablero('player1 Win')
            }, 200);
        }
    
        if(piezas[6].className == player1 && piezas[7].className == player1 && piezas[8].className == player1){
            setTimeout(() => {
                generarTablero('player1 Win')
            }, 200);
        }
    
        if(piezas[0].className == player1 && piezas[3].className == player1 && piezas[6].className == player1){
            setTimeout(() => {
                generarTablero('player1 Win')
            }, 200);
        }
    
        if(piezas[1].className == player1 && piezas[4].className == player1 && piezas[7].className == player1){
            setTimeout(() => {
                generarTablero('player1 Win')
            }, 200);
        }
    
        if(piezas[2].className == player1 && piezas[5].className == player1 && piezas[8].className == player1){
            setTimeout(() => {
                generarTablero('player1 Win')
            }, 200);
        }
    
        if(piezas[0].className == player1 && piezas[4].className == player1 && piezas[8].className == player1){
            setTimeout(() => {
                generarTablero('player1 Win')
            }, 200);
        }
    
        if(piezas[2].className == player1 && piezas[4].className == player1 && piezas[6].className == player1){
            setTimeout(() => {
                generarTablero('player1 Win')
            }, 200);
        }

        //CIRCLE WIN
        if(piezas[0].className == player2 && piezas[1].className == player2 && piezas[2].className == player2){
            setTimeout(() => {
                generarTablero('player2 Win')
            }, 200);
        }
    
        if(piezas[3].className == player2 && piezas[4].className == player2 && piezas[5].className == player2){
            setTimeout(() => {
                generarTablero('player2 Win')
            }, 200);
        }
    
        if(piezas[6].className == player2 && piezas[7].className == player2 && piezas[8].className == player2){
            setTimeout(() => {
                generarTablero('player2 Win')
            }, 200);
        }
    
        if(piezas[0].className == player2 && piezas[3].className == player2 && piezas[6].className == player2){
            setTimeout(() => {
                generarTablero('player2 Win')
            }, 200);
        }
    
        if(piezas[1].className == player2 && piezas[4].className == player2 && piezas[7].className == player2){
            setTimeout(() => {
                generarTablero('player2 Win')
            }, 200);
        }
    
        if(piezas[2].className == player2 && piezas[5].className == player2 && piezas[8].className == player2){
            setTimeout(() => {
                generarTablero('player2 Win')
            }, 200);
        }
    
        if(piezas[0].className == player2 && piezas[4].className == player2 && piezas[8].className == player2){
            setTimeout(() => {
                generarTablero('player2 Win')
            }, 200);
        }
    
        if(piezas[2].className == player2 && piezas[4].className == player2 && piezas[6].className == player2){
            setTimeout(() => {
                generarTablero('player2 Win')
            }, 200);
        }

        //Empate

        if(win == false && piezas[0].className != 'pieza' && piezas[1].className != 'pieza' && piezas[2].className != 'pieza' && piezas[3].className != 'pieza' && piezas[4].className != 'pieza' && piezas[5].className != 'pieza' && piezas[6].className != 'pieza' && piezas[7].className != 'pieza' && piezas[8].className != 'pieza'){
            setTimeout(() => {
                generarTablero('Empate')
            }, 200);
        }
    
    }

    piezas.forEach(pieza =>{
        pieza.addEventListener('click',()=>{
            if(pieza.className == 'pieza'){
                if(crossTurn){
                    pieza.classList.remove('pieza')
                    pieza.classList.add(player1)
                    crossTurn = false
                    verifyWin()
                }else{
                    pieza.classList.remove('pieza')
                    pieza.classList.add(player2)
                    crossTurn = true
                    verifyWin()
                }
            }
    
        })
        
    })
}

function generarTablero(mensaje = ''){
    crossTurn= true;

    win = false
   

    table.innerHTML = `<div className="tablero">
    <div id="casilla" className="casilla">
        <div id='pieza' className="pieza"></div>
    </div>
    <div id="casilla" className="casilla">
        <div id='pieza' className="pieza"></div>
    </div>
    <div id="casilla" className="casilla">
        <div id='pieza' className="pieza"></div>
    </div>
    <div id="casilla" className="casilla">
        <div id='pieza' className="pieza"></div>
    </div>
    <div id="casilla" className="casilla">
        <div id='pieza' className="pieza"></div>
    </div>
    <div id="casilla" className="casilla">
        <div id='pieza' className="pieza"></div>
    </div>
    <div id="casilla" className="casilla">
        <div id='pieza' className="pieza"></div>
    </div>
    <div id="casilla" className="casilla">
        <div id='pieza' className="pieza"></div>
    </div>
    <div id="casilla" className="casilla">
        <div id='pieza' className="pieza"></div>
    </div>
</div>`

    if (mensaje != '') {
        alert(mensaje)
    }

    
    pieceFunction()

}





