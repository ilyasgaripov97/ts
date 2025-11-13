import { log } from "console";

function f(parameter: string | number | boolean) {
    log(parameter);
}

f("abc");
f(123);
f(true);

function g(parameter: 
    | string
    | number 
    | boolean
) {
    log(parameter);
};

g("def")
f(456);
f(false);