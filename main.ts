input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    basic.pause(5000)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    basic.pause(100)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    basic.pause(5000)
    maqueen.motorStop(maqueen.Motors.All)
})
