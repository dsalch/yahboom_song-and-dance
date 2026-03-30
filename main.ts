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
        Alarm,
        //% block="Spin"
        Spin,
        //% block="Stutter"
        Stutter,
        //% block="Power Down"
        PowerDown
    }

    export enum SoundMode {
        //% block="until done"
        UntilDone,
        //% block="in background"
        InBackground
    }

    /**
     * Play a specific sound effect to match a dance move
     */
    //% block="play dance sound %effect %mode"
    //% weight=100
    export function playDanceSound(effect: DanceSound, mode: SoundMode): void {
        let playStyle = mode == SoundMode.UntilDone ? music.PlaybackMode.UntilDone : music.PlaybackMode.InBackground;

        if (effect == DanceSound.Victory) {
            // FIX: Use builtInPlayableMelody to return a Playable type
            music.play(music.builtInPlayableMelody(Melodies.PowerUp), playStyle);
        } else if (effect == DanceSound.Slide) {
            music.play(music.createSoundExpression(WaveShape.Sine, 1, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), playStyle);
        } else if (effect == DanceSound.Jump) {
            music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), playStyle);
        } else if (effect == DanceSound.Warp) {
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 200, 2000, 255, 0, 300, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), playStyle);
        } else if (effect == DanceSound.Alarm) {
            // FIX: Use builtInPlayableMelody to return a Playable type
            music.play(music.builtInPlayableMelody(Melodies.BaDing), playStyle);
        } else if (effect == DanceSound.Spin) {
            music.play(music.createSoundExpression(WaveShape.Triangle, 100, 2000, 255, 0, 800, SoundExpressionEffect.None, InterpolationCurve.Curve), playStyle);
        } else if (effect == DanceSound.Stutter) {
            music.play(music.createSoundExpression(WaveShape.Square, 200, 200, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), playStyle);
        } else if (effect == DanceSound.PowerDown) {
            music.play(music.createSoundExpression(WaveShape.Sine, 3000, 1, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), playStyle);
        }
    }

    /**
     * Wiggle the robot back and forth quickly at a specific speed
     */
    //% block="fast wiggle at speed %speed"
    //% speed.min=0 speed.max=255 speed.defl=100
    //% weight=90
    export function fastWiggle(speed: number): void {
        for (let i = 0; i < 5; i++) {
            mbit_robot.setMotor(speed, -speed)
            basic.pause(100)
            mbit_robot.setMotor(-speed, speed)
            basic.pause(100)
        }
        mbit_robot.stopAllMotors()
    }

    /**
     * Perform a Figure S movement at a base speed
     */
    //% block="figure S at speed %speed"
    //% speed.min=30 speed.max=255 speed.defl=100
    //% weight=80
    export function figureS(speed: number): void {
        let innerWheel = Math.floor(speed * 0.4);
        mbit_robot.setMotor(speed, innerWheel)
        basic.pause(1200)
        mbit_robot.setMotor(innerWheel, speed)
        basic.pause(1200)
        mbit_robot.stopAllMotors()
    }

    /**
     * Pop a wheelie
     */
    //% block="pop a wheelie at speed %speed"
    //% speed.min=150 speed.max=255 speed.defl=255
    //% weight=70
    export function popWheelie(speed: number): void {
        mbit_robot.setMotor(-speed, -speed)
        basic.pause(150)
        mbit_robot.setMotor(speed, speed)
        basic.pause(400)
        mbit_robot.stopAllMotors()
    }

    /**
     * Flip the robot on its back
     */
    //% block="flip on back at speed %speed"
    //% speed.min=100 speed.max=255 speed.defl=200
    //% weight=60
    export function flipOnBack(speed: number): void {
        mbit_robot.setMotor(speed, speed)
        basic.pause(300)
        mbit_robot.setMotor(-speed, -speed)
        basic.pause(500)
        mbit_robot.stopAllMotors()
    }

    /**
     * Attempt to flip right side up
     */
    //% block="flip upright at speed %speed"
    //% speed.min=100 speed.max=255 speed.defl=200
    //% weight=50
    export function flipRightSideUp(speed: number): void {
        for (let i = 0; i < 3; i++) {
            mbit_robot.setMotor(speed, speed)
            basic.pause(100)
            mbit_robot.setMotor(-speed, -speed)
            basic.pause(100)
        }
        mbit_robot.stopAllMotors()
    }
}
