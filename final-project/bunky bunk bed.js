var domain = INTERVALS(1)(32);
var domain2 = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);

var colorScale = [1.3,1.3,1.3];
var colorPillow = [1.1,1.1,1.1]
var colorInter = [30/255,144/255,1]
var colorUnderBed = [0,127/255,1]
var colorOverBed = [171/255,205/255,239/255]
var dx = 0.1
var h= 1.73


function bedGenerator(color){
    
    dx = 0.1


    /*
     var controlpoints =[[4.21, 3.04,0], [4.21, 3.3,0], [4.21, 3.46,0], [4.21, 3.92,0]];
     var curveMapping = BEZIER(S0)(controlpoints);*/

    var controlpoints2 =[[3.91, 3.04,0], [3.91, 3.3,0], [3.91, 3.46,0], [3.91, 3.92,0]];
    var curveMapping2 = BEZIER(S0)(controlpoints2);


    var controlpoints3 =[[3.52, 3.2,0], [3.52, 3.4,0], [3.52, 3.46,0], [3.52, 3.76,0]];
    var curveMapping3 = BEZIER(S0)(controlpoints3);

    var controlpoints4 =[[3.6, 3.13,0], [3.6, 3.42,0], [3.6, 3.44,0], [3.6, 3.81,0]];
    var curveMapping4 = BEZIER(S0)(controlpoints4);


    var controlpoints5 =[[3.63, 3.04,0], [3.63, 3.41,0], [3.63, 3.46,0], [3.63, 3.92,0]];
    var curveMapping5 = BEZIER(S0)(controlpoints5);
    
    
    var controlpoints6 = [[1.61, 3.2,0], [1.61, 3.34,0], [1.61, 3.56,0], [1.61, 3.76,0]];
    var curveMapping6 = BEZIER(S0)(controlpoints6);

    var controlpoints7 = [[1.52, 3.13,0], [1.52, 3.35,0], [1.52, 3.59,0], [1.52, 3.81,0]];
    var curveMapping7 = BEZIER(S0)(controlpoints7);

    var controlpoints8 = [[1.49, 3.04,0], [1.49, 3.3,0], [1.49, 3.46,0], [1.49, 3.92,0]];
    var curveMapping8 = BEZIER(S0)(controlpoints8);


    var controlpoints9 = [[1.1, 3.04,0], [1.1, 3.3,0], [1.1, 3.46,0], [1.1, 3.92,0]];
    var curveMapping9 = BEZIER(S0)(controlpoints9);

    /*
    var controlpoints10 =[[0.81, 3.04,0], [0.81, 3.3,0], [0.81, 3.46,0], [0.81, 3.92,0]];
     var curveMapping10 = BEZIER(S0)(controlpoints10);*/


    var surface = BEZIER(S1)([curveMapping2,curveMapping5])
    var out = MAP(surface)(domain2);

    var surface2 = BEZIER(S1)([curveMapping3,curveMapping4,curveMapping5])
    var out2 = MAP(surface2)(domain2);

    var surface3 = BEZIER(S1)([curveMapping6,curveMapping7,curveMapping8])
    var out3 = MAP(surface3)(domain2);

    var surface4 = BEZIER(S1)([curveMapping3,curveMapping6])
    var out4 = MAP(surface4)(domain2);


    var surface5 = BEZIER(S1)([curveMapping8,curveMapping9])
    var out5 = MAP(surface5)(domain2);

    var surfaceA =STRUCT([out,out2,out3,out4,out5])


    var c1H= CUBIC_HERMITE(S0)([[1.1, 3.92,0],[1.1-0.29, 3.92,0.29],[-0.65,0,0],[0,0,0.65]]);
    var c2H= CUBIC_HERMITE(S0)([[1.1, 3.04,0],[1.1-0.29, 3.04,0.29],[-0.65,0,0],[0,0,0.65]])

    var surH = CUBIC_HERMITE(S1)([c1H,c2H,[0,0,0],[0,0,0]]);
    var outH = MAP(surH)(domain2);

    var c3H= CUBIC_HERMITE(S0)([[3.91, 3.92,0],[3.91+0.29, 3.92,0.29],[0.65,0,0],[0,0,0.65]]);
    var c4H= CUBIC_HERMITE(S0)([[3.91, 3.04,0],[3.91+0.29, 3.04,0.29],[0.65,0,0],[0,0,0.65]])

    var surH2 = CUBIC_HERMITE(S1)([c3H,c4H,[0,0,0],[0,0,0]]);
    var outH2 = MAP(surH2)(domain2);

    var c5H= CUBIC_HERMITE(S0)([[3.91+0.29, 3.92,0.29],[3.91+0.29, 3.92,0.29+1.85-0.58],[0,0,0],[0,0,0]])
    var c6H= CUBIC_HERMITE(S0)([[3.91+0.29, 3.04,0.29],[3.91+0.29, 3.04,0.29+1.85-0.58],[0,0,0],[0,0,0]])

    var surH3 = CUBIC_HERMITE(S1)([c5H,c6H,[0,0,0],[0,0,0]]);
    var outH3 = MAP(surH3)(domain2);


    var c7H = CUBIC_HERMITE(S0)([[1.1-0.29, 3.92,0.29],[1.1-0.29, 3.92,0.29+1.85-0.58],[0,0,0],[0,0,0]])
    var c8H = CUBIC_HERMITE(S0)([[1.1-0.29, 3.04,0.29],[1.1-0.29, 3.04,0.29+1.85-0.58],[0,0,0],[0,0,0]])

    var surH4 = CUBIC_HERMITE(S1)([c7H,c8H,[0,0,0],[0,0,0]]);
    var outH4 = MAP(surH4)(domain2);

    var sideA= STRUCT([surfaceA,outH,outH2])
    var sideB= T([2])([1.85])(S([2])([-1])(sideA))


    var b = STRUCT([sideA,sideB,outH3,outH4])


//////////

    var controlpoints2i =[[3.91, 3.04,0+dx], [3.91, 3.3,0+dx], [3.91, 3.46,0+dx], [3.91, 3.92,0+dx]];
    var curveMapping2i = BEZIER(S0)(controlpoints2i);


    var controlpoints3i =[[3.52, 3.2,0+dx], [3.52, 3.4,0+dx], [3.52, 3.46,0+dx], [3.52, 3.76,0+dx]];
    var curveMapping3i = BEZIER(S0)(controlpoints3i);

    var controlpoints4i =[[3.6, 3.13,0+dx], [3.6, 3.42,0+dx], [3.6, 3.44,0+dx], [3.6, 3.81,0+dx]];
    var curveMapping4i = BEZIER(S0)(controlpoints4i);


    var controlpoints5i =[[3.63, 3.04,0+dx], [3.63, 3.41,0+dx], [3.63, 3.46,0+dx], [3.63, 3.92,0+dx]];
    var curveMapping5i = BEZIER(S0)(controlpoints5i);


    var controlpoints6i = [[1.61, 3.2,0+dx], [1.61, 3.34,0+dx], [1.61, 3.56,0+dx], [1.61, 3.76,0+dx]];
    var curveMapping6i = BEZIER(S0)(controlpoints6i);

    var controlpoints7i = [[1.52, 3.13,0+dx], [1.52, 3.35,0+dx], [1.52, 3.59,0+dx], [1.52, 3.81,0+dx]];
    var curveMapping7i = BEZIER(S0)(controlpoints7i);

    var controlpoints8i = [[1.49, 3.04,0+dx], [1.49, 3.3,0+dx], [1.49, 3.46,0+dx], [1.49, 3.92,0+dx]];
    var curveMapping8i = BEZIER(S0)(controlpoints8i);


    var controlpoints9i = [[1.1, 3.04,0+dx], [1.1, 3.3,0+dx], [1.1, 3.46,0+dx], [1.1, 3.92,0+dx]];
    var curveMapping9i = BEZIER(S0)(controlpoints9i);



    var surfacei = BEZIER(S1)([curveMapping2i,curveMapping5i])
    var outi = MAP(surfacei)(domain2);

    var surface2i = BEZIER(S1)([curveMapping3i,curveMapping4i,curveMapping5i])
    var out2i = MAP(surface2i)(domain2);

    var surface3i = BEZIER(S1)([curveMapping6i,curveMapping7i,curveMapping8i])
    var out3i = MAP(surface3i)(domain2);

    var surface4i = BEZIER(S1)([curveMapping3i,curveMapping6i])
    var out4i = MAP(surface4i)(domain2);


    var surface5i = BEZIER(S1)([curveMapping8i,curveMapping9i])
    var out5i = MAP(surface5i)(domain2);

    var surfaceAi =STRUCT([outi,out2i,out3i,out4i,out5i])


    var c1Hi= CUBIC_HERMITE(S0)([[1.1+dx, 3.92,0+dx],[1.1-0.29+dx, 3.92,0.29+dx],[-0.65,0,0],[0,0,0.65]]);
    var c2Hi= CUBIC_HERMITE(S0)([[1.1+dx, 3.04,0+dx],[1.1-0.29+dx, 3.04,0.29+dx],[-0.65,0,0],[0,0,0.65]])

    var surHi = CUBIC_HERMITE(S1)([c1Hi,c2Hi,[0,0,0],[0,0,0]]);
    var outHi = MAP(surHi)(domain2);

    var c3Hi= CUBIC_HERMITE(S0)([[3.91-dx, 3.92,0+dx],[3.91+0.29-dx, 3.92,0.29+dx],[0.65,0,0],[0,0,0.65]]);
    var c4Hi= CUBIC_HERMITE(S0)([[3.91-dx, 3.04,0+dx],[3.91+0.29-dx, 3.04,0.29+dx],[0.65,0,0],[0,0,0.65]])

    var surH2i = CUBIC_HERMITE(S1)([c3Hi,c4Hi,[0,0,0],[0,0,0]]);
    var outH2i = MAP(surH2i)(domain2);

    var c5Hi= CUBIC_HERMITE(S0)([[3.91+0.29-dx, 3.92,0.29],[3.91+0.29-dx, 3.92,0.29+1.85-0.58],[0,0,0],[0,0,0]])
    var c6Hi= CUBIC_HERMITE(S0)([[3.91+0.29-dx, 3.04,0.29],[3.91+0.29-dx, 3.04,0.29+1.85-0.58],[0,0,0],[0,0,0]])

    var surH3i = CUBIC_HERMITE(S1)([c5Hi,c6Hi,[0,0,0],[0,0,0]]);
    var outH3i = MAP(surH3i)(domain2);


    var c7Hi = CUBIC_HERMITE(S0)([[1.1-0.29+dx, 3.92,0.29],[1.1-0.29+dx, 3.92,0.29+1.85-0.58],[0,0,0],[0,0,0]])
    var c8Hi = CUBIC_HERMITE(S0)([[1.1-0.29+dx, 3.04,0.29],[1.1-0.29+dx, 3.04,0.29+1.85-0.58],[0,0,0],[0,0,0]])

    var c9H = CUBIC_HERMITE(S0)([[1.61, 3.76,0],[3.52, 3.76,0],[0,0,0],[0,0,0]])
    var c9Hi = CUBIC_HERMITE(S0)([[1.61, 3.76,0+dx],[3.52, 3.76,0+dx],[0,0,0],[0,0,0]])
    var cu = MAP(c9H)(domain)

    var c10H = CUBIC_HERMITE(S0)([[1.61, 3.2,0], [3.52, 3.2,0],[0,0,0],[0,0,0]])
    var c10Hi = CUBIC_HERMITE(S0)([[1.61, 3.2,0+dx], [3.52, 3.2,0+dx],[0,0,0],[0,0,0]])
    var cu1 = MAP(c10H)(domain)

    var c11H = CUBIC_HERMITE(S0)([[1.1, 3.92,0],[1.49, 3.92,0], [0,0,0],[0,0,0]]);
    var c11Hi = CUBIC_HERMITE(S0)([[1.1, 3.92,0+dx],[1.49, 3.92,0+dx], [0,0,0],[0,0,0]]);
    var cu2 = MAP(c11H)(domain)

    var c12H = CUBIC_HERMITE(S0)([[1.1, 3.04,0], [1.49, 3.04,0], [0,0,0],[0,0,0]]);
    var c12Hi = CUBIC_HERMITE(S0)([[1.1, 3.04,0+dx], [1.49, 3.04,0+dx], [0,0,0],[0,0,0]]);
    var cu3 = MAP(c12H)(domain)

    var c13H = CUBIC_HERMITE(S0)([[3.63, 3.92,0],[3.91, 3.92,0],[0,0,0],[0,0,0]]);
    var c13Hi = CUBIC_HERMITE(S0)([[3.63, 3.92,0+dx],[3.91, 3.92,0+dx],[0,0,0],[0,0,0]]);
    var cu4 = MAP(c13H)(domain)

    var c14H = CUBIC_HERMITE(S0)([[3.63, 3.04,0],[3.91, 3.04,0],[0,0,0],[0,0,0]]);
    var c14Hi = CUBIC_HERMITE(S0)([[3.63, 3.04,0+dx],[3.91, 3.04,0+dx],[0,0,0],[0,0,0]]);
    var cu5 = MAP(c14H)(domain)

    var c15H= CUBIC_HERMITE(S0)([[1.1, 3.92,0+1.85],[1.1-0.29, 3.92,0.29+1.85-0.58],[-0.65,0,0],[0,0,-0.65]]);
    var c15Hi= CUBIC_HERMITE(S0)([[1.1+dx, 3.92,0+1.85-dx],[1.1-0.29+dx, 3.92,0.29+1.85-0.58-dx],[-0.65,0,0],[0,0,-0.65]]);

    var c16H=CUBIC_HERMITE(S0)([[1.1, 3.04,0+1.85],[1.1-0.29, 3.04,0.29+1.85-0.58],[-0.65,0,0],[0,0,-0.65]])
    var c16Hi=CUBIC_HERMITE(S0)([[1.1+dx, 3.04,0+1.85-dx],[1.1-0.29+dx, 3.04,0.29+1.85-0.58-dx],[-0.65,0,0],[0,0,-0.65]])

    var c17H=CUBIC_HERMITE(S0)([[3.91, 3.92,0+1.85],[3.91+0.29, 3.92,0.29+1.85-0.58],[0.65,0,0],[0,0,-0.65]])
    var c17Hi=CUBIC_HERMITE(S0)([[3.91-dx, 3.92,0+1.85-dx],[3.91+0.29-dx, 3.92,0.29+1.85-0.58-dx],[0.65,0,0],[0,0,-0.65]])

    var c18H=CUBIC_HERMITE(S0)([[3.91, 3.04,0+1.85],[3.91+0.29, 3.04,0.29+1.85-0.58],[0.65,0,0],[0,0,-0.65]])
    var c18Hi=CUBIC_HERMITE(S0)([[3.91-dx, 3.04,0+1.85-dx],[3.91+0.29-dx, 3.04,0.29+1.85-0.58-dx],[0.65,0,0],[0,0,-0.65]])

    var c19H=CUBIC_HERMITE(S0)([[1.61, 3.76,0+1.85],[3.52, 3.76,0+1.85],[0,0,0],[0,0,0]])
    var c19Hi=CUBIC_HERMITE(S0)([[1.61, 3.76,0+1.85-dx],[3.52, 3.76,0+1.85-dx],[0,0,0],[0,0,0]])

    var c20H = CUBIC_HERMITE(S0)([[1.61, 3.2,0+1.85], [3.52, 3.2,0+1.85],[0,0,0],[0,0,0]])
    var c20Hi = CUBIC_HERMITE(S0)([[1.61, 3.2,0+1.85-dx], [3.52, 3.2,0+1.85-dx],[0,0,0],[0,0,0]])

    var c21H = CUBIC_HERMITE(S0)([[1.1, 3.92,0+1.85],[1.49, 3.92,0+1.85], [0,0,0],[0,0,0]])
    var c21Hi = CUBIC_HERMITE(S0)([[1.1, 3.92,0+1.85-dx],[1.49, 3.92,0+1.85-dx], [0,0,0],[0,0,0]])

    var c22H = CUBIC_HERMITE(S0)([[1.1, 3.04,0+1.85], [1.49, 3.04,0+1.85], [0,0,0],[0,0,0]])
    var c22Hi = CUBIC_HERMITE(S0)([[1.1, 3.04,0+1.85-dx], [1.49, 3.04,0+1.85-dx], [0,0,0],[0,0,0]])

    var c23H = CUBIC_HERMITE(S0)([[3.63, 3.92,0+1.85],[3.91, 3.92,0+1.85],[0,0,0],[0,0,0]]);
    var c23Hi = CUBIC_HERMITE(S0)([[3.63, 3.92,0+1.85-dx],[3.91, 3.92,0+1.85-dx],[0,0,0],[0,0,0]]);

    var c24H = CUBIC_HERMITE(S0)([[3.63, 3.04,0+1.85],[3.91, 3.04,0+1.85],[0,0,0],[0,0,0]]);
    var c24Hi = CUBIC_HERMITE(S0)([[3.63, 3.04,0+1.85-dx],[3.91, 3.04,0+1.85-dx],[0,0,0],[0,0,0]]);



    var controlpoints10 =[[3.63, 3.92,0],[3.6, 3.81,0],[3.52, 3.76,0]]
    var curveMapping10 = BEZIER(S0)(controlpoints10);

    var controlpoints10i =[[3.63, 3.92,0+dx],[3.6, 3.81,0+dx],[3.52, 3.76,0+dx]]
    var curveMapping10i = BEZIER(S0)(controlpoints10i);

    var surface6 = BEZIER(S1)([curveMapping10i,curveMapping10])
    var out6= MAP(surface6)(domain2);

    var controlpoints11 =[[3.63, 3.04,0],[3.6, 3.13,0],[3.52, 3.2,0]]
    var curveMapping11 = BEZIER(S0)(controlpoints11);

    var controlpoints11i =[[3.63, 3.04,0+dx],[3.6, 3.13,0+dx],[3.52, 3.2,0+dx]]
    var curveMapping11i = BEZIER(S0)(controlpoints11i);

    var surface7 = BEZIER(S1)([curveMapping11i,curveMapping11])
    var out7= MAP(surface7)(domain2);


    var controlpoints12 =[[1.61, 3.76,0],[1.52, 3.81,0],[1.49, 3.92,0]]
    var curveMapping12 = BEZIER(S0)(controlpoints12);

    var controlpoints12i =[[1.61, 3.76,0+dx],[1.52, 3.81,0+dx],[1.49, 3.92,0+dx]]
    var curveMapping12i = BEZIER(S0)(controlpoints12i);

    var surface8 = BEZIER(S1)([curveMapping12i,curveMapping12])
    var out8= MAP(surface8)(domain2);

    var controlpoints13 =[[1.61, 3.2,0],[1.52, 3.13,0],[1.49, 3.04,0]]
    var curveMapping13 = BEZIER(S0)(controlpoints13);

    var controlpoints13i =[[1.61, 3.2,0+dx],[1.52, 3.13,0+dx],[1.49, 3.04,0+dx]]
    var curveMapping13i = BEZIER(S0)(controlpoints13i);

    var surface9 = BEZIER(S1)([curveMapping13i,curveMapping13])
    var out9= MAP(surface9)(domain2);


///

    var controlpoints10b =[[3.63, 3.92,0+1.85],[3.6, 3.81,0+1.85],[3.52, 3.76,0+1.85]]
    var curveMapping10b = BEZIER(S0)(controlpoints10b);

    var controlpoints10ib =[[3.63, 3.92,0+1.85-dx],[3.6, 3.81,0+1.85-dx],[3.52, 3.76,0+1.85-dx]]
    var curveMapping10ib = BEZIER(S0)(controlpoints10ib);

    var surface6b = BEZIER(S1)([curveMapping10ib,curveMapping10b])
    var out6b= MAP(surface6b)(domain2);

    var controlpoints11b =[[3.63, 3.04,0+1.85],[3.6, 3.13,0+1.85],[3.52, 3.2,0+1.85]]
    var curveMapping11b = BEZIER(S0)(controlpoints11b);

    var controlpoints11ib =[[3.63, 3.04,0+1.85-dx],[3.6, 3.13,0+1.85-dx],[3.52, 3.2,0+1.85-dx]]
    var curveMapping11ib = BEZIER(S0)(controlpoints11ib);

    var surface7b = BEZIER(S1)([curveMapping11ib,curveMapping11b])
    var out7b= MAP(surface7b)(domain2);


    var controlpoints12b =[[1.61, 3.76,0+1.85],[1.52, 3.81,0+1.85],[1.49, 3.92,0+1.85]]
    var curveMapping12b = BEZIER(S0)(controlpoints12b);

    var controlpoints12ib =[[1.61, 3.76,0+1.85-dx],[1.52, 3.81,0+1.85-dx],[1.49, 3.92,0+1.85-dx]]
    var curveMapping12ib = BEZIER(S0)(controlpoints12ib);

    var surface8b = BEZIER(S1)([curveMapping12ib,curveMapping12b])
    var out8b= MAP(surface8b)(domain2);

    var controlpoints13b =[[1.61, 3.2,0+1.85],[1.52, 3.13,0+1.85],[1.49, 3.04,0+1.85]]
    var curveMapping13b = BEZIER(S0)(controlpoints13b);

    var controlpoints13ib =[[1.61, 3.2,0+1.85-dx],[1.52, 3.13,0+1.85-dx],[1.49, 3.04,0+1.85-dx]]
    var curveMapping13ib= BEZIER(S0)(controlpoints13ib);

    var surface9b = BEZIER(S1)([curveMapping13ib,curveMapping13b])
    var out9b= MAP(surface9b)(domain2);

///


    var surH4i = CUBIC_HERMITE(S1)([c7Hi,c8Hi,[0,0,0],[0,0,0]]);
    var outH4i = MAP(surH4i)(domain2);

    var sideAi= STRUCT([surfaceAi,outHi,outH2i])
    var sideBi= T([2])([1.85])(S([2])([-1])(sideAi))

    var bi = STRUCT([sideAi,sideBi,outH3i,outH4i])

    var surH5 = CUBIC_HERMITE(S1)([c1Hi,c1H,[0,0,0],[0,0,0]]);
    var surH6 = CUBIC_HERMITE(S1)([c2Hi,c2H,[0,0,0],[0,0,0]]);
    var outH5 = MAP(surH5)(domain2);
    var outH6 = MAP(surH6)(domain2);

    var surH7 = CUBIC_HERMITE(S1)([c3Hi,c3H,[0,0,0],[0,0,0]]);
    var surH8 = CUBIC_HERMITE(S1)([c4Hi,c4H,[0,0,0],[0,0,0]]);
    var outH7 = MAP(surH7)(domain2);
    var outH8 = MAP(surH8)(domain2);

    var surH9 = CUBIC_HERMITE(S1)([c5Hi,c5H,[0,0,0],[0,0,0]]);
    var surH10 = CUBIC_HERMITE(S1)([c6Hi,c6H,[0,0,0],[0,0,0]]);
    var outH9 = MAP(surH9)(domain2);
    var outH10 = MAP(surH10)(domain2);

    var surH11 = CUBIC_HERMITE(S1)([c7Hi,c7H,[0,0,0],[0,0,0]]);
    var surH12 = CUBIC_HERMITE(S1)([c8Hi,c8H,[0,0,0],[0,0,0]]);
    var outH11= MAP(surH11)(domain2);
    var outH12 = MAP(surH12)(domain2);


    var surH13 = CUBIC_HERMITE(S1)([c9Hi,c9H,[0,0,0],[0,0,0]]);
    var surH14 = CUBIC_HERMITE(S1)([c10Hi,c10H,[0,0,0],[0,0,0]]);
    var outH13= MAP(surH13)(domain2);
    var outH14 = MAP(surH14)(domain2);


    var surH15 = CUBIC_HERMITE(S1)([c11Hi,c11H,[0,0,0],[0,0,0]]);
    var surH16 = CUBIC_HERMITE(S1)([c12Hi,c12H,[0,0,0],[0,0,0]]);
    var outH15= MAP(surH15)(domain2);
    var outH16 = MAP(surH16)(domain2);

    var surH17 = CUBIC_HERMITE(S1)([c13Hi,c13H,[0,0,0],[0,0,0]]);
    var surH18 = CUBIC_HERMITE(S1)([c14Hi,c14H,[0,0,0],[0,0,0]]);
    var outH17= MAP(surH17)(domain2);
    var outH18 = MAP(surH18)(domain2);

    var surH19 = CUBIC_HERMITE(S1)([c15Hi,c15H,[0,0,0],[0,0,0]]);
    var surH20 = CUBIC_HERMITE(S1)([c16Hi,c16H,[0,0,0],[0,0,0]]);
    var outH19= MAP(surH19)(domain2);
    var outH20= MAP(surH20)(domain2);

    var surH21 = CUBIC_HERMITE(S1)([c17Hi,c17H,[0,0,0],[0,0,0]]);
    var surH22 = CUBIC_HERMITE(S1)([c18Hi,c18H,[0,0,0],[0,0,0]]);
    var outH21= MAP(surH21)(domain2);
    var outH22= MAP(surH22)(domain2);

    var surH23 = CUBIC_HERMITE(S1)([c19Hi,c19H,[0,0,0],[0,0,0]]);
    var surH24 = CUBIC_HERMITE(S1)([c20Hi,c20H,[0,0,0],[0,0,0]]);
    var outH23= MAP(surH23)(domain2);
    var outH24= MAP(surH24)(domain2);

    var surH25 = CUBIC_HERMITE(S1)([c21Hi,c21H,[0,0,0],[0,0,0]]);
    var surH26 = CUBIC_HERMITE(S1)([c22Hi,c22H,[0,0,0],[0,0,0]]);
    var outH25= MAP(surH25)(domain2);
    var outH26= MAP(surH26)(domain2);


    var surH27 = CUBIC_HERMITE(S1)([c23Hi,c23H,[0,0,0],[0,0,0]]);
    var surH28 = CUBIC_HERMITE(S1)([c24Hi,c24H,[0,0,0],[0,0,0]]);
    var outH27= MAP(surH27)(domain2);
    var outH28= MAP(surH28)(domain2);

    var herm= STRUCT([outH5,outH6,outH7,outH8,outH9,outH10,outH11,outH12,outH13,outH14,outH15,outH16,outH17,outH18,outH19,outH20,outH21,outH22, outH23,outH24,outH25,outH26,outH27,outH28])
    var bez=STRUCT([out6,out7,out8,out9,out6b,out7b,out8b,out9b])
    var plank = T([0,1,2])([0.9,3.2,0.1])(CUBOID([3.5-(3*dx),0.1 ,1.85-(2*dx)]))

    var bed = STRUCT([herm,bez,bi,b,plank])
    
    return COLOR(color)(bed)
}

//up

function intermediateLevel(color){
    
    dx = 0.1


    var controlpoints14 = [[3.63, 3.92,0], [3.79, 4.34,0], [3.75, 4.4,0], [3.63, 4.74,0]]
    var curveMapping14 = BEZIER(S0)(controlpoints14);
    var controlpoints15 =[[3.91, 3.92,0], [3.91, 4.34,0], [3.91, 4.4,0], [3.91,4.74,0]];
    var curveMapping15 = BEZIER(S0)(controlpoints15);

    var surface10 = BEZIER(S1)([curveMapping14,curveMapping15])
    var out10= MAP(surface10)(domain2);

    var c25H= CUBIC_HERMITE(S0)([[3.91, 4.74,0],[3.91+0.29, 4.74,0.29],[0.65,0,0],[0,0,0.65]]);
    var c26H= CUBIC_HERMITE(S0)([[3.91, 3.92,0],[3.91+0.29, 3.92,0.29],[0.65,0,0],[0,0,0.65]])

    var surH29 = CUBIC_HERMITE(S1)([c25H,c26H,[0,0,0],[0,0,0]]);
    var outH29 = MAP(surH29)(domain2);

    var controlpoints16 = [[1.49, 4.74,0], [1.31, 4.34,0], [1.39, 4.4,0], [1.49, 3.92,0]]
    var curveMapping16 = BEZIER(S0)(controlpoints16);

    var controlpoints17 = [[1.1, 4.74,0], [1.1, 4.34,0], [1.1, 4.4,0], [1.1, 3.92,0]];
    var curveMapping17 = BEZIER(S0)(controlpoints17);

    var surface11 = BEZIER(S1)([curveMapping16,curveMapping17])
    var out11= MAP(surface11)(domain2);

    var c27H= CUBIC_HERMITE(S0)([[1.1, 4.74,0],[1.1-0.29, 4.74,0.29],[-0.65,0,0],[0,0,0.65]]);
    var c28H= CUBIC_HERMITE(S0)([[1.1, 3.92,0],[1.1-0.29, 3.92,0.29],[-0.65,0,0],[0,0,0.65]])

    var surH30 = CUBIC_HERMITE(S1)([c27H,c28H,[0,0,0],[0,0,0]]);
    var outH30 = MAP(surH30)(domain2);


    var c29H= CUBIC_HERMITE(S0)([[3.91+0.29, 4.74,0.29],[3.91+0.29, 4.74,0.29+1.85-0.58],[0,0,0],[0,0,0]])
    var c30H= CUBIC_HERMITE(S0)([[3.91+0.29, 3.92,0.29],[3.91+0.29, 3.92,0.29+1.85-0.58],[0,0,0],[0,0,0]])

    var surH31 = CUBIC_HERMITE(S1)([c29H,c30H,[0,0,0],[0,0,0]]);
    var outH31 = MAP(surH31)(domain2);


    var c31H = CUBIC_HERMITE(S0)([[1.1-0.29, 4.74,0.29],[1.1-0.29, 4.74,0.29+1.85-0.58],[0,0,0],[0,0,0]])
    var c32H = CUBIC_HERMITE(S0)([[1.1-0.29, 3.92,0.29],[1.1-0.29, 3.92,0.29+1.85-0.58],[0,0,0],[0,0,0]])

    var surH32 = CUBIC_HERMITE(S1)([c31H,c32H,[0,0,0],[0,0,0]]);
    var outH32 = MAP(surH32)(domain2);



    //up2
    var controlpoints14b = [[3.63, 3.92,0+1.85], [3.79, 4.34,0+1.85], [3.75, 4.4,0+1.85], [3.63, 4.74,0+1.85]]
    var curveMapping14b = BEZIER(S0)(controlpoints14b);
    var controlpoints15b =[[3.91, 3.92,0+1.85], [3.91, 4.34,0+1.85], [3.91, 4.4,0+1.85], [3.91,4.74,0+1.85]];
    var curveMapping15b = BEZIER(S0)(controlpoints15b);

    var surface10b = BEZIER(S1)([curveMapping14b,curveMapping15b])
    var out10b= MAP(surface10b)(domain2);


    var controlpoints16b = [[1.49, 4.74,0+1.85], [1.31, 4.43,0+1.85], [1.39, 4.4,0+1.85], [1.49, 3.92,0+1.85]]
    var curveMapping16b = BEZIER(S0)(controlpoints16b);

    var controlpoints17b = [[1.1, 4.74,0+1.85], [1.1, 4.34,0+1.85], [1.1, 4.4,0+1.85], [1.1, 3.92,0+1.85]];
    var curveMapping17b = BEZIER(S0)(controlpoints17b);

    var surface11b = BEZIER(S1)([curveMapping16b,curveMapping17b])
    var out11b= MAP(surface11b)(domain2);


    var c25Hb= CUBIC_HERMITE(S0)([[3.91, 4.74,0+1.85],[3.91+0.29, 4.74,0.29+1.85-0.58],[0.65,0,0],[0,0,-0.65]]);
    var c26Hb= CUBIC_HERMITE(S0)([[3.91, 3.92,0+1.85],[3.91+0.29, 3.92,0.29+1.85-0.58],[0.65,0,0],[0,0,-0.65]])

    var surH29b = CUBIC_HERMITE(S1)([c25Hb,c26Hb,[0,0,0],[0,0,0]]);
    var outH29b = MAP(surH29b)(domain2);

    var c27Hb= CUBIC_HERMITE(S0)([[1.1, 4.74,0+1.85],[1.1-0.29, 4.74,0.29+1.85-0.58],[-0.65,0,0],[0,0,-0.65]]);
    var c28Hb= CUBIC_HERMITE(S0)([[1.1, 3.92,0+1.85],[1.1-0.29, 3.92,0.29+1.85-0.58],[-0.65,0,0],[0,0,-0.65]])

    var surH30b = CUBIC_HERMITE(S1)([c27Hb,c28Hb,[0,0,0],[0,0,0]]);
    var outH30b = MAP(surH30b)(domain2);


    ////
    //upi

    var controlpoints14i = [[3.63, 3.92,0+dx], [3.79, 4.34,0+dx], [3.75, 4.4,0+dx], [3.63, 4.74,0+dx]]
    var curveMapping14i = BEZIER(S0)(controlpoints14i);
    var controlpoints15i =[[3.91, 3.92,0+dx], [3.91, 4.34,0+dx], [3.91, 4.4,0+dx], [3.91,4.74,0+dx]];
    var curveMapping15i = BEZIER(S0)(controlpoints15i);

    var surface10i = BEZIER(S1)([curveMapping14i,curveMapping15i])
    var out10i= MAP(surface10i)(domain2);

    var c25Hi= CUBIC_HERMITE(S0)([[3.91-dx, 4.74,0+dx],[3.91+0.29-dx, 4.74,0.29+dx],[0.65,0,0],[0,0,0.65]]);
    var c26Hi= CUBIC_HERMITE(S0)([[3.91-dx, 3.92,0+dx],[3.91+0.29-dx, 3.92,0.29+dx],[0.65,0,0],[0,0,0.65]])

    var surH29i = CUBIC_HERMITE(S1)([c25Hi,c26Hi,[0,0,0],[0,0,0]]);
    var outH29i = MAP(surH29i)(domain2);

    var controlpoints16i = [[1.49, 4.74,0+dx], [1.31, 4.34,0+dx], [1.39, 4.4,0+dx], [1.49, 3.92,0+dx]]
    var curveMapping16i = BEZIER(S0)(controlpoints16i);

    var controlpoints17i = [[1.1, 4.74,0+dx], [1.1, 4.34,0+dx], [1.1, 4.4,0+dx], [1.1, 3.92,0+dx]];
    var curveMapping17i = BEZIER(S0)(controlpoints17i);

    var surface11i = BEZIER(S1)([curveMapping16i,curveMapping17i])
    var out11i= MAP(surface11i)(domain2);

    var c27Hi= CUBIC_HERMITE(S0)([[1.1+dx, 4.74,0+dx],[1.1-0.29+dx, 4.74,0.29+dx],[-0.65,0,0],[0,0,0.65]]);
    var c28Hi= CUBIC_HERMITE(S0)([[1.1+dx, 3.92,0+dx],[1.1-0.29+dx, 3.92,0.29+dx],[-0.65,0,0],[0,0,0.65]])

    var surH30i = CUBIC_HERMITE(S1)([c27Hi,c28Hi,[0,0,0],[0,0,0]]);
    var outH30i = MAP(surH30i)(domain2);


    var c29Hi= CUBIC_HERMITE(S0)([[3.91+0.29-dx, 4.74,0.29],[3.91+0.29-dx, 4.74,0.29+1.85-0.58],[0,0,0],[0,0,0]])
    var c30Hi= CUBIC_HERMITE(S0)([[3.91+0.29-dx, 3.92,0.29],[3.91+0.29-dx, 3.92,0.29+1.85-0.58],[0,0,0],[0,0,0]])

    var surH31i = CUBIC_HERMITE(S1)([c29Hi,c30Hi,[0,0,0],[0,0,0]]);
    var outH31i = MAP(surH31i)(domain2);


    var c31Hi = CUBIC_HERMITE(S0)([[1.1-0.29+dx, 4.74,0.29],[1.1-0.29+dx, 4.74,0.29+1.85-0.58],[0,0,0],[0,0,0]])
    var c32Hi = CUBIC_HERMITE(S0)([[1.1-0.29+dx, 3.92,0.29],[1.1-0.29+dx, 3.92,0.29+1.85-0.58],[0,0,0],[0,0,0]])

    var surH32i= CUBIC_HERMITE(S1)([c31Hi,c32Hi,[0,0,0],[0,0,0]]);
    var outH32i = MAP(surH32i)(domain2);



    //upi
    var controlpoints14bi = [[3.63, 3.92,0+1.85-dx], [3.79, 4.34,0+1.85-dx], [3.75, 4.4,0+1.85-dx], [3.63, 4.74,0+1.85-dx]]
    var curveMapping14bi = BEZIER(S0)(controlpoints14bi);
    var controlpoints15bi =[[3.91, 3.92,0+1.85-dx], [3.91, 4.34,0+1.85-dx], [3.91, 4.4,0+1.85-dx], [3.91,4.74,0+1.85-dx]];
    var curveMapping15bi = BEZIER(S0)(controlpoints15bi);

    var surface10bi = BEZIER(S1)([curveMapping14bi,curveMapping15bi])
    var out10bi= MAP(surface10bi)(domain2);


    var controlpoints16bi = [[1.49, 4.74,0+1.85-dx], [1.31, 4.34,0+1.85-dx], [1.39, 4.4,0+1.85-dx], [1.49, 3.92,0+1.85-dx]]
    var curveMapping16bi = BEZIER(S0)(controlpoints16bi);

    var controlpoints17bi = [[1.1, 4.74,0+1.85-dx], [1.1, 4.34,0+1.85-dx], [1.1, 4.4,0+1.85-dx], [1.1, 3.92,0+1.85-dx]];
    var curveMapping17bi = BEZIER(S0)(controlpoints17bi);

    var surface11bi = BEZIER(S1)([curveMapping16bi,curveMapping17bi])
    var out11bi= MAP(surface11bi)(domain2);


    var c25Hbi= CUBIC_HERMITE(S0)([[3.91-dx, 4.74,0+1.85-dx],[3.91+0.29-dx, 4.74,0.29+1.85-0.58-dx],[0.65,0,0],[0,0,-0.65]]);
    var c26Hbi= CUBIC_HERMITE(S0)([[3.91-dx, 3.92,0+1.85-dx],[3.91+0.29-dx, 3.92,0.29+1.85-0.58-dx],[0.65,0,0],[0,0,-0.65]])

    var surH29bi = CUBIC_HERMITE(S1)([c25Hbi,c26Hbi,[0,0,0],[0,0,0]]);
    var outH29bi = MAP(surH29bi)(domain2);

    var c27Hbi= CUBIC_HERMITE(S0)([[1.1+dx, 4.74,0+1.85-dx],[1.1-0.29+dx, 4.74,0.29+1.85-0.58-dx],[-0.65,0,0],[0,0,-0.65]]);
    var c28Hbi= CUBIC_HERMITE(S0)([[1.1+dx, 3.92,0+1.85-dx],[1.1-0.29+dx, 3.92,0.29+1.85-0.58-dx],[-0.65,0,0],[0,0,-0.65]])

    var surH30bi = CUBIC_HERMITE(S1)([c27Hbi,c28Hbi,[0,0,0],[0,0,0]]);
    var outH30bi = MAP(surH30bi)(domain2);



    var s = BEZIER(S1)([curveMapping14,curveMapping14i])
    var outS= MAP(s)(domain2);

    var s1 = BEZIER(S1)([curveMapping16,curveMapping16i])
    var outS1= MAP(s1)(domain2);

    var s2 = BEZIER(S1)([curveMapping14b,curveMapping14bi])
    var outS2= MAP(s2)(domain2);

    var s3 = BEZIER(S1)([curveMapping16b,curveMapping16bi])
    var outS3= MAP(s3)(domain2);


    var hb=STRUCT([out10,out11,outH29,outH30,outH31,outH32,out10b,out11b,outH29b,outH30b,out10i,out11i,outH29i,outH30i,outH31i,outH32i,out10bi,out11bi,outH29bi,outH30bi,outS,outS1,outS2,outS3]);
    
    return COLOR(color)(hb)
}


/////pillow


function pillowGener(color){
    

    var controlpoints21 = [[0,0.1,0],[0.3,0.1,-0.2],[0.6,0.1,-0.2],[1,0.1,0]];
    var curveMapping21 = BEZIER(S0)(controlpoints21);
    var cupill1 = MAP(curveMapping21)(domain)

    var controlpoints22= [[0,0.2,0],[0.3,0.2,-0.2],[0.6,0.2,-0.2],[1,0.2,0]];
    var curveMapping22 = BEZIER(S0)(controlpoints22);
    var cupill2 = MAP(curveMapping22)(domain)

    var controlpoints23 = [[0,0.3,0],[0.3,0.3,-0.2],[0.6,0.3,-0.2],[1,0.3,0]];
    var curveMapping23 = BEZIER(S0)(controlpoints23);   
    var cupill3 = MAP(curveMapping23)(domain)

    var controlpoints24 = [[0,0.4,0],[0.3,0.4,-0.2],[0.6,0.4,-0.2],[1,0.4,0]];
    var curveMapping24 = BEZIER(S0)(controlpoints24);
    var cupill4 = MAP(curveMapping24)(domain)

    var controlpoints25 = [[0,0,0],[1,0,0]];
    var controlpoints26 = [[0,0.5,0],[1,0.5,0]];

    var curveMapping25 = BEZIER(S0)(controlpoints25);
    var cupill5 = MAP(curveMapping25)(domain)

    var curveMapping26 = BEZIER(S0)(controlpoints26);
    var cupill6 = MAP(curveMapping26)(domain)


    var surfacep= BEZIER(S1)([curveMapping25,curveMapping21,curveMapping22,curveMapping23,curveMapping24,curveMapping26]);
    var outpill =MAP(surfacep)(domain2);
    
    var pillow = S([0,2])([1.5,1.3])(R([1,2])([PI/2])(R([0,1])([PI/2])(STRUCT([ outpill , S([2])([-1])(outpill)]))))
    
    return COLOR(color)(pillow);
    
}


//scale
function arc(alpha, r, R, h) {
    var domain = DOMAIN([[0,alpha],[r,R]])([10,10]);
    var mapping = function (v) {
        var a = v[0];
        var r = v[1];
        
        return [r*COS(a), r*SIN(a)];
    }
    var model = MAP(mapping)(domain);
    
    var arco = EXTRUDE([h])(model);
    return arco;
}

function stair(color){
    
    var d2= 0.18;
    
    var arc1 = T([0,1,2])([3.7,5.34,0.38])(R([0,2])([PI/2])(arc(PI/2,0.2,0.38,d2)));
    var arc2 = T([0])([1.15])(arc1);
    
    var arc3 = S([2])([0.6])(T([0,1,2])([3.88,5.34,0.63])(R([0,2])([-PI/2])(arc(PI/2,0.2,0.38,d2))));
    var arc4 = T([0])([1.15])(arc3);
    
    var arcs1 = STRUCT([arc1,arc3])
    var arcs2 = STRUCT([arc2,arc4])
    

    var controlpoints11 =[[3.7, 5.34,0], [3.7, 4.32,0], [3.7, 4.23,0], [3.7, 0.96,0]]
    var curveMapping11 = BEZIER(S0)(controlpoints11);


    var controlpoints12 =[[3.88, 5.34,0], [3.88, 4.32,0], [3.88, 4.23,0], [3.88, 0.96,0]]
    var curveMapping12 = BEZIER(S0)(controlpoints12);

    var surface6 = BEZIER(S1)([curveMapping11,curveMapping12])
    var out6 = MAP(surface6)(domain2);

    var controlpoints13 =[[4.85, 5.34,0], [4.85, 4.32,0], [4.85, 4.23,0], [4.85, 0.96,0]]
    var curveMapping13 = BEZIER(S0)(controlpoints13);

    var controlpoints14 = [[5.03, 5.34,0], [5.03, 4.32,0], [5.03, 4.23,0], [5.03, 0.96,0]]
    var curveMapping14 = BEZIER(S0)(controlpoints14);

    var surface7 = BEZIER(S1)([curveMapping13,curveMapping14])
    var out7 = MAP(surface7)(domain2);

    
    var controlpoints15 =[[3.88, 4.91,0], [3.86, 4.95,0], [3.96, 4.86,0], [3.96, 4.86,0]]
    var curveMapping15 = BEZIER(S0)(controlpoints15);

    var controlpoints16 =[[3.88, 4.65,0], [3.9, 4.66,0], [3.96, 4.7,0], [3.96, 4.7,0]]
    var curveMapping16 = BEZIER(S0)(controlpoints16);

    var surface8 = BEZIER(S1)([curveMapping15,curveMapping16])
    var out8 = MAP(surface8)(domain2);



    var controlpoints17 =[[4.77, 4.86,0], [4.77, 4.86,0], [4.87, 4.95,0], [4.85, 4.91,0]]
    var curveMapping17 = BEZIER(S0)(controlpoints17);


    var controlpoints18 =[[4.77, 4.7,0], [4.77, 4.7,0], [4.83, 4.66,0], [4.85, 4.65,0]]
    var curveMapping18 = BEZIER(S0)(controlpoints18);

    var surface9 = BEZIER(S1)([curveMapping17,curveMapping18])
    var out9 = MAP(surface9)(domain2);

    var controlpoints19 =[[3.96, 4.86,0], [4.34, 4.86,0], [4.51, 4.86,0], [4.77, 4.86,0]]
    var curveMapping19 = BEZIER(S0)(controlpoints19);

    var controlpoints20 = [[3.96, 4.7,0], [4.34, 4.7,0], [4.54, 4.7,0], [4.77, 4.7,0]]
    var curveMapping20 = BEZIER(S0)(controlpoints20);

    var surface10 = BEZIER(S1)([curveMapping19,curveMapping20])
    var out10 = MAP(surface10)(domain2);

    var step = STRUCT([out8,out9,out10])

    var scaleA = STRUCT([out6,out7])
    
    var scaleB = T([2])([d2])(S([2])([-1])(scaleA))

    var stepB = T([2])([d2])(S([2])([-1])(step))


    var controlpoints15p=BEZIER(S0)([[3.88, 4.91,d2], [3.86, 4.95,d2], [3.96, 4.86,d2], [3.96, 4.86,d2]])
    var outp4 = MAP(BEZIER(S1)([controlpoints15p,curveMapping15]))(domain2);
    var controlpoints16p=BEZIER(S0)([[3.88, 4.65,d2], [3.9, 4.66,d2], [3.96, 4.7,d2], [3.96, 4.7,d2]])
    var outp5 = MAP(BEZIER(S1)([controlpoints16p,curveMapping16]))(domain2);

    var controlpoints17p=BEZIER(S0)([[4.77, 4.86,d2], [4.77, 4.86,d2], [4.87, 4.95,d2], [4.85, 4.91,d2]])
    var outp6 = MAP(BEZIER(S1)([controlpoints17p,curveMapping17]))(domain2);

    var controlpoints18p = BEZIER(S0)([[4.77, 4.7,d2], [4.77, 4.7,d2], [4.83, 4.66,d2], [4.85, 4.65,d2]])
    var outp7 = MAP(BEZIER(S1)([controlpoints18p,curveMapping18]))(domain2);

    var controlpoints19p = BEZIER(S0)([[3.96, 4.86,d2], [4.34, 4.86,d2], [4.51, 4.86,d2], [4.77, 4.86,d2]])
    var outp8 = MAP(BEZIER(S1)([controlpoints19p,curveMapping19]))(domain2);

    var controlpoints20p = BEZIER(S0)([[3.96, 4.7,d2], [4.34, 4.7,d2], [4.54, 4.7,d2], [4.77, 4.7,d2]])
    var outp9 = MAP(BEZIER(S1)([controlpoints20p,curveMapping20]))(domain2);

    var controlpoints11p =BEZIER(S0)([[3.7, 5.34,d2], [3.7, 4.32,d2], [3.7, 4.23,d2], [3.7, 0.96,d2]])
    var outp10 = MAP(BEZIER(S1)([controlpoints11p,curveMapping11]))(domain2);

    var controlpoints12p =BEZIER(S0)([[3.88, 5.34,d2], [3.88, 4.32,d2], [3.88, 4.23,d2], [3.88, 0.96,d2]])
    var outp11 = MAP(BEZIER(S1)([controlpoints12p,curveMapping12]))(domain2);

    var controlpoints13p =BEZIER(S0)([[4.85, 5.34,d2], [4.85, 4.32,d2], [4.85, 4.23,d2], [4.85, 0.96,d2]])
    var outp12 = MAP(BEZIER(S1)([controlpoints13p,curveMapping13]))(domain2);

    var controlpoints14p = BEZIER(S0)([[5.03, 5.34,d2], [5.03, 4.32,d2], [5.03, 4.23,d2], [5.03, 0.96,d2]])
    var outp13 = MAP(BEZIER(S1)([controlpoints14p,curveMapping14]))(domain2);

    
    var finalStep = STRUCT([step,stepB,outp4,outp5,outp6,outp7,outp8,outp9])

    var step2 = T([1])([-0.75])(finalStep)
    var step3 = T([1])([-0.75])(step2)
    var step4 = T([1])([-0.75])(step3)
    var step5 = T([1])([-0.75])(step4)

    var steps = STRUCT([finalStep,step2,step3,step4,step5])

    var scale =STRUCT([steps,scaleA,scaleB,outp10,outp11,outp12,outp13,arcs1,arcs2])

    return COLOR(color)(scale);

}


//mattress
var mattress = COLOR([1.5,1.5,1.5])(T([0,1,2])([0.9,3.3,0.1])(CUBOID([3.5-(3*dx),0.25 ,1.85-(2*dx)])))

//mattress plus pillow
var pillow = T([0,1,2])([3.92,3.7,0.25])(S([1])([1.35])(pillowGener(colorPillow)))
var pillowPlusMattress = STRUCT([mattress,pillow])

//under bed
var bed = STRUCT([pillowPlusMattress,bedGenerator(colorUnderBed)])


//intermediate part
var intermediatePart = intermediateLevel(colorInter);

//second bed
var bed2 =STRUCT([T([1])([h])(pillowPlusMattress) ,T([1])([h-0.03])(bedGenerator(colorOverBed))])


//scale
var scale =  T([0,1,2])([0.05,h+0.61,-0.635])(R([1,2])([PI/20])(S([0,1,2])([0.45,0.58,0.58])(stair(colorScale))));


//bed complete

bedComplete = T([2,0])([-3.04, -0.85])(R([1,2])([PI/2])(STRUCT([bed,bed2,intermediatePart,scale])))


DRAW(bedComplete)
