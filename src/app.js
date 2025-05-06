import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";

const app = express();

app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
	})
);

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

export { app };
