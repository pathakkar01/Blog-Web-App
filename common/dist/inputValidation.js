"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bolgInput = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    name: zod_1.z.string().optional(),
});
exports.bolgInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    authorId: zod_1.z.string(),
});
