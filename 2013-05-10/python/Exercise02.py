#Exercise02


domain = INTERVALS(1)(20)

### Lateral Surface
controls0 = [[0.13, 4.57], [0.9, 5.03], [1.12, 4.74], [1.79, 5.18]]
controls1 = [[1.79, 5.18], [2.06, 5.25], [2.19, 5.48], [4.04, 4.97]]
controls2 = [[4.04, 4.97], [4.57, 4.99], [4.26, 4.8], [4.44, 4.42]]
controls3 = [[4.44, 4.42], [4.33, 4.44], [4.38, 4.19], [4.07, 4.26]]
controls4 = [[4.07, 4.26], [4.16, 4.83], [3.75, 4.83], [3.6, 4.8]]
controls5 = [[3.6, 4.81], [3.32, 4.8], [3.24, 4.44], [3.32, 4.25]]
controls6 = [[3.32, 4.25], [2.75, 4.3], [2.47, 4.22], [1.51, 4.27]]
controls7 = [[1.51, 4.27], [1.68, 4.64], [1.26, 4.95], [1, 4.78]]
controls8 = [[1, 4.78], [0.72, 4.6], [0.77, 4.42], [0.8, 4.28]]
controls9 = [[0.8, 4.28], [0.55, 4.24], [0.34, 4.23], [0.14, 4.31]]
controls10 = [[0.14, 4.31], [0.12, 4.57], [0.14, 4.38], [0.14, 4.59]]



curve0 = MAP(BEZIER(S1)(controls0))(domain)
curve1 = MAP(BEZIER(S1)(controls1))(domain)
curve2 = MAP(BEZIER(S1)(controls2))(domain)
curve3 = MAP(BEZIER(S1)(controls3))(domain)
curve4 = MAP(BEZIER(S1)(controls4))(domain)
curve5 = MAP(BEZIER(S1)(controls5))(domain)
curve6 = MAP(BEZIER(S1)(controls6))(domain)
curve7 = MAP(BEZIER(S1)(controls7))(domain)
curve8 = MAP(BEZIER(S1)(controls8))(domain)
curve9 = MAP(BEZIER(S1)(controls9))(domain)
curve10 = MAP(BEZIER(S1)(controls10))(domain)
               
               
lateralSurface = T([1,2,3])([-0.1,-4.65, 5.8])(COLOR(RED)(STRUCT([curve0,curve1,curve2,curve3,curve4,curve5,curve6,curve7,curve8,curve9,curve10])))


### Surface

controls11 = [[0.21, 2.99], [0.24, 3.79], [3.69, 3.24], [3.89, 3.41]]
controls12 = [[3.89, 3.41], [4.62, 3.67], [4.65, 1.52], [4.04, 1.6]]
controls13 = [[4.04, 1.6], [1.77, 1.6], [0.95, 1.45], [0.42, 1.68]]
controls14 = [[0.42, 1.69], [0.35, 1.75], [0.38, 1.72], [0.31, 1.77]]
controls15 = [[0.31, 1.77], [0.14, 2.11], [-0.04, 2.78], [0.36, 3.23]]

curve11 = MAP(BEZIER(S1)(controls11))(domain)
curve12 = MAP(BEZIER(S1)(controls12))(domain)
curve13 = MAP(BEZIER(S1)(controls13))(domain)
curve14 = MAP(BEZIER(S1)(controls14))(domain)
curve15 = MAP(BEZIER(S1)(controls15))(domain)

surface = COLOR(GREEN)(STRUCT([curve11,curve12,curve13,curve14,curve15]))
trasSurface= T(2)(3.3)(surface)
rotSurface= R([2,3])(PI/2)(trasSurface)

## Front of view

controls16= [[5.08, 2.63], [5.03, 3.15], [6.62, 3.08], [6.59, 2.65]]
controls17= [[6.59, 2.65], [6.89, 2.52], [6.67, 1.8], [6.65, 1.97]]
controls18= [[6.65, 1.97], [6.34, 1.98], [5.54, 1.96], [4.95, 1.97]]
controls19= [[4.95, 1.97], [4.93, 1.99], [4.87, 2.41], [4.93, 2.56]]
controls20 =[[4.93, 2.56], [5.04, 2.63], [4.96, 2.57], [5.11, 2.67]]


curve16 = MAP(BEZIER(S1)(controls16))(domain)
curve17 = MAP(BEZIER(S1)(controls17))(domain)
curve18 = MAP(BEZIER(S1)(controls18))(domain)
curve19 = MAP(BEZIER(S1)(controls19))(domain)
curve20 = MAP(BEZIER(S1)(controls20))(domain)



frontOfView = COLOR(YELLOW)(STRUCT([curve16,curve17,curve18,curve19,curve20]))
rotFrontOfView = R([1,3])(PI/2)(frontOfView)
trasFrontOfView = T([1,2])([1.5,-2.35])(rotFrontOfView)



##  Back view

controls21 = [[5.21, 5.08], [5.09, 5.42], [6.57, 5.37], [6.48, 5.06]]
controls22 = [[6.48, 5.06], [6.53, 5.01], [6.55, 4.98], [6.59, 4.89]]
controls23 = [[6.59, 4.89], [6.62, 4.97], [6.6, 4.95], [6.66, 5.01]]
controls24 = [[6.66, 5.01], [6.82, 4.93], [6.72, 4.37], [6.7, 4.29]]
controls24 = [[6.7, 4.29], [6.4, 4.22], [5.22, 4.24], [5.21, 4.24]]
controls25 = [[5.21, 4.24], [4.7, 4.01], [4.88, 5.48], [5.21, 4.87]]
controls26 = [[5.21, 4.87], [5.14, 4.76], [4.99, 5.27], [5.43, 4.96]]

curve21 = MAP(BEZIER(S1)(controls21))(domain)
curve22 = MAP(BEZIER(S1)(controls22))(domain)
curve23 = MAP(BEZIER(S1)(controls23))(domain)
curve24 = MAP(BEZIER(S1)(controls24))(domain)
curve25 = MAP(BEZIER(S1)(controls25))(domain)

backView = COLOR(WHITE)(STRUCT([curve16,curve17,curve18,curve19,curve20]))
rotBackView = R([1,3])(PI/2)(backView)
trasBackView = T([1,2])([2.75,-2.35])(rotBackView)


VIEW(STRUCT([trasBackView,trasFrontOfView,rotSurface,lateralSurface]))









