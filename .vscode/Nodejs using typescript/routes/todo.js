"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get('/', (_req, _res, _next) => {
    _res.status(200).json.responce({ todos: todos });
});
router.post('/todos', (_req, _res, _next) => {
    const newtodos = {
        id: new Date().toISOString(),
        text: _req.body.text
    };
    _res.status(201).json.responce({ todos: todos });
});
exports.default = router;
