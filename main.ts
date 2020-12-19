input.onButtonPressed(Button.A, function () {
    game.addScore(1)
})
input.onButtonPressed(Button.AB, function () {
    game.setScore(0)
})
input.onButtonPressed(Button.B, function () {
    game.addScore(-1)
})
let tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
7,
4
)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
music.setVolume(125)
music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
game.startCountdown(10000)
game.setScore(0)
basic.forever(function () {
    serial.writeLine("" + (pins.digitalReadPin(DigitalPin.P8)))
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.showLeds(`
            # # # # #
            # # . # #
            # . # . #
            # # . # #
            # # # # #
            `)
        game.addScore(1)
    }
    tm.showNumber(game.score())
    basic.pause(500)
})
