import { log } from "console";

type Vector2D = {
    x: number;
    y: number;
}

function move(direction: Vector2D, speed: number) {
    log('direction:', direction);
    log('speed:', speed);
}

move({ x: 1, y: 1}, 2);

type SanitizedString = string

function sanitize(text: string): SanitizedString {
    return `sanitized "${text}"`;
}

log(sanitize('foobarbaz'))