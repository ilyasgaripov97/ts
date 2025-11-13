import { log } from "console";

function move(direction: {a: number, b: number}, speed: number) {
    log('direction:', direction);
    log('speed:', speed);
}

move({ a: 1, b: 2}, 5);

function take(obj: {required: number, opt?: string}) {
    // if (obj.opt.toLocaleLowerCase()) { } // error: opt is possibly undefined
    log(obj.required, obj.opt?.toLocaleLowerCase())
}

take({ required: 5 });
take({ required: 5, opt: 'foo' });