function setup(){
    //crie o canvas


    //capture a imagem de vídeo


    //crie o robôzinho do ml5 poseNet para detectar a pose
    
    //mande detectar a pose


    raquete = createSprite(20,200,20,100);
    raquete2 = createSprite(380,200,20,100);
    parede1 = createSprite(200,0,400,1);
    parede2 = createSprite(200,400,400,1);
    
    bola = createSprite(200,200,20,20);
    
}


var pontos = 0;

//crie uma variável para guardar a posiçao do pulso no eixo Y


//crie a function gotResult e
//mande guardar a posição do pulso na variável



function draw(){

    background("white");

    //se a posição do pulso for menor que 350 e maior que 50, mude a posição da raquete para que seja a mesma do pulso

  
    textSize(30);
    text(pontos, 50,50);

    
    

    if(bola.isTouching(raquete)){
        pontos++;
      
    }
    if( bola.x > 400|| bola.x < 0){
        reiniciar()
    }

    bola.bounceOff(raquete);
    bola.bounceOff(raquete2);
    bola.bounceOff(parede1);
    bola.bounceOff(parede2);

    raquete2.bounceOff(parede1);
    raquete2.bounceOff(parede2);

    raquete.collide(parede1);
    raquete.collide(parede2);

    drawSprites()

}

function reiniciar(){
    raquete2.velocityY = 0;
    raquete2.y = 200;
    bola.velocityX = 0;
    bola.velocityY = 0;
    bola.x = 200;
    bola.y = 200;
}

/* CRIE UMA FUNÇÃO PARA INICIAR O JOGO */
/*ELA DEFINE A VELOCIDADE DA BOLA E DA RAQUETE PARA 2 */
