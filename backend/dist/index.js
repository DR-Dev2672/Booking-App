"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const user_Route_1 = __importDefault(require("./routes/user.Route"));
const auth_Route_1 = __importDefault(require("./routes/auth.Route"));
const app = (0, express_1.default)();
const PORT = 8000;
mongoose_1.default.connect(process.env.MONGODB_CONNECTION_STRING);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/api/auth", auth_Route_1.default);
app.use("/api/users", user_Route_1.default);
app.get("/api/test", (req, res) => {
    res.json({ message: "hello from express endpoint" });
    // res.send("hii from server");
});
app.listen(PORT, () => {
    console.log(`server is running at PORT:${PORT}`);
});
