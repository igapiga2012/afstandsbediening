let IR_waarde = 0
IR.IR_init()
let vooruit = 47
let achteruit = 71
let links = 15
let rechts = 13
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
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
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
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
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
        basic.pause(850)
        maqueen.motorStop(maqueen.Motors.M1)
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
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 90)
        basic.pause(850)
        maqueen.motorStop(maqueen.Motors.M2)
    }
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(1000)
})
basic.forever(function () {
    IR_waarde = IR.IR_read()
})
