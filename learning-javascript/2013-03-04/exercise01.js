
console.log("Exercise01");

var mat = "";

for(var i=1; i<=10; i++){
	for(var j=1; j<=10; j++){
		mat += (i*j)+ "\t";
	}

	mat += "\n";
}

console.log(mat);
