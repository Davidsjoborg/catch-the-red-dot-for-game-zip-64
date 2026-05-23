GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Click, function my_function() {
    
    display = GAME_ZIP64.createZIP64Display()
    display.clear()
    display.setMatrixColor(5, 6, GAME_ZIP64.colors(ZipLedColors.Blue))
    display.show()
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Click, function my_function2() {
    display.clear()
    display.setMatrixColor(0, 0, GAME_ZIP64.colors(ZipLedColors.Orange))
    display.show()
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Down, GAME_ZIP64.ZIP64ButtonEvents.Click, function my_function3() {
    display.clear()
    display.setMatrixColor(0, 0, GAME_ZIP64.colors(ZipLedColors.Red))
    display.show()
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Click, function my_function4() {
    display.clear()
    display.setMatrixColor(0, 0, GAME_ZIP64.colors(ZipLedColors.Yellow))
    display.show()
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire1, GAME_ZIP64.ZIP64ButtonEvents.Click, function my_function5() {
    display.clear()
    display.setMatrixColor(0, 0, GAME_ZIP64.colors(ZipLedColors.Purple))
    display.show()
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire2, GAME_ZIP64.ZIP64ButtonEvents.Click, function my_function6() {
    display.clear()
    display.setMatrixColor(0, 0, GAME_ZIP64.colors(ZipLedColors.White))
    display.show()
})
let display : GAME_ZIP64.ZIP64Display = null
display = GAME_ZIP64.createZIP64Display()
display.clear()
display.setBrightness(10)
// display.set_matrix_color(1, 1, GAME_ZIP64.colors(ZipLedColors.RED))
let StepCount = 0
let X_C = 0
let Y_C = 0
let X_TC = randint(0, 4)
let Y_TC = randint(0, 4)
// Direction = 0
// Changes cordinates if there the same on start
if (X_C == X_TC && Y_C == Y_TC) {
    Y_C = randint(0, 4)
    X_C = randint(0, 4)
    Y_TC = randint(0, 4)
    X_TC = randint(0, 4)
}

display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Red))
display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Green))
// led.plot(X_C, Y_C)
// led.plot(X_TC, Y_TC)
display.show()
