import crypto from 'crypto';

const Key1 = crypto.randomBytes(32).toString("hex");
console.log(Key1);