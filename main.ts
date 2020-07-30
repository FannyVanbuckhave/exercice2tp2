input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        led.unplot(x, 4)
        x += -1
        led.plot(x, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        led.unplot(x, 4)
        x += 1
        led.plot(x, 4)
    }
})
let x = 0
x = randint(0, 4)
led.plot(x, 4)
let pluieX = randint(0, 4)
let pluieY = -1
led.plot(pluieX, pluieY)
let score = 0
let vitesse = 500
basic.forever(function () {
    while (pluieY < 6) {
        pluieY += 1
        led.plot(pluieX, pluieY)
        led.unplot(pluieX, pluieY - 1)
        basic.pause(vitesse)
        if (pluieY == 5) {
            basic.clearScreen()
            basic.showString("Score:")
            basic.showNumber(score)
            pluieY = -1
            basic.clearScreen()
            led.plot(x, 4)
        } else if (pluieX == x && pluieY == 4) {
            score += 1
            pluieX = randint(0, 4)
            pluieY = -1
            led.plot(pluieX, pluieY)
            vitesse += -20
        }
    }
})
