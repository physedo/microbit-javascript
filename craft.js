radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        angle = Math.max(0, angle - 5)
        pins.servoWritePin(AnalogPin.P0, angle)
        led.stopAnimation()
    } else if (receivedNumber == 2) {
        angle = Math.min(180, angle + 5)
        pins.servoWritePin(AnalogPin.P0, angle)
        led.stopAnimation()
    } else if (receivedNumber == 3) {
        angle = 90
        pins.servoWritePin(AnalogPin.P0, angle)
    } else if (receivedNumber == 3) {
        pins.servoWritePin(AnalogPin.P1, angle)
    }
})
let angle = 0
angle = 90
pins.servoWritePin(AnalogPin.P0, angle)
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(angle)
})
