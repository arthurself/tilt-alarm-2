let Level = 0
radio.setGroup(1)
basic.forever(function () {
    Level = pins.analogReadPin(AnalogPin.P0)
    radio.sendNumber(Level)
})
