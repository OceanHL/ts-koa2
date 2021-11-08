"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
// @ts-ignore
var koa_views_1 = __importDefault(require("koa-views"));
var koa_json_1 = __importDefault(require("koa-json"));
// @ts-ignore
var koa_onerror_1 = __importDefault(require("koa-onerror"));
var koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
var koa_logger_1 = __importDefault(require("koa-logger"));
var index_1 = __importDefault(require("./routes/index"));
var users_1 = __importDefault(require("./routes/users"));
var app = new koa_1.default();
// error handler
(0, koa_onerror_1.default)(app);
// middlewares
app.use((0, koa_bodyparser_1.default)({
    enableTypes: ['json', 'form', 'text'],
}));
app.use((0, koa_json_1.default)());
app.use((0, koa_logger_1.default)());
app.use(require('koa-static')(__dirname + '/public'));
app.use((0, koa_views_1.default)(__dirname + '/views', {
    extension: 'pug',
}));
// logger
app.use(function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var start, ms;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                start = Date.now();
                return [4 /*yield*/, next()];
            case 1:
                _a.sent();
                ms = Date.now() - start;
                console.log(ctx.method + " " + ctx.url + " - " + ms + "ms");
                return [2 /*return*/];
        }
    });
}); });
// routes
app.use(index_1.default.routes()).use(index_1.default.allowedMethods());
app.use(users_1.default.routes()).use(users_1.default.allowedMethods());
// error-handling
app.on('error', function (err, ctx) {
    console.error('server error', err, ctx);
});
exports.default = app;
