input.onButtonPressed(Button.A, function () {
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, 180)
    basic.showNumber(180)
    basic.pause(200)
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, 0)
    basic.showNumber(0)
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, 90)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
})
basic.showIcon(IconNames.Heart)
kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, 90)
basic.showNumber(90)
