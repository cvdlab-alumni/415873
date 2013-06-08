//exercise06

var larToOBJ = function(model){
    var verts = model[0];
	var fv = model[1];
	var s = "";
	for (var i=0; i<verts.length; i++) {
		s +="v" + i + ": ";
		if (verts[i].length !== 3) {
			s += verts[i][0] + " " + verts[i][1] + "  0";
		} else {
            s += verts[i][0] + " " + verts[i][1] + " " + verts[i][2];
		}
		s += "\n";
	}
	s += "\n";
    
	for (var j=0; j<fv.length; j++) {
		s +="fv" + j + ": ";
		for (var k=0; k<fv[j].length; k++) {
			s += fv[j][k] + " ";
		};
		s+= "\n";
	}
	return s;
}