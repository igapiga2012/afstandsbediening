let IR_waarde = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
IR.IR_init()
let vooruit = 47
let achteruit = 71
let links = 15
let rechts = 13
let stop = 6
basic.forever(function () {
    IR_waarde = IR.IR_read()
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
})
basic.forever(function () {
    if (IR_waarde == vooruit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 90)
    }
    if (IR_waarde == achteruit) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 90)
    }
    if (IR_waarde == links) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 90)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 90)
    }
    if (IR_waarde == rechts) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 90)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 90)
    }
    if (IR_waarde == stop) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
