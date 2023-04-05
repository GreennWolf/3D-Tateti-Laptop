import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
// import './app.js'

export default function Page({handleLaptopClick , setIsZoomed}) {

  var crossTurn = true;
var win = false

var player1 = 'cross'

var player2 = 'circle';

console.log(player1)

const table = useRef()
console.log(table)

function Cancel(){
    setIsZoomed(true)
}

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
   

    table.current.innerHTML = `<div class="tablero">
    <div id="casilla" class="casilla">
        <div id='pieza' class="pieza"></div>
    </div>
    <div id="casilla" class="casilla">
        <div id='pieza' class="pieza"></div>
    </div>
    <div id="casilla" class="casilla">
        <div id='pieza' class="pieza"></div>
    </div>
    <div id="casilla" class="casilla">
        <div id='pieza' class="pieza"></div>
    </div>
    <div id="casilla" class="casilla">
        <div id='pieza' class="pieza"></div>
    </div>
    <div id="casilla" class="casilla">
        <div id='pieza' class="pieza"></div>
    </div>
    <div id="casilla" class="casilla">
        <div id='pieza' class="pieza"></div>
    </div>
    <div id="casilla" class="casilla">
        <div id='pieza' class="pieza"></div>
    </div>
    <div id="casilla" class="casilla">
        <div id='pieza' class="pieza"></div>
    </div>
</div>`

    if (mensaje != '') {
        alert(mensaje)
    }

    
    pieceFunction()

}

  useEffect(()=>{
    generarTablero()
  },[])

  return (
      <>
      <button onClick={Cancel} className='Cancel-btn'>EXIT</button>
      <div ref={table} onClick={handleLaptopClick} className="table" id='table'></div>
      </>
  )
}