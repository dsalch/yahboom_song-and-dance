/**
 * Custom blocks for Yahboom SmartCar "Song and Dance" routines
 */
//% weight=10 color=#E67E22 icon="\uf001" block="Dance"
namespace dance {

    export enum DanceSound {
        //% block="Victory"
        Victory,
        //% block="Slide"
        Slide,
        //% block="Jump"
        Jump,
        //% block="Warp"
        Warp,
        //% block="Alarm"
        Alarm
    }

    export enum SoundMode {
        //% block="until done"
        UntilDone,
        //% block="in background"
        InBackground
    }

    /**
     * Play a specific sound effect to match a dance move
     * @param effect the sound to play
     * @param mode play until finished or in the background
     */
    //% block="play dance sound %effect %mode"
    //% weight=100
    export function playDanceSound(effect: DanceSound, mode: SoundMode): void {
        let playStyle = mode == SoundMode.UntilDone ? music.PlaybackMode.UntilDone : music.PlaybackMode.InBackground;

        if (effect == DanceSound.Victory) {
            music.play(music.builtInMelody(Melodies.PowerUp), playStyle);
        } else if (effect == DanceSound.Slide) {
            music.play(music.createSoundExpression(WaveShape.Sine, 1, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), playStyle);
        } else if (effect == DanceSound.Jump) {
            music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), playStyle);
        } else if (effect == DanceSound.Warp) {
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 200, 2000, 255, 0, 300, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), playStyle);
        } else if (effect == DanceSound.Alarm) {
            music.play(music.builtInMelody(Melodies.BaDing), playStyle);
        }
    }

    /**
     * Wiggle the robot back and forth quickly at a specific speed
     * @param speed speed of the wiggle, eg: 100
     */
    //% block="fast wiggle at speed %speed"
    //% speed.min=0 speed.max=255 speed.defl=100
    //% weight=90
    export function fastWiggle(speed: number): void {
        for (let i = 0; i < 5; i++) {
            mbit_Robot.setMotor(speed, -speed) 
            basic.pause(100)
            mbit_Robot.setMotor(-speed, speed) 
            basic.pause(100)
        }
        mbit_Robot.stopAllMotors()
    }

    /**
     * Perform a Figure S movement at a base speed
     * @param speed base speed for the curves, eg: 100
     */
    //% block="figure S at speed %speed"
    //% speed.min=30 speed.max=255 speed.defl=100
    //% weight=80
    export function figureS(speed: number): void {
        let innerWheel = Math.floor(speed * 0.4);
        mbit_Robot.setMotor(speed, innerWheel)
        basic.pause(1200)
        mbit_Robot.setMotor(innerWheel, speed)
        basic.pause(1200)
        mbit_Robot.stopAllMotors()
    }

    /**
     * Pop a wheelie
     * @param speed maximum burst speed, eg: 255
     */
    //% block="pop a wheelie at speed %speed"
    //% speed.min=150 speed.max=255 speed.defl=255
    //% weight=70
    export function popWheelie(speed: number): void {
        mbit_Robot.setMotor(-speed, -speed) 
        basic.pause(150)
        mbit_Robot.setMotor(speed, speed)  
        basic.pause(400)
        mbit_Robot.stopAllMotors()
    }

    /**
     * Flip the robot on its back
     * @param speed speed to build momentum, eg: 200
     */
    //% block="flip on back at speed %speed"
    //% speed.min=100 speed.max=255 speed.defl=200
    //% weight=60
    export function flipOnBack(speed: number): void {
        mbit_Robot.setMotor(speed, speed)
        basic.pause(300)
        mbit_Robot.setMotor(-speed, -speed) 
        basic.pause(500)
        mbit_Robot.stopAllMotors()
    }

    /**
     * Attempt to flip right side up
     * @param speed vibration speed, eg: 200
     */
    //% block="flip upright at speed %speed"
    //% speed.min=100 speed.max=255 speed.defl=200
    //% weight=50
    export function flipRightSideUp(speed: number): void {
        for (let i = 0; i < 3; i++) {
            mbit_Robot.setMotor(speed, speed)
            basic.pause(100)
            mbit_Robot.setMotor(-speed, -speed)
            basic.pause(100)
        }
        mbit_Robot.stopAllMotors()
    }
}
