"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatecompleted = exports.updatetaskInput = exports.createtaskInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInput = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.signinInput = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.createtaskInput = zod_1.default.object({
    title: zod_1.default.string(),
    description: zod_1.default.string()
});
exports.updatetaskInput = zod_1.default.object({
    title: zod_1.default.string(),
    description: zod_1.default.string(),
    id: zod_1.default.number()
});
exports.updatecompleted = zod_1.default.object({
    Completed: zod_1.default.boolean()
});
