

console.log("Exercise02");

var mat = "";

for(var i=1; i<=10; i++){
        for(var j=1; j<10; j++){
                if(i===j)
			mat += 1 + "," + "\t";
		else
			mat += 0 + "," + "\t";	
	}

	if(i===j)
	        mat += 1 + "\n";
	else
		mat += 0 + "\n";
	
}

console.log(mat);

