import React, { useState, useRef, useEffect } from 'react';
import {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    DIRECTIONS,
    SPEED
} from '../utils/snake/constants'
import HeaderSetup from '../comps/HeadSetup'
import { useInterval } from '../utils/snake/useInterval';

const tdClasses = "p-4 border border-dark bg-success text-light text-center"

function Snake(props) {

    const canvasRef = useRef(null);
    const [snake, setSnake] = useState(SNAKE_START)
    const [apple, setApple] = useState(APPLE_START)
    const [gameOver, setGameOver] = useState(false)
    const [dir, setDir] = useState([0, -1])
    const [speed, setSpeed] = useState(null)
    const [score, setScore] = useState(0)

    const startGame = () => {
        setSnake(SNAKE_START);
        setApple(APPLE_START)
        setDir([0, -1])
        setSpeed(SPEED)
        setGameOver(false)
        setScore(0)

    }
    const endGame = () => {
        setSpeed(null)
        setGameOver(true)
    }
    const moveSnake = ({ keyCode }) => {
        if (keyCode >= 37 && keyCode <= 40) {
            if (JSON.stringify([dir[0] + DIRECTIONS[keyCode][0], dir[1] + DIRECTIONS[keyCode][1]]) != JSON.stringify([0, 0]))
                setDir(DIRECTIONS[keyCode])
        }
    }

    const checkCollision = (piece, snk = snake) => {
        if (piece[0] * SCALE >= CANVAS_SIZE[0] || piece[0] < 0 ||
            piece[1] * SCALE >= CANVAS_SIZE[1] || piece[1] < 0) {
            return true;
        }
        for (const segment of snk) {
            if (piece[0] === segment[0] && piece[1] === segment[1]) {
                return true;
            }
        }
        return false;
    }

    const createApple = () => {
        return apple.map((_, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] - 0.5) / SCALE))
    }

    const checkAppleCollision = (newSnake) => {
        if (newSnake[0][0] == apple[0] && newSnake[0][1] == apple[1]) {
            let newApple = createApple()
            while (checkCollision(newApple, newSnake)) {
                newApple = createApple();
            }
            setApple(newApple);
            setScore(Math.floor(score + ((SPEED / speed) * 100)))
            setSpeed((speed - 100) <= 0 ? speed : speed - 100)
            return true;
        }
        return false;
    }

    const gameLoop = () => {
        const snakeCopy = JSON.parse(JSON.stringify(snake))
        const newSnakHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]]
        snakeCopy.unshift(newSnakHead);
        if (checkCollision(newSnakHead)) endGame();
        if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
        setSnake(snakeCopy);
    }

    useEffect(() => {
        const context = canvasRef.current.getContext("2d")
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
        context.fillStyle = "lightgreen";
        snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
        context.fillStyle = 'darkgreen';
        context.fillRect(apple[0], apple[1], 1, 1);
    }, [snake, apple, gameOver]);

    useInterval(() => gameLoop(), speed);

    return (
        <div>
            <HeaderSetup title={"Snake"} header={"SNAKE"} />
            <div className='text-center'>
                {gameOver && <h3>Game Over!!</h3>}
                <div className='m-3'>Score: {score}</div>
                <div role="button" tabIndex={0} onKeyDown={e => moveSnake(e)}>
                    <canvas style={{ border: "2px solid black" }}
                        ref={canvasRef}
                        width={`${CANVAS_SIZE[0]}px`}
                        height={`${CANVAS_SIZE[1]}px`} />
                    <br />
                    <button className='btn btn-primary m-3' onClick={startGame}>Start Game</button>
                    <br />
                    <center>
                    <table>
                        <tbody>
                        <tr>
                            <td className={tdClasses} rowSpan={2} onClick={() => moveSnake({keyCode: 37})}>LEFT</td>
                            <td className={tdClasses} colSpan={2} onClick={() => moveSnake({keyCode: 38})}>UP</td>
                            <td className={tdClasses} rowSpan={2} onClick={() => moveSnake({keyCode: 39})}>RIGHT</td>
                        </tr>
                        <tr>
                            <td className={tdClasses} colSpan={2} onClick={() => moveSnake({keyCode: 40})}>DOWN</td>
                        </tr>
                        </tbody>
                    </table>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default Snake;