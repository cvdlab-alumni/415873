

console.log("Exercise02");

var mat = "";

for(var i=1; i<=10; i++){
        for(var j=1; j<10; j++){
                mat += (i*j)+ "," + "\t";
        }
	
        mat += (i*j)+ "\n";
}

console.log(mat);

