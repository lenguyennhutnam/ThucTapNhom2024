"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tinymce_1 = __importDefault(require("tinymce"));
tinymce_1.default.init({
    selector: "textarea[textarea-mce]",
    plugins: "lists link image table code help wordcount",
});
