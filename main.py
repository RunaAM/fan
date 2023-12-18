function plotLight () {
	
}
let strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
pins.digitalWritePin(DigitalPin.P0, 1)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.forever(function () {
    if (input.lightLevel() > 100) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.Yes)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showIcon(IconNames.No)
    }
})
