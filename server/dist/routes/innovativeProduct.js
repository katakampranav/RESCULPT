"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const innovativeProducts_1 = require("../controllers/innovativeProducts");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const innovativeProductRoutes = (0, express_1.Router)();
innovativeProductRoutes.post('/addInnovativeProd', authMiddleware_1.authMiddleware, innovativeProducts_1.addInnovativeProd);
innovativeProductRoutes.get('/getAllInnovativeProds', authMiddleware_1.authMiddleware, innovativeProducts_1.getAllInnovativeProds);
innovativeProductRoutes.get('/product/:id', authMiddleware_1.authMiddleware, innovativeProducts_1.innovativeProd);
exports.default = innovativeProductRoutes;
