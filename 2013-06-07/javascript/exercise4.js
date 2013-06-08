//exercise4 some house



function drawHouse(px, py, depthHouse){
    
    var points = [[0,0],[px,0],[0,py],[px,py],[px/2, py+py/2]];
    var cells = [[0,1,2],[1,3,2],[2,3,4]];
    
    var facade =  SIMPLICIAL_COMPLEX(points)(cells);
    
    var house = EXTRUDE([depthHouse])(facade);
    return house;
}


//house random from initial parametres

function drawVillageFromOneHouse(px,py,depthHouse,nHouses){
    var house = COLOR([Math.random(),Math.random(),Math.random()])(drawHouse(px,py,depthHouse));
    var houses = [house];
    var trasl = px
   
    for(i=1; i<nHouses; i++){
        
        var sx= ((Math.random()*1.12)+0.8);
        var sy= ((Math.random()*1.6)+0.8);
        var sz= ((Math.random()*1.12)+0.8);
    
        var house1 = COLOR([Math.random(),Math.random(),Math.random()])(T([0])([0.4+trasl])(S([0,1,2])([sx,sy,sz])(house)));
        trasl = 0.4+(trasl + (sx*px));
        houses.push(house1);
   
    }
    
    return R([1,2])([PI/2])(STRUCT(houses))
}


var settlement1 = drawVillageFromOneHouse(5,2,5,3);
var settlement2 = T([0,1])([-9,6.5])(R([1,0])([PI/2])(settlement1));

var settlements = STRUCT([settlement1,settlement2])

DRAW(settlements)
