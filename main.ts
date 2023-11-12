enum RadioMessage {
    message1 = 49434
}
input.onButtonEvent(Button.A, ButtonEvent.LongClick, function () {
    basic.setLedColor(0x00ffff)
    if (Satz == "") {
        basic.showIcon(IconNames.Sad)
        music.playMelody("B A G F - - - - ", 210)
        basic.clearScreen()
    } else {
        Satz = "" + Satz + " " + Wort
        basic.setLedColor(0x0000ff)
        Wort = ""
        basic.clearScreen()
        basic.pause(Satz.length)
        Buchstabenaufruf = -1
    }
})
radio.onReceivedNumber(function (receivedNumber) {
    if (100 == receivedNumber) {
        basic.setLedColor(0x0000ff)
        basic.clearScreen()
    }
})
input.onPinTouchEvent(TouchPin.P3, ButtonEvent.LongClick, function () {
    Tfe = 1
})
input.onButtonEvent(Button.B, ButtonEvent.LongClick, function () {
    basic.setLedColor(0x65471f)
    if (Satz == "") {
        basic.showIcon(IconNames.Sad)
        music.playMelody("B A G F - - - - ", 210)
        basic.clearScreen()
    } else {
        radio.sendString("" + Satz + ".")
        basic.pause(Satz.length)
        radio.sendNumber(100)
        basic.setLedColor(0x0000ff)
    }
})
input.onPinTouchEvent(TouchPin.P1, ButtonEvent.LongClick, function () {
    Funkauswahl += 1
    radio.setGroup(Funkauswahl)
    basic.showLeds(`
        . . # # .
        # . # . #
        . # # # .
        # . # . #
        . . # # .
        `)
    basic.clearScreen()
    basic.showNumber(Funkauswahl)
    basic.clearScreen()
})
input.onPinTouchEvent(TouchPin.P2, ButtonEvent.LongClick, function () {
    Funkauswahl += -1
    radio.setGroup(Funkauswahl)
    basic.showLeds(`
        . . # # .
        # . # . #
        . # # # .
        # . # . #
        . . # # .
        `)
    basic.clearScreen()
    basic.showNumber(Funkauswahl)
    basic.clearScreen()
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0xffff00)
    if (Buchstabenaufruf == -1) {
        Buchstabenaufruf = 0
    }
    if (Buchstabenaufruf == 0) {
        Buchstabenaufruf = 26
    }
    Buchstabenaufruf += -1
    basic.showString("" + (text_list[Buchstabenaufruf]))
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (Buchstabenaufruf == -1) {
        basic.showIcon(IconNames.Sad)
        music.playMelody("B A G F - - - - ", 210)
        basic.clearScreen()
    } else {
        basic.setLedColor(0xff8000)
        Wort = "" + Wort + text_list[Buchstabenaufruf]
        basic.pause(1000)
        basic.setLedColor(0xffff00)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.setLedColor(0xffff00)
    if (Buchstabenaufruf == 25) {
        Buchstabenaufruf = -1
    }
    Buchstabenaufruf += 1
    basic.showString("" + (text_list[Buchstabenaufruf]))
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
radio.onReceivedString(function (receivedString) {
    basic.setLedColor(0xff00ff)
    basic.showString(receivedString)
    basic.setLedColor(0xff0000)
})
input.onPinTouchEvent(TouchPin.P0, ButtonEvent.LongClick, function () {
    Efv = 0
    Rew = 1
    Tfe = 0
    while (Tfe == 0) {
        basic.setLedColor(basic.rgb(Red, Green, Blue))
        basic.pause(10)
        Red += Rew
        if (Red == 255) {
            Rew = 0
            Vjf = -1
            if (Blue == 0) {
                Vjf = 0
                Rew = 0
                Efv = 1
                Green += Efv
                if (Green == 255) {
                    Efv = 0
                    Rew = -1
                }
            }
        }
        if (Rew == -1 && Red == 0) {
            Rew = 0
            Vjf = 1
        }
        Blue += Vjf
        if (Blue == 255) {
            Vjf = 0
            Efv = -1
            Green += Efv
        }
        if (Blue == 255 && Green == 0) {
            Rew = 1
        }
    }
})
function Reset () {
    Wort = ""
    Buchstabenaufruf = -1
    text_list = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
    ]
    basic.clearScreen()
    basic.setLedColor(0x0000ff)
    music.playMelody("E F G A - - - - ", 190)
}
let Vjf = 0
let Blue = 0
let Green = 0
let Red = 0
let Rew = 0
let Efv = 0
let text_list: string[] = []
let Funkauswahl = 0
let Tfe = 0
let Buchstabenaufruf = 0
let Wort = ""
let Satz = ""
radio.setTransmitPower(7)
radio.setFrequencyBand(83)
radio.sendNumber(0)
for (let index = 0; index < 1; index++) {
    basic.setLedColor(0x00ff00)
    basic.showLeds(`
        # . # . #
        # . # . .
        # # # . #
        # . # . #
        # . # . #
        `)
    basic.setLedColor(0x000000)
    basic.clearScreen()
    basic.pause(100)
    basic.setLedColor(0x00ff00)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.setLedColor(0x000000)
    basic.clearScreen()
    basic.pause(100)
}
Reset()
