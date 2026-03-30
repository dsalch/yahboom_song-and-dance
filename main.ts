/**
 * Custom blocks for Yahboom SmartCar "Song and Dance" routines
 */
//% weight=100 color=#E67E22 icon="\uf001" block="Performance"
namespace performance {

    /**
     * Wiggle the robot back and forth quickly
     */
    //% block="fast wiggle"
    export function fastWiggle(): void {
        for (let i = 0; i < 5; i++) {
            yahboom.setMotor(100, -100) // Quick left
            basic.pause(100)
            yahboom.setMotor(-100, 100) // Quick right
            basic.pause(100)
        }
        yahboom.stopAllMotors()
    }

    /**
     * Perform a Figure S movement
     */
    //% block="do a figure S"
    export function figureS(): void {
        // First curve
        yahboom.setMotor(100, 40)
        basic.pause(1200)
        // Second curve
        yahboom.setMotor(40, 100)
        basic.pause(1200)
        yahboom.stopAllMotors()
    }

    /**
     * Pop a wheelie (Requires high initial torque)
     */
    //% block="pop a wheelie"
    export function popWheelie(): void {
        yahboom.setMotor(-100, -100) // Quick jerk back
        basic.pause(150)
        yahboom.setMotor(100, 100)  // Immediate full power forward
        basic.pause(400)
        yahboom.stopAllMotors()
    }

    /**
     * Flip the robot on its back
     * Note: This usually requires a sudden burst of reverse speed 
     * or a specific mechanical momentum.
     */
    //% block="flip on back"
    export function flipOnBack(): void {
        yahboom.setMotor(100, 100)
        basic.pause(300)
        yahboom.setMotor(-100, -100) // Hard reverse to shift center of gravity
        basic.pause(500)
        yahboom.stopAllMotors()
    }

    /**
     * Attempt to flip right side up
     */
    //% block="flip right side up"
    export function flipRightSideUp(): void {
        // High frequency vibration/jerk to encourage rolling over
        for (let i = 0; i < 3; i++) {
            yahboom.setMotor(100, 100)
            basic.pause(100)
            yahboom.setMotor(-100, -100)
            basic.pause(100)
        }
        yahboom.stopAllMotors()
    }
}
