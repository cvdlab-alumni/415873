!(function (exports){

  var fs = require('fs');

  var plasm_lib = require('plasm.js');
  var obj = plasm_lib.plasm;
  var fun = plasm_lib.plasm_fun;
  var plasm = obj.plasm;
  var Plasm = obj.Plasm;

  var root = this;

  Object.keys(fun).forEach(function (k) {
                           root[k] = fun[k];
                           });

  var p = new Plasm();
  fun.PLASM(p);


  var scmodel = (function () {

                  var domain = INTERVALS(1)(20);

                  function arc(alpha, r, R, h) {
                  var domain = DOMAIN([[0,alpha],[r,R]])([50,50]);
                  var mapping = function (v) {
                  var a = v[0];
                  var r = v[1];

                  return [r*COS(a), r*SIN(a)];
                  }
                  var model = MAP(mapping)(domain);

                  var arco = EXTRUDE([h])(model);
                  return arco;
                  }

                  var c1 = [[-3,0,0],[-2.8,4,0],[2.8,4,0],[3,0,0]];
                  var curveMapping1 = BEZIER(S0)(c1);
                  var cu1 = MAP(curveMapping1)(domain);

                  var c3 = [[-2.5,0,0.7],[-2.3,3.5,0.7],[2.3,3.5,0.7],[2.5,0,0.7]];
                  var curveMapping3 = BEZIER(S0)(c3);
                  var cu3 = MAP(curveMapping3)(domain);

                  var c2 = [[-3,0,0],[-2.8,-4,0],[2.8,-4,0],[3,0,0]];
                  var curveMapping2 = BEZIER(S0)(c2);
                  var cu2 = MAP(curveMapping2)(domain);

                  var c4 = [[-2.5,0,0.7],[-2.3,-3.5,0.7],[2.3,-3.5,0.7],[2.5,0,0.7]];
                  var curveMapping4 = BEZIER(S0)(c4);
                  var cu3 = MAP(curveMapping4)(domain);



                  var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);

                  var s0 = BEZIER(S1)([curveMapping1, curveMapping3]);
                  var curve0 = MAP(s0)(domain2);

                  var s1 = BEZIER(S1)([curveMapping2, curveMapping4]);
                  var curve1 = MAP(s1)(domain2);

                  var torusSurface = TORUS_SURFACE([0.25, 2.9])([50,50]);
                  var torusTra = T([2])([-0.125])(torusSurface);



                  var base = STRUCT([curve0,curve1]);
                  var base2 = S([2])([-1])(base);
                  var base2T= T([2])([-0.25])(base2);

                  var mic =STRUCT([base,base2T,torusTra]);


                  var c5 = [[-2,0,0.7],[-1.8,3,0.7],[1.8,3,0.7],[2,0,0.7]];
                  var curveMapping5 = BEZIER(S0)(c5);

                  var c6 = [[-2,0,0.7],[-1.8,-3,0.7],[1.8,-3,0.7],[2,0,0.7]];
                  var curveMapping6 = BEZIER(S0)(c6);

                  var s2 = BEZIER(S1)([curveMapping5,curveMapping3]);
                  var curve2 = MAP(s2)(domain2);

                  var s3 = BEZIER(S1)([curveMapping6,curveMapping4]);
                  var curve3 = MAP(s3)(domain2);

                  var curvee = T([2])([-1.6])(STRUCT([curve2,curve3]));

                  var c9 = [[0.76-3.8, 0, 3.65], [2.04-3.8,0, 4.31], [3.35-3.8,0, 4.36], [3.8-3.8, 0,4.35]];
                  var domain = DOMAIN([[0,1],[0,2*PI]])([70,70]);
                  var profile = BEZIER(S0)(c9);
                  var mapping = ROTATIONAL_SURFACE(profile);
                  var surface = MAP(mapping)(domain);
                  var surfR = R([0,2])(PI)(surface);
                  var surfST= T([2])([2.2])(S([0,1,2])([0.85,0.85,0.85])(surfR));

                  var arcoBase = T([2])([0.5])(COLOR([0.2,0.2,0.2])(arc(2*PI,0,2.15,0.8)));

                  var mic1 = STRUCT([mic, curve2, curve3,curvee,surfST,arcoBase]);


                  //cam


                  var c10 = [[0, 0, 0], [0.52, 0, 0.08], [0.77, 0, 0.44], [0.73, 0, 1.45]];

                  var do1 = DOMAIN([[0,1],[0,2*PI]])([70,70]);
                  var pro = BEZIER(S0)(c10);
                  var mapp = ROTATIONAL_SURFACE(pro);
                  var sur = COLOR([0.2,0.2,0.2])(MAP(mapp)(do1));


                  var arco = COLOR([0.2,0.2,0.2])(T([2])([1.45])( arc(2*PI,0.45,0.73,0)));


                  var circle = CIRCLE(0.45)(15);

                  var circleExtr= EXTRUDE([0.35])(circle);
                  var circleTras = T([2])([1.4])(circleExtr);


                  var c11 = [[0, 0,0], [0.6, 0,-0.423+0.45], [0.6, 0, 0.423+0.45], [0,0, 0.9]];
                  var dom1 = DOMAIN([[0,1],[0,2*PI]])([70,70]);
                  var prof1 = BEZIER(S0)(c11);
                  var mapp1 = ROTATIONAL_SURFACE(prof1);
                  var sur1 = COLOR([0.3,0.3,0.3,0.6])(T([2])([0.8])(MAP(mapp1)(dom1)));

                  var led = COLOR([0.78,0.03,0.105])(S([0,1,2])([0.4,0.4,0.4])((T([2])([1.7])(MAP(mapp1)(dom1)))));

                  var cam =T([0])([0.055])(S([0,1,2])([0.8,0.8,0.8])(R([0,1])([PI])(T([2])([4.5])(R([0,2])([PI/2])(STRUCT([sur, arco, circleTras,sur1,led]))))));

                  //buttons

                  var c14 = [[4.61-4.53,0, 0.4], [4.6-4.53,0, 0.5], [4.64-4.53,0, 0.22], [4.53-4.53,0, 0.23]];
                  var dom = DOMAIN([[0,1],[0,2*PI]])([70,70]);
                  var prof = BEZIER(S0)(c14);
                  var map = ROTATIONAL_SURFACE(prof);
                  var surf = MAP(map)(dom);
                  var surfT = S([0,1,2])([1.25,1.25,1.25])(T([0,2])([-2.85,0.08])(R([0,2])([PI/2])(surf)));
                  var button1= R([0,2])([PI])(surfT);
                  var button2 = T([1,0])([1.4, -0.3])(button1);

                  var vol= TORUS_SURFACE([0.1, 0.35])([10,20]);
                  var volT = T([0,1,2])([1.85,2.3,-0.1])(vol);

                  var mic1 = S([0,1,2])([0.7,0.7,0.7])(R([0,2])([PI])(COLOR([0.2,0.2,0.2])( STRUCT([mic1,button1,button2,volT]))));


                  //cavo
                  var tor1 = TORUS_SURFACE([0.1, 0.6])([20,20]);
                  var tor2 = T([2])([0.1])(TORUS_SURFACE([0.1, 0.5])([20,20]));
                  var tor = STRUCT([tor1,tor2]);

                  var cavo = function(anello, nanelli) {
                  var anelli = [anello];
                  for(var i=0; i<nanelli; i++) {
                  spazio = 0.15
                  anelli.push(R([0,2])(PI/180)(T([2])([0.1+spazio])(anello)));
                  anello = anelli[i+1];
                  }

                  if(nanelli===0) return undefined;
                  return STRUCT(anelli);
                  };

                  var cav =S([0,1,2])([0.25,0.25,0.24])(cavo(tor,64));

                  var cavR = R([0,1])([PI])(T([0,2])([-2,0.2])(cav));

                  var cav1 = COLOR([0.2,0.2,0.2])(cavR);

                  var model = STRUCT([cam,mic1,cav1]);

                 return model
                 })();

  exports.author = 'Melix89';
  exports.category = 'Device';
  exports.scmodel = scmodel;

  if (!module.parent) {
  fs.writeFile('./data.json', JSON.stringify(scmodel.toJSON()));
  }

  }(this));