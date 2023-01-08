let ruleta = 0
input.onButtonPressed(Button.AB, function () {
    ruleta = randint(0, 37)
    if (ruleta == 0 || ruleta == 37) {
        basic.showNumber(ruleta)
        basic.showString("ZELENA")
    } else if (ruleta <= 18) {
        basic.showNumber(ruleta)
        basic.showString("CERVENA")
    } else {
        basic.showNumber(ruleta)
        basic.showString("CIERNA")
    }
})
