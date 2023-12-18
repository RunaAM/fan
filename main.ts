function plotLight () {
    if (input.lightLevel() >= 200) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (input.lightLevel() >= 180) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (input.lightLevel() >= 160) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (input.lightLevel() >= 140) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (input.lightLevel() >= 120) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    }
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
pins.digitalWritePin(DigitalPin.P0, 1)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.forever(function () {
    plotLight()
    if (input.lightLevel() >= 160) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.Yes)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showIcon(IconNames.No)
    }
    basic.pause(20)
})
