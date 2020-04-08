const DIRECTION_UP = 'up';
const DIRECTION_DOWN = 'down';
const DIRECTION_RIGHT = 'right';
const DIRECTION_LEFT = 'left';

const snake = {
    x: 0,
    y: 0,
    direction: 'up'
};

document.addEventListener('onkeydown', function(e) {
    if (e.code === 'ArrowUp') {
        snake.direction = 'up';
    }

    if (e.code === 'ArrowDown') {
        snake.direction = 'down';
    }

    if (e.code === 'ArrowRight') {
        snake.direction = 'right';
    }

    if (e.code === 'ArrowLeft') {
        snake.direction = 'left';
    }
});

function moveSnake () {
    if (snake.direction === 'up') {
        snake.y -= 1
    }
    
    if (snake.direction === 'down') {
        snake.y += 1
    }

    if (snake.direction === 'right') {
        snake.x += 1
    }

    if (snake.direction === 'left') {
        snake.x -= 1
    }
}

function canSnakeMoveInDirection(currentDirection, newDirection) {
    if (currentDirection === newDirection) {
        return true;
    }

    if (currentDirection === 'up' && newDirection === 'down') {
        return false;
    }

    if (currentDirection === 'down' && newDirection === 'up') {
        return false;
    }

    if (currentDirection === 'left' && newDirection === 'right') {
        return false;
    }

    if (currentDirection === 'right' && newDirection === 'left') {
        return false;
    }

    return true;
}