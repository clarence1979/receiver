radio.onReceivedValue(function (name, value) {
    if (name == "y") {
        if (("y" as any) < (0 as any)) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 100)
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 100)
            kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
            kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
        } else {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 100)
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 100)
            kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
            kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
        }
    } else if (name == "x") {
        if (("x" as any) < (0 as any)) {
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 0)
        } else {
        	
        }
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
