// declare types in parameters as param: type
function addNumbers(a: number, b: number) {
    return a + b;
}

export default addNumbers;

// can also declare return type after params
export const addStrings = (s1: string, s2: string): string => {
    return `${s1} ${s2}`;
}

// | is a union type that works like OR, so param can take string or number type
export const format = (title: string, param: string | number): string => {
    return `${title} ${param}`;
}

// void is a function that doesn't return anything
export const printFormat = (title: string, param: string | number): void => {
    console.log(title, param)
}

// promise that takes string as input
export const fetchData = (url: string): Promise<string> => {
    return Promise.resolve(`data from ${url}`);
}

// take multiple string arguments and join on an array
export const introduce = (salutation: string, ...names:string[]): string => {
    return `${salutation} ${names.join(' ')}`;
}

// TYPESCRIPT ONLY FORCES TYPES AT COMPILE TIME
// using a ? can allow the param to be undefined
// then use ?? after the parameter to set a default value if it is undefined
 export const getName = (user: {first: string, last: string}): string => {
    return `${user?.first ?? "first"} ${user?.last ?? "last"}`
 }