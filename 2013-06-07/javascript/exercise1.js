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

DRAW(allTerrain);










