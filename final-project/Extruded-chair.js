d = 3,5

var domain = INTERVALS(1)(32);
var domain2 = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);

cp1 = [[1.34, 2.25,0], [1.84, 2.85,0], [1.38, 2.58,0], [3.86, 2.91,0]]
c1= BEZIER(S0)(cp1)
curve1 = MAP(c1)(domain)

cp2 =[[3.86, 2.91,0], [4.46, 2.85,0], [4.11, 2.2,0], [3.56, 1.19,0]]
c2= BEZIER(S0)(cp2)
curve2 = MAP(c2)(domain)

cp3 = [[3.56, 1.19,0], [3.42, 0.87,0], [2.81, 1.04,0], [1.34, 0.97,0]]
c3= BEZIER(S0)(cp3)
curve3 = MAP(c3)(domain)

cp4 = [[1.34, 0.97,0], [1.07, 1.05,0], [0.81, 1.48,0], [0.71, 1.64,0]]
c4= BEZIER(S0)(cp4)
curve4 = MAP(c4)(domain)


cp5 = [[0.71, 1.64,0], [0.41, 1.98,0], [0.52, 2.02,0], [0.85, 2.81,0]]
c5= BEZIER(S0)(cp5)
curve5 = MAP(c5)(domain)

cp6 = [[0.85, 2.81,0], [0.99, 3.08,0], [0.61, 3.86,0], [0.36, 4.46,0]]
c6= BEZIER(S0)(cp6)
curve6 = MAP(c6)(domain)

cp7 =[[0.36, 4.46,0], [0.51, 4.87,0], [0.72, 4.16,0], [1.07, 3.19,0]]
c7= BEZIER(S0)(cp7)
curve7 = MAP(c7)(domain)

cp8 =[[1.07, 3.19,0], [1.22, 2.76,0], [0.7, 2.14,0], [0.79, 2.01,0]]
c8= BEZIER(S0)(cp8)
curve8 = MAP(c8)(domain)

cp9 = [[0.79, 2.01,0], [0.91, 1.66,0], [1.12, 2.01,0], [1.34, 2.25,0]]
c9= BEZIER(S0)(cp9)
curve9 = MAP(c9)(domain)

cp10 = [[1.93, 2.48,0], [3.03, 2.63,0], [2.65, 2.58,0], [3.8, 2.72,0]]
c10= BEZIER(S0)(cp10)
curve10 = MAP(c10)(domain)

cp11= [[3.8, 2.72,0], [4.27, 2.71,0], [3.54, 1.47,0], [3.34, 1.28,0]]
c11= BEZIER(S0)(cp11)
curve11 = MAP(c11)(domain)

cp12 = [[3.34, 1.28,0], [3.09, 1.1,0], [1.99, 1.2,0], [1.48, 1.18,0]]
c12= BEZIER(S0)(cp12)
curve12 = MAP(c12)(domain)

cp13 = [[1.48, 1.18,0], [1.32, 1.24,0], [1.14, 1.3,0], [1.21, 1.64,0]]
c13= BEZIER(S0)(cp13)
curve13 = MAP(c13)(domain)

cp14 = [[1.21, 1.64,0], [1.41, 2.04,0], [1.74, 2.45,0], [1.93, 2.48,0]]
c14= BEZIER(S0)(cp14)
curve14 = MAP(c14)(domain)

cp15 = [[3.86,2.91,0],[3.8,2.72,0]]
c15= BEZIER(S0)(cp15)

cp16 =[[3.8, 2.72], [3.96, 2.7], [3.97, 2.56], [3.96, 2.42]]
c16= BEZIER(S0)(cp16)

cp17 =[[4.07, 2.68],[4.12, 2.65]]
c17= BEZIER(S0)(cp17)

cp18 =[[3.98, 2.61], [3.895, 2.26], [3.97, 2.46], [3.74, 1.84]]

c18= BEZIER(S0)(cp18)


cp19 = [[3.97, 2.45], [4.02, 2.42], [3.56, 1.45], [3.34, 1.28]]


c19= BEZIER(S0)(cp19)

cp20 = [[4.05, 2.45], [4.11, 2.23], [4.11, 2.2], [3.56, 1.19]];

c20 = BEZIER(S0)(cp20);

cp21 = [[0.79,2.01],[0.85,2.81]];

c21 = BEZIER(S0)(cp21);

cp22 = [[0.71,1.64],[1.21,1.64]];

c22 = BEZIER(S0)(cp22);

//profile = STRUCT([curve1,curve2,curve3,curve4,curve5,curve6,curve7,curve8,curve9,curve10,curve11,curve11,curve12,curve13,curve14])


s110 = MAP(BEZIER(S1)([c1,c10]))(domain2)
s312 = MAP(BEZIER(S1)([c3,c12]))(domain2)
s413 = MAP(BEZIER(S1)([c4,c13]))(domain2)


s6 = MAP(BEZIER(S1)([c6,[1.08,3.19]]))(domain2)
s7 = MAP(BEZIER(S1)([c7,[1.08,3.19]]))(domain2)
s8 = MAP(BEZIER(S1)([c8,[0.85,2.81]]))(domain2)

s5 = MAP(BEZIER(S1)([c5,c21]))(domain2)
s14 = MAP(BEZIER(S1)([c14,[1.34,2.25]]))(domain2)



s2 = MAP(BEZIER(S1)([c2, [4.03, 2.66]]))(domain2)
s1517 = MAP(BEZIER(S1)([c15, c17]))(domain2)
s1617 = MAP(BEZIER(S1)([c16,c17]))(domain2)
s18 = MAP(BEZIER(S1)([c18,[3.99, 2.17]]))(domain2)
s19 = MAP(BEZIER(S1)([c19,[3.56, 1.19]]))(domain2)
s20 = MAP(BEZIER(S1)([c20,[3.54, 1.46]]))(domain2)
s922 = MAP(BEZIER(S1)([c9,c22]))(domain2)

          
profileA = COLOR([171/255,205/255,239/255])(STRUCT([s110,s312,s413,s6,s7,s8,s2,s1517,s1617,s18,s19,s20,s14,s5,s922]))
profileB =T([2])([d])(profileA);

DRAW(profileA)
DRAW(profileB)

//profondità

cp1b = [[1.34, 2.25,d], [1.84, 2.85,d], [1.38, 2.58,d], [3.86, 2.91,d]]
c1b= BEZIER(S0)(cp1b)


cp2b =[[3.86, 2.91,d], [4.46, 2.85,d], [4.11, 2.2,d], [3.56, 1.19,d]]
c2b= BEZIER(S0)(cp2b)


cp3b = [[3.56, 1.19,d], [3.42, 0.87,d], [2.81, 1.04,d], [1.34, 0.97,d]]
c3b= BEZIER(S0)(cp3b)


cp4b = [[1.34, 0.97,d], [1.07, 1.05,d], [0.81, 1.48,d], [0.71, 1.64,d]]
c4b= BEZIER(S0)(cp4b)



cp5b = [[0.71, 1.64,d], [0.41, 1.98,d], [0.52, 2.02,d], [0.85, 2.81,d]]
c5b= BEZIER(S0)(cp5b)


cp6b = [[0.85, 2.81,d], [0.99, 3.08,d], [0.61, 3.86,d], [0.36, 4.46,d]]
c6b= BEZIER(S0)(cp6b)


cp7b =[[0.36, 4.46,d], [0.51, 4.87,d], [0.72, 4.16,d], [1.07, 3.19,d]]
c7b= BEZIER(S0)(cp7b)

cp8b =[[1.07, 3.19,d], [1.22, 2.76,d], [0.7, 2.14,d], [0.79, 2.01,d]]
c8b= BEZIER(S0)(cp8b)


cp9b = [[0.79, 2.01,d], [0.91, 1.66,d], [1.12, 2.01,d], [1.34, 2.25,d]]
c9b= BEZIER(S0)(cp9b)


cp10b = [[1.93, 2.48,d], [3.03, 2.63,d], [2.65, 2.58,d], [3.8, 2.72,d]]
c10b= BEZIER(S0)(cp10b)


cp11b= [[3.8, 2.72,d], [4.27, 2.71,d], [3.54, 1.47,d], [3.34, 1.28,d]]
c11b= BEZIER(S0)(cp11b)


cp12b = [[3.34, 1.28,d], [3.09, 1.1,d], [1.99, 1.2,d], [1.48, 1.18,d]]
c12b= BEZIER(S0)(cp12b)


cp13b = [[1.48, 1.18,d], [1.32, 1.24,d], [1.14, 1.3,d], [1.21, 1.64,d]]
c13b= BEZIER(S0)(cp13b)


cp14b = [[1.21, 1.64,d], [1.41, 2.04,d], [1.74, 2.45,d], [1.93, 2.48,d]]
c14b= BEZIER(S0)(cp14b)

s1b = MAP(BEZIER(S1)([c1,c1b]))(domain2)
s2b = MAP(BEZIER(S1)([c2,c2b]))(domain2)
s3b = MAP(BEZIER(S1)([c3,c3b]))(domain2)
s4b = MAP(BEZIER(S1)([c4,c4b]))(domain2)
s5b = MAP(BEZIER(S1)([c5,c5b]))(domain2)
s6b = MAP(BEZIER(S1)([c6,c6b]))(domain2)
s7b = MAP(BEZIER(S1)([c7,c7b]))(domain2)
s8b = MAP(BEZIER(S1)([c8,c8b]))(domain2)
s9b = MAP(BEZIER(S1)([c9,c9b]))(domain2)
s10b = MAP(BEZIER(S1)([c10,c10b]))(domain2)
s11b = MAP(BEZIER(S1)([c11,c11b]))(domain2)
s12b = MAP(BEZIER(S1)([c12,c12b]))(domain2)
s13b = MAP(BEZIER(S1)([c13,c13b]))(domain2)
s14b = MAP(BEZIER(S1)([c14,c14b]))(domain2)

surface = COLOR([171/255,205/255,239/255])(STRUCT([s1b, s2b,s3b,s4b,s5b,s6b,s7b,s8b,s9b,s10b,s11b,s12b,s13b,s14b]));
DRAW(surface);
