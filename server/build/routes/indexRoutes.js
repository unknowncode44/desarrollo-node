"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/usuarios', (req, res) => {
            res.send({
                ok: true,
                listaUsuario: '[lista, de, usuarios]'
            });
        });
        this.router.post('/usuario', (req, res) => {
            const { nombre, apellido, mail } = req.body;
            res.send({
                ok: true,
            });
        });
        this.router.put('/usuario/:id', (req, res) => {
            console.log(req.params);
            res.send({
                ok: true
            });
        });
    }
}
const indexRouter = new IndexRoutes();
exports.default = indexRouter.router;
