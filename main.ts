let Temperature = 0
basic.forever(function () {
    Temperature = input.temperature()
    basic.showNumber(Temperature)
    basic.pause(1000)
    basic.clearScreen()
})
