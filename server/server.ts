import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import authRouter from "./routes/authRoutes.js";
import productRouter from "./routes/productRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";
import addressRouter from "./dist/routes/addressRoutes.js";
import adminRouter from "./dist/routes/adminRoutes.js";
import deliveryPartnerRouter from "./dist/routes/deliveryPartnerRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Live!");
});

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/orders", orderRouter);
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/addresses", addressRouter)
app.use("/api/admin", adminRouter)
app.use("/api/delivery", deliveryPartnerRouter)
console.log("INNGEST_SIGNING_KEY:", !!process.env.INNGEST_SIGNING_KEY);
console.log("INNGEST_EVENT_KEY:", !!process.env.INNGEST_EVENT_KEY);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});

export default app;