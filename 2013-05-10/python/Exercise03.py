 ## Exercise03\

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

