"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_router_1 = __importDefault(require("koa-router"));
var router = new koa_router_1.default();
router.prefix('/users');
router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!';
});
router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response';
});
exports.default = router;
