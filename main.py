basic.clear_screen()

def on_forever():
    if 315 < input.compass_heading() and input.compass_heading() < 45:
        basic.show_arrow(ArrowNames.NORTH)
    elif 225 < input.compass_heading() and input.compass_heading() < 315:
        basic.show_arrow(ArrowNames.EAST)
    elif 135 < input.compass_heading() and input.compass_heading() < 225:
        basic.show_arrow(ArrowNames.SOUTH)
basic.forever(on_forever)
