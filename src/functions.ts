import { log } from "console";

function hello(name: string) : string {
    return `Hello ${name!}`;
}

log(hello('john'));

async function fetchData() : Promise<number> {
    return 20;
} 

(async () => {
    let res = await fetchData();
    log(res);
})()

// contextual typing, anonymous functions
const strings : string[] = ["a", "b", "c"];
// no need for "s: string"
strings.forEach(s => log(s))