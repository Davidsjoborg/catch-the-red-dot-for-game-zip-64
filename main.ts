GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    display2 = GAME_ZIP64.createZIP64Display()
    display.clear()
    display.setMatrixColor(5, 5, GAME_ZIP64.colors(ZipLedColors.Blue))
})
let display2: GAME_ZIP64.ZIP64Display = null
let display: GAME_ZIP64.ZIP64Display = null
display = GAME_ZIP64.createZIP64Display()
display.clear()
display.setBrightness(10)
display.setMatrixColor(1, 1, GAME_ZIP64.colors(ZipLedColors.Red))
display.setMatrixColor(5, 5, GAME_ZIP64.colors(ZipLedColors.Green))
display.show()
