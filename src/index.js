//import { nanoid } from "nanoid";
//const id = nanoid(5);
//console.log(id);

import { customAlphabet } from "nanoid";
const alphabet = 'abc123';
const customNanoid = customAlphabet(alphabet, 10);

const id = customNanoid()
console.log(id);