basic.clearScreen()
basic.forever(function () {
    if (315 < input.compassHeading() || input.compassHeading() < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (225 < input.compassHeading() && input.compassHeading() < 315) {
        basic.showArrow(ArrowNames.East)
    } else if (135 < input.compassHeading() && input.compassHeading() < 225) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.West)
    }
})
