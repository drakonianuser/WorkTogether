"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor() {
    }
    index(req, res) {
        res.send('index');
    }
}
exports.indexcontroller = new IndexController();
