/**
 * Custom blocks for Yahboom SmartCar "Song and Dance" routines
 */
//% weight=100 color=#E67E22 icon="\uf001" block="Performance"
namespace performance {

    /**
     * Wiggle the robot back and forth quickly at a specific speed
     * @param speed speed of the wiggle, eg: 100
     */
    //% block="fast wiggle at speed %speed"
    //% speed.min=0 speed.max=255 speed.defl=100
    export function fastWiggle(speed: number): void {
        for (let i = 0; i < 5; i++) {
            yahboom.setMotor(speed, -speed) // Quick left
            basic.pause(100)
            yahboom.setMotor(-speed, speed) // Quick right
            basic.pause(100)
        }
        yahboom.stopAllMotors()
    }

    /**
     * Perform a Figure S movement at a base speed
     * @param speed base speed for the curves, eg: 100
     */
    //% block="do a figure S at speed %speed"
    //% speed.min=40 speed.max=255 speed.defl=100
    export function figureS(speed: number): void {
        // Calculate an inner wheel speed relative to the base speed
        let innerWheel = Math.floor(speed * 0.4);
        
        // First curve
        yahboom.setMotor(speed, innerWheel)
        basic.pause(1200)
        // Second curve
        yahboom.setMotor(innerWheel, speed)
        basic.pause(1200)
        yahboom.stopAllMotors()
    }

    /**
     * Pop a wheelie
     * @param speed maximum burst speed, eg: 255
     */
    //% block="pop a wheelie at speed %speed"
    //% speed.min=150 speed.max=255 speed.defl=255
    export function popWheelie(speed: number): void {
        yahboom.setMotor(-speed, -speed) // Quick jerk back
        basic.pause(150)
        yahboom.setMotor(speed, speed)   // Immediate burst forward
        basic.pause(400)
        yahboom.stopAllMotors()
    }

    /**
     * Flip the robot on its back
     * @param speed speed to build momentum, eg: 200
     */
    //% block="flip on back at speed %speed"
    //% speed.min=100 speed.max=255 speed.defl=200
    export function flipOnBack(speed: number): void {
        yahboom.setMotor(speed, speed)
        basic.pause(300)
        yahboom.setMotor(-speed, -speed) 
        basic.pause(500)
        yahboom.stopAllMotors()
    }

    /**
     * Attempt to flip right side up
     * @param speed vibration speed, eg: 200
     */
    //% block="flip right side up at speed %speed"
    //% speed.min=100 speed.max=255 speed.defl=200
    export function flipRightSideUp(speed: number): void {
        for (let i = 0; i < 3; i++) {
            yahboom.setMotor(speed, speed)
            basic.pause(100)
            yahboom.setMotor(-speed, -speed)
            basic.pause(100)
        }
        yahboom.stopAllMotors()
    }
}
