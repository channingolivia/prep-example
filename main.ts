input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Butterfly)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(3)
    basic.pause(500)
    basic.showNumber(2)
    basic.pause(500)
    basic.showNumber(1)
    basic.pause(500)
    basic.showNumber(0)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("PREP Rocks!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(input.acceleration(Dimension.X))
})
basic.showString("Hello!")
