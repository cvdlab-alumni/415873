
//exercise1 mountainousArea


var pointsAltitudeZ = {};
var domain = PROD1x1([INTERVALS(1)(32),INTERVALS(1)(32)])

function randomLowland(lowlandAlt) {
	return Math.random()*lowlandAlt;
}

function randomMount(mauntAlt) {
	var p = Math.random();
	if (p > 0.5)
		return p*mauntAlt;
	return -(p*mauntAlt);
}

function newKeyToMapZ(x, y) {
	return (x+"&"+y);
}


var  mountainousArea = function(x,y,points,partitionsX,lowlandAltitude,mountAltitude) {
    
	var arr= new Array();
    var xMaxLowland = (x*(2/3));
    var yMaxLowland = (y*(2/3));
	var xMaxLake = (x/4);
	var yMaxLake = (y/4);
	
    
	for (var i=0; i<=x; i=i+(x/partitionsX)) {
		if (i===0 || i===x) {
			arr.push(BEZIER(S0)([[i,0,0],[i,y,0]]));
		}
		else { var controlPoints = new Array();
            var lastControlPoint = 0;
            for (var j=0; j<=y; j=j+(y/points)) {
                if (j===0 || j===y) {
                    controlPoints.push([i,j,0]);
                    pointsAltitudeZ[newKeyToMapZ(i, j)] = 0;}
				else {
					if (i < xMaxLake && j < yMaxLake ) {
						controlPoints.push([i,j,0]);
						pointsAltitudeZ[newKeyToMapZ(i, j)] = 0;}
					else if (i < xMaxLowland  && j < yMaxLowland) {
						var z = randomLowland(lowlandAltitude);
						controlPoints.push([i,j,z]);
						pointsAltitudeZ[newKeyToMapZ(i, j)] = z;}
					else {
						var z = randomMount(mountAltitude)
						controlPoints.push([i,j,z]);
						pointsAltitudeZ[newKeyToMapZ(i, j)] = z;}}
                lastControlPoint += j;}
			if ( lastControlPoint!== y) {
				controlPoints.push([i,y,0]);
				pointsAltitudeZ[newKeyToMapZ(i, y)] = 0;}
			arr.push(BEZIER(S0)(controlPoints));}
    }
    surf = MAP(BEZIER(S1)(arr))(domain);
    return surf
}



var land = 	(mountainousArea(15,10,100,100,2,8))

var s1 = T([0,1])([0.3,0.35])(R([0,1])([-PI])(land));

var s2 = T([0,1])([-0.3,0.4])(S([1])([-1])(s1));

var allTerrain = COLOR([85/255, 104/255, 50/255])(STRUCT([land,s2]));


//exercise2 lake
var lake= T([0,1,2])([-14,0.3,0.2])(CUBOID([29,8,0.6]))
var coloredLake = COLOR([130/255, 255/255, 202/255, 0.8])(lake)
var waterfall1 =COLOR([130/255, 255/255, 202/255, 0.8])(T([0,1,2])([-0.7,7.5,0.2])(CUBOID([1.5,2,1.4])))
var waterfall2 = COLOR([130/255, 255/255, 202/255, 0.8])(T([0,1,2])([-0.65,9.2,0.2])(CUBOID([1.5,0.5,1.8])))

waterfall = STRUCT([waterfall1,waterfall2])

waterPlusTerrain=STRUCT([waterfall,coloredLake,allTerrain])

var xLake =15/4
var yLake =10/4


//exercise3 ConiferousForest
//tree with parameters
function tree(rFoliage, hFoliage, rTrunk, hTrunk,angularDiscretization) {
    var controlpoints = [[-rFoliage,0,0],[rFoliage,0,0],[ 0, rFoliage*-3.93,0],[ 0,rFoliage*3.93,0]];
    var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
    
    var controlpoints2 = [[-rFoliage,0,0],[rFoliage,0,0],[ 0, rFoliage*+3.93,0],[ 0,-rFoliage*3.93,0]];
    var curveMapping2 = CUBIC_HERMITE(S0)(controlpoints2);
    
    var domain = PROD1x1([INTERVALS(1)(32),INTERVALS(1)(32)]);
    var apex = [0,0,hFoliage];
    var out = MAP(CONICAL_SURFACE(apex)(curveMapping))(domain);
    var out2 = MAP(CONICAL_SURFACE(apex)(curveMapping2))(domain);
    var foliage = T([2])([hTrunk-0.4])(COLOR([46/255, 139/255, 87/255])(STRUCT([out,out2])));
    var trunk = COLOR([150/255,	75/255, 0/255])(EXTRUDE([hTrunk])(DISK(rTrunk)(angularDiscretization)));
    var tree = STRUCT([foliage,trunk]);
    return tree
    
}


//tree random
function tree() {
    //random values
    var rTrunk = Math.random()*5;
    var rFoliage = (Math.random()*2)+rTrunk+0.3;
    var hTrunk = (Math.random()*5)+rTrunk*2;
    var hFoliage = (Math.random()*5)+rFoliage*2;
    
    var angularDiscretization= Math.random()*100;
    
    var controlpoints = [[-rFoliage,0,0],[rFoliage,0,0],[ 0, rFoliage*-3.93,0],[ 0,rFoliage*3.93,0]];
    var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
    
    var controlpoints2 = [[-rFoliage,0,0],[rFoliage,0,0],[ 0, rFoliage*+3.93,0],[ 0,-rFoliage*3.93,0]];
    var curveMapping2 = CUBIC_HERMITE(S0)(controlpoints2);
    
    var domain = PROD1x1([INTERVALS(1)(32),INTERVALS(1)(32)]);
    var apex = [0,0,hFoliage];
    var out = MAP(CONICAL_SURFACE(apex)(curveMapping))(domain);
    var out2 = MAP(CONICAL_SURFACE(apex)(curveMapping2))(domain);
    var foliage = T([2])([hTrunk-0.4])(COLOR([46/255, 139/255, 87/255])(STRUCT([out,out2])));
    var trunk = COLOR([150/255,	75/255, 0/255])(EXTRUDE([hTrunk])(DISK(rTrunk)(angularDiscretization)));
    var tree = STRUCT([foliage,trunk]);
    return tree
    
}

//function to place coniferous forest
function splitF (key) {
	var coordinates = new Array();
	coordinates.push(key.split("&"));
	return coordinates;
}

function foundTreePosition(xMaxLake,yMaxLake) {
    
	var position = new Array();
	for(var k in pointsAltitudeZ) {
        var coordinates = splitF(k);
		if (coordinates[0][0]>xMaxLake && coordinates[0][1]> yMaxLake) {
			var x = coordinates[0][0];
			var y = coordinates[0][1];
			var z = 1.6;
			position.push([x,y,z]);
        }
    }
    return position;
}


var positions = foundTreePosition(xLake,yLake);

function placeConiferousForest(positionList,nTree) {
    var forest = new Array();
    for(var i=0; i<=nTree; i++) {
        var index= Math.floor(Math.random() * positionList.length);
        var coordinates = positionList[index];
        coniferousTree= T([0,1,2])([coordinates[0],coordinates[1],coordinates[2]])(S([0,1,2])([0.09,0.09,0.09])(tree()));
        forest.push(coniferousTree);
    }
    return forest;
}

var nAlberi = 10
var coniferousForest = placeConiferousForest(positions,nAlberi);



function view (coniferousForest) {
	for (var i=1; i<coniferousForest.length; i++) {
		DRAW(coniferousForest[i]);
	}
}




//exercise4 settlements in map

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

//exercise5 streets
//building of village

var settlement1 = drawVillageFromOneHouse(5,2,5,3);
var settlement2 = T([0,1])([-9,6.5])(R([1,0])([PI/2])(settlement1));

var settlements = STRUCT([settlement1,settlement2])

var street =T([0,1])([-25,0.6])(CUBOID([50,4.5,0.2]))
var street2 = T([0,1])([-14.2,-10])(CUBOID([4.5,40,0.2]))

var streets =COLOR([210/255,210/255,210/255])(STRUCT([street,street2]));


var settlement2 = drawVillageFromOneHouse(5,2,5,3);
var settlement3 = T([0,1])([-9,6.5])(R([1,0])([PI/2])(settlement2));

var settlements2 = STRUCT([settlement2,settlement3])

var street3 =T([0,1])([-25,0.6])(CUBOID([50,4.5,0.2]))
var street4 = T([0,1])([-14.2,-10])(CUBOID([4.5,40,0.2]))


var streets2 =COLOR([210/255,210/255,210/255])(STRUCT([street3,street4]));


var village1 = T([0,1,2])([-7,3,1.5])(S([0,1,2])([0.08,0.08,0.08])(STRUCT([streets,settlements])));

var village2 =T([0,1,2])([7,3,1.5]) (R([1,0])([PI/2])(S([0,1,2])([0.08,0.08,0.08])(STRUCT([streets2,settlements2]))));


var villages = STRUCT([village1,village2]);

view(coniferousForest);
var finalModel = STRUCT([allTerrain,waterPlusTerrain,villages]);

DRAW(finalModel);
