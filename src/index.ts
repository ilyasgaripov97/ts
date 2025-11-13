import { log } from "node:console";

function sum(a: number, b: number): string {
    return `${a} ${b}`;
}

log(sum(1, 2));