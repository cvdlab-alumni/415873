var domain = DOMAIN([[0,1],[0,2*PI]])([50,50]);
var colorBall = [1,	36/255,	0,0.98]
var h = 3.6

function arc(alpha, r, R, h) {
    var domain = DOMAIN([[0,alpha],[r,R]])([70,70]);
    var mapping = function (v) {
        var a = v[0];
        var r = v[1];
        
        return [r*COS(a), r*SIN(a)];
    }
    var model = MAP(mapping)(domain);
    
    var arco = EXTRUDE([h])(model);
    return arco;
}


function diodeLamp(color, h){
    var dy = 0.07;
    var base = COLOR([0.4,0.4,0.4])(arc(2*PI, 0, 0.98, 0.07))

    var axis = COLOR([210/255,210/255,210/255])(EXTRUDE([h])(CIRCLE(0.085)(50)))

    var profile = BEZIER(S0)([[5.14-4.80,0, 3.48], [4.97-4.80,0, 3.55], [4.88-4.80, 0,3.67], [4.9-4.80, 0, 3.86]]);
    var mapping = ROTATIONAL_SURFACE(profile);
    var surface = COLOR([0,0,0])(T([2])([-3.48/2])(S([0,1,2])([0.9,0.9,0.5])(MAP(mapping)(domain))));

    var cub=T([2])([h-0.2])( S([0,1,2])([1.2,1.2,0.1])(axis))
    var p= STRUCT([axis,cub,base,surface])

    //Palloncino

    var profile1 = BEZIER(S0)([[3.84-3.84,0, 3.07], [4.49-3.84,0, 3.19], [5.53-3.84, 0,1.95], [4.25-3.84, 0,1.13]]);
    var mapping1 = ROTATIONAL_SURFACE(profile1);
    var surface1 = MAP(mapping1)(domain);

    var profile2 = BEZIER(S0)([[4.25-3.82,0, 1.13], [3.99-3.82,0,0.97], [3.97-3.82, 0,0.69], [3.94-3.82, 0,0.49]]);
    var mapping2 = ROTATIONAL_SURFACE(profile2);
    var surface2 = T([2])([0.01])(MAP(mapping2)(domain));

    var balloon = COLOR(color)(T([2])([h-0.65])(STRUCT([surface1,surface2])));

    var lamp = STRUCT([p,balloon])
    
    return lamp;
    
}

DRAW(diodeLamp(colorBall, h));
