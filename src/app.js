
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    posA: [0,0,0],
    posB: [0,0,0],
    posC: [0,0,0],
    fin : false,
    turno: 0,
    Jugada: false,
    
    Jugar : function(location, event){
         var ubicacion = location.getLocation();
         var juego = event.getCurrentTarget();
         if(!juego.fin){
         for(var i = 0;i < 3;i++){
         var posicion = juego.posA.getBoundingBox();
         var posicion2 = juego.posB.getBoundingBox();
         var posicion3 = juego.posC.getBoundingBox();
           
         var posicion4 = juego.posA.getBoundingBox();
         var posicion5 = juego.posB.getBoundingBox();
         var posicion6 = juego.posC.getBoundingBox();
        if(cc.rectContainsPoint(posicion,ubicacion) && juego.posA[i] === 0){
            if(juego.turnos%2 === 1){
                var sprite = juego.posA[i];
                juego.removeChild(juego.posA[i],1);
                juego.posA = posicion;  
                
            }else if(i === 0){
                juego.posB[i].setPosition(350,480);
                    
            }else if(i === 1){
                juego.postApply[i].setPosition(480,480);
                
            }else{
                
                juego.posA[i].setPosition(640,480);
            } 
            juego.posA[i] = 2;
            juego.posA[i].setVisible(false);
            juego.addChild(juego.posA[i],1);
            
        }else{
            
            juego.posA[i] = 1;
        }
        juego.posA[i].setVisible(true);
        juego.turno++;

 }
          for(var i = 0;i < 3;i++){
             if(cc.rectContainsPoint(posicion2,ubicacion) && juego.posB[i] === 0){
            if(juego.turnos%2 === 1){
                var sprite = juego.posB[i];
                juego.removeChild(juego.posB[i],1);
                juego.posA = posicion2;  
                
            }else if(i === 0){
                juego.posB[i].setPosition(310,560);
                    
            }else if(i === 1){
                juego.posB[i].setPosition(460,560);
                
            }else{
                
                juego.posB[i].setPosition(330,560);
            } 
            juego.posB[i] = 2;
            juego.posB[i].setVisible(false);
            juego.addChild(juego.posB[i],1);
            
        }else{
            
            juego.posB[i] = 1;
        }
        juego.posB[i].setVisible(true);
        juego.turno++;
          }
              for(var i = 0;i < 3;i++){
             if(cc.rectContainsPoint(posicion3,ubicacion) && juego.posC[i] === 0){
            if(juego.turnos%2 === 1){
                var sprite = juego.posC[i];
                juego.removeChild(juego.posC[i],1);
                juego.posC = posicion3;  
                
            }else if(i === 0){
                juego.posC[i].setPosition(310,560);
                    
            }else if(i === 1){
                juego.posC[i].setPosition(460,560);
                
            }else{
                
                juego.posC[i].setPosition(330,560);
            } 
            juego.posC[i] = 2;
            juego.posC[i].setVisible(false);
            juego.addChild(juego.posC[i],1);
            
        }else{
            
            juego.posC[i] = 1;
        }
        juego.posC[i].setVisible(true);
        juego.turno++;
          }
        
     }
         if(cc.rectContainsPoint(posicion4,ubicacion) && juego.posA[i] === 0){
            if(juego.turnos%2 === 1){
                var sprite = juego.posA[i];
                juego.removeChild(juego.posA[i],1);
                juego.posA = posicion4;  
                
            }else if(i === 0){
                juego.posB[i].setPosition(350,480);
                    
            }else if(i === 1){
                juego.postApply[i].setPosition(480,480);
                
            }else{
                
                juego.posA[i].setPosition(640,480);
            } 
            juego.posA[i] = 2;
            juego.posA[i].setVisible(false);
            juego.addChild(juego.posA[i],1);
            
        }else{
            
            juego.posA[i] = 1;
        }
        juego.posA[i].setVisible(true);
        juego.turno++;

        
    for(var i = 0;i < 3;i++){
             if(cc.rectContainsPoint(posicion5,ubicacion) && juego.posB[i] === 0){
            if(juego.turnos%2 === 1){
                var sprite = juego.posB[i];
                juego.removeChild(juego.posB[i],1);
                juego.posA = posicion5;  
                
            }else if(i === 0){
                juego.posB[i].setPosition(310,560);
                    
            }else if(i === 1){
                juego.posB[i].setPosition(460,560);
                
            }else{
                
                juego.posB[i].setPosition(330,560);
            } 
            juego.posB[i] = 2;
            juego.posB[i].setVisible(false);
            juego.addChild(juego.posB[i],1);
            
        }else{
            
            juego.posB[i] = 1;
        }
        juego.posB[i].setVisible(true);
        juego.turno++;
          }
              for(var i = 0;i < 3;i++){
             if(cc.rectContainsPoint(posicion6,ubicacion) && juego.posC[i] === 0){
            if(juego.turnos%2 === 1){
                var sprite = juego.posC[i];
                juego.removeChild(juego.posC[i],1);
                juego.posC = posicion6;  
                
            }else if(i === 0){
                juego.posC[i].setPosition(310,560);
                    
            }else if(i === 1){
                juego.posC[i].setPosition(460,560);
                
            }else{
                
                juego.posC[i].setPosition(330,560);
            } 
            juego.posC[i] = 2;
            juego.posC[i].setVisible(false);
            juego.addChild(juego.posC[i],1);
            
        }else{
            
            juego.posC[i] = 1;
        }
        juego.posC[i].setVisible(true);
        juego.turno++;
          }
        
     }
                                          
 });
// Jugadas : function(){    
//    if(juego.posA === 0){
//        if(juego.posA === 1){
//            if(juego.posA === 2){
//                
//                
//                
//            }
//            
//        }
//        
//        
//    }
//    
//}                                   
//    
//    
//    
//},
    
    ctor:function () {
                    
        
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        
                
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("TicTacToe V0.1", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);   
        
//        var jugador = new cc.LabelTTF("Le toca a:", "Arial", 18);
//        jugador.setColor(0,0,0,0);
//        jugador.x = size.width / 2;
//        jugador.y = size.height / 2 + 150;
//        this.addChild(jugador, 5);
//        
//        cc.eventManager.addListener({
//            event: cc.EventListener.TOUCH_ONE_BY_ONE
//            onTouchBegan: this.Jugar
//            
//        }, this)
//        
//        return true;
    
        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.tablero_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);

        return true;
    }
});

 this.X = new cc.Sprite(res.X_png);
      this.X.Attr {
    
    x: 66;
    y: 178;
    
}


this.O = new cc.Sprite(res.O_png);
this.O.Attr{
    
    x: 66;
    y: 178;
    
}

    this.X.addChild(this.X,1);
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
