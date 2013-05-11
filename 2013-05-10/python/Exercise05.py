

#Exercise05


domain2 = PROD([INTERVALS(1)(50), INTERVALS(1)(50)])

## ProfileAB

controls0 = [[0.88, 4.53, 0], [1.15, 4.63,0], [1.42, 4.64,0], [1.92, 4.6,0]]  #parte sopra ruota
controls1 = [[0.98, 3.84,0], [0.84, 4.71,0], [2.09, 4.78,0], [1.92, 3.82,0]] #ruota anteriore


controls2 = [[0.16, 4.17,-0.2], [0.17, 4.25,0], [0.43, 4.45,0], [0.97, 4.55,0]] #muso
controls3 = [[0.18, 3.87,-0.2], [0.33, 3.88,0], [0.63, 3.84,0], [0.97, 3.83,0]]

controls4 = [[1.92, 3.82,0], [2.27, 3.82,0], [3.61, 3.81,0], [4.17, 3.83,0]] #centro basso
controls5 = [[1.92, 4.6,0], [3.34, 4.6,0], [3.77, 4.84,0], [4.17, 4.84,0]] #centro alto

controls6 = [[4.17, 3.83,0], [3.93, 4.7,0], [5.26, 4.86,0], [5.11, 3.84,0]]#ruota posteriore
controls7 = [[4.17, 4.84,0], [4.25, 4.86,0], [4.84, 4.76,0], [5.06, 4.7,0]]#sopra ruota

controls8 = [[5.06, 4.7,0], [5.13, 4.74,0], [5.47, 4.6,0], [5.51, 4.41,-0.2]] #parte posteriore alta
controls9 = [[5.11, 3.84,0], [5.5, 3.7,-0.2], [5.6, 4.27,-0.2], [5.51, 4.41,-0.2]]  #parte posteriore bassa

controls10 = [[1.9, 4.6,-0.2], [2.94, 5.49,-0.2], [3.97, 4.86,-0.2], [4.52, 4.81,-0.2]] #finestrino
controls11 =[[2.02, 4.59,0], [2.33, 4.86,0], [2.95, 5.22,0], [3.76, 4.79,0]]#contorno finestrino

c0 = BEZIER(S1)(controls0)
c1 = BEZIER(S1)(controls1)

c2= BEZIER(S1)(controls2)
c3= BEZIER(S1)(controls3)

c4= BEZIER(S1)(controls4)
c5= BEZIER(S1)(controls5)

c6= BEZIER(S1)(controls6)
c7= BEZIER(S1)(controls7)

c8= BEZIER(S1)(controls8)
c9= BEZIER(S1)(controls9)

c10= BEZIER(S1)(controls10)
c11= BEZIER(S1)(controls11)


s0= BEZIER(S2)([c0,c1])
surf = MAP(s0)(domain2)

s1= BEZIER(S2)([c2,c3])
surf1 = MAP(s1)(domain2)

s2= BEZIER(S2)([c4,c5])
surf2 = MAP(s2)(domain2)

s3= BEZIER(S2)([c6,c7])
surf3 = MAP(s3)(domain2)

s4= BEZIER(S2)([c8,c9])
surf4 = MAP(s4)(domain2)

s5= BEZIER(S2)([c10,c11])
surf5 = MAP(s5)(domain2)

t= 2.23

surfaceA =  STRUCT([surf,surf1,surf2,surf3,surf4,surf5])\

surfLatB = S([3])([-1])(surfaceA)
surfaceB = T([3])([-t])(surfLatB)

##3D

controls0f = [[0.88, 4.53, -t], [1.15, 4.63,-t], [1.42, 4.64,-t], [1.92, 4.6,-t]]  #parte sopra ruota
controls1f = [[0.98, 3.84,-t], [0.84, 4.71,-t], [2.09, 4.78,- t], [1.92, 3.82,- t]] #ruota anteriore

controls2f = [[0.16, 4.17,-2.03], [0.17, 4.25,-t], [0.43, 4.45,-t], [0.97, 4.55,-t]] #muso
controls3f = [[0.18, 3.87,-2.03], [0.33, 3.88,-t], [0.63, 3.84,-t], [0.97, 3.83,-t]]

controls4f = [[1.92, 3.82,-t], [2.27, 3.82,-t], [3.61, 3.81,-t], [4.17, 3.83,-t]] #centro basso
#controls5f = [[1.92, 4.6,-t], [3.34, 4.6,-t], [3.77, 4.84,-t], [4.17, 4.84,-t]] #centro alto

controls6f = [[4.17, 3.83,-t], [3.93, 4.7,-t], [5.26, 4.86,-t], [5.11, 3.84,-t]]#ruota posteriore
controls7f = [[4.17, 4.84,-t], [4.25, 4.86,-t], [4.84, 4.76,-t], [5.06, 4.7,-t]]#sopra ruota

controls8f = [[5.06, 4.7,-t], [5.13, 4.74,-t], [5.47, 4.6,-t], [5.51, 4.41,-2.03]] #parte posteriore alta
controls9f = [[5.11, 3.84,-t], [5.5, 3.7,-2.03], [5.6, 4.27,-2.03], [5.51, 4.41,-2.03]]  #parte posteriore bassa

controls10f = [[1.9, 4.6,-2.03], [2.94, 5.49,-2.3], [3.97, 4.86,-2.03], [4.52, 4.81,-2.03]] #finestrino
controls11f =[[2.02, 4.59,-t], [2.33, 4.86,-t], [2.95, 5.22,-t], [3.76, 4.79,-t]]#contorno finestrino

c0f = BEZIER(S1)(controls0f)
c1f = BEZIER(S1)(controls1f)

c2f= BEZIER(S1)(controls2f)
c3f= BEZIER(S1)(controls3f)

c4f= BEZIER(S1)(controls4f)
#c5f= BEZIER(S1)(controls5f)

c6f= BEZIER(S1)(controls6f)
c7f= BEZIER(S1)(controls7f)

c8f= BEZIER(S1)(controls8f)
c9f= BEZIER(S1)(controls9f)

c10f= BEZIER(S1)(controls10f)
c11f= BEZIER(S1)(controls11f)


s0f= BEZIER(S2)([c0f,c0])
surff = MAP(s0f)(domain2)

s1f= BEZIER(S2)([c1f,c1])
surf1f = MAP(s1f)(domain2)

s2f= BEZIER(S2)([c2f,c2])
surf2f = MAP(s2f)(domain2)

s3f= BEZIER(S2)([c3f,c3])
surf3f = MAP(s3f)(domain2)

s4f= BEZIER(S2)([c4f,c4])
surf4f = MAP(s4f)(domain2)

#s5f= BEZIER(S2)([c5f,c5])
#surf5f = MAP(s5f)(domain2)

s6f= BEZIER(S2)([c6f,c6])
surf6f = MAP(s6f)(domain2)

s7f= BEZIER(S2)([c7f,c7])
surf7f = MAP(s7f)(domain2)

s8f= BEZIER(S2)([c8f,c8])
surf8f = MAP(s8f)(domain2)

s9f= BEZIER(S2)([c9f,c9])
surf9f = MAP(s9f)(domain2)

s10f= BEZIER(S2)([c10f,c10])
surf10f = MAP(s10f)(domain2)

s11f= BEZIER(S2)([c11f,c11])
surf11f = MAP(s1f)(domain2)

surfaceC =  STRUCT([surff,surf1f,surf2f,surf3f,surf4f,surf6f,surf7f,surf8f,surf8f,surf9f,surf10f, surf11f])

surface = COLOR(RED)(STRUCT([surfaceB,surfaceA,surfaceC]))



##ruote


def torus(rG, radius):
	def t2 (v):
		a = v[0]
		b = v[1]
		u = (radius * COS(a) + rG) * COS(b)
		v = (radius * COS(a) + rG) * SIN(b)
		w = (radius * SIN(a))
		return [u,v,w]
	return t2

def tire(rG,radius, tread, dom, innerRadius, extRadius ):
	tor = torus(rG,radius)
	model = MAP(tor)(dom)
	model1 = R([1,3])(PI)(model)
	innerCircle= EXTRUDE([None, CIRCUMFERENCE(innerRadius)(100), tread])
	extCircle = EXTRUDE([None, CIRCUMFERENCE(extRadius)(100), tread])
	tire = COLOR([0.1,0.1,0.1])(STRUCT([T(3)([tread])(model),extCircle,innerCircle,model1] ))
	return tire

def wheel (tread,smallRadiusDisk, bigRadiusDisk, innerRadius, nRadius):
	ring =COLOR([0.4,0.4,0.4])(T(3)(tread/4)(EXTRUDE([None, RING([smallRadiusDisk, bigRadiusDisk])([100,100]), 0.2])))
	tube = COLOR([0.7,0.7,0.7])(TUBE([innerRadius-0.5, innerRadius,tread])(100))
	cyl = COLOR([0.7,0.7,0.7])(TUBE([0, smallRadiusDisk-0.3, tread])(100))
	rad = T([1,2])([-0.25,0.8])(CUBOID([0.5, innerRadius-1.5, tread/4]))
	radiuss = COLOR([0.7,0.7,0.7])(STRUCT(NN(nRadius)([rad, R([1,2])((2*PI)/5)])))
	
	finalWheel= STRUCT([ring,tube,cyl,radiuss])
        return finalWheel

dom = PROD([INTERVALS(PI)(100),INTERVALS(2*PI)(100)])
radius =0.5
rG = 6
tread = 01.5
smallRadiusDisk = 1.3
bigRadiusDisk=4.1
innerRadius= rG-radius
extRadius = rG+radius
nRadius= 5

finalTire = tire (rG, radius, tread, dom, innerRadius,extRadius)
finalWheel = wheel(tread, smallRadiusDisk, bigRadiusDisk, innerRadius, nRadius)

wheelComplete = STRUCT([finalTire,finalWheel])

scaleWheel= S(1)(0.065)(S(2)(0.065)(S(3)(0.065)(wheelComplete)))
traslWheel1 = T([2,1,3])([4.1,1.45,-t])(scaleWheel)
traslWheel2 = T(1)([3.18])(traslWheel1)

rotatedWheel= R([1,3])(PI)(scaleWheel)
traslWheel3= T([2,1])([4.1,1.45])(rotatedWheel)
traslWheel4 = T(1)([3.18])(traslWheel3)


allWheels = STRUCT([traslWheel1,traslWheel2,traslWheel3,traslWheel4,traslWheel4])

VIEW(STRUCT([surface, allWheels]))



