#Exercise04

l=0.8

domain = PROD([INTERVALS(1)(20),INTERVALS(1)(20)])

controls0 = [[2.08, 3.83,0], [1.73, 4.98,+0.4], [4.1, 5.13,+0.4], [3.82, 3.79,0]]
c0 = BEZIER(S1)(controls0)


controls1 = [[2.23, 3.56,0], [2.7, 2.43,+0.1], [3.77, 3.38,+0.1], [3.74, 3.6,0]]
c1 = BEZIER(S1)(controls1)


controls2 = [[2.08, 3.70,+0.3], [1.73, 3.98,+0.3], [4.1, 4,+0.3], [3.82, 3.76,+0.3]]
c2 = BEZIER(S1)(controls2)


p0 = [[2.08, 3.83,-l], [1.73, 4.98,-l-0.4], [4.1, 5.13,-l-0.4], [3.82, 3.79,-l]]
c0s = BEZIER(S1)(p0)


p1 = [[2.23, 3.56,-l-0.1], [2.7, 2.43,-l-0.1], [3.77, 3.38,-l-0.1], [3.74, 3.6,-l-0.1]]
c1s = BEZIER(S1)(p1)


p2 = [[2.08, 3.70,-l-0.3], [1.73, 3.98,-l-0.3], [4.1, 4,-l-0.3], [3.82, 3.76,-0.3-l]]
c2s = BEZIER(S1)(p2)

s0 = BEZIER(S2)([c0,c1])
surf = MAP(s0)(domain)

s0s = BEZIER(S2)([c0s,c1s])
surfss = MAP(s0s)(domain)

fusion=MAP(BEZIER(S2)([c0,c0s]))(domain)
fusion2=MAP(BEZIER(S2)([c1,c1s]))(domain)

a =T([1,2,3])([-3,-4,0.25])( STRUCT([fusion,fusion2, surf,surfss]))
vol = TORUS([2.5,2])([50,50])
cyl1 = T([2])(2)(R([2,3])(PI/2)(CYLINDER([0.2,1.27])(20)))
cyl = R([1,2])(PI)(cyl1)
cyl2 =R([1,2])(PI/2)(cyl)
cyl3 =R([1,2])(-PI/2)(cyl)
volante = COLOR([0.2,0.2,0.2])(STRUCT([vol,a,cyl,cyl2,cyl3]))

VIEW(volante)
