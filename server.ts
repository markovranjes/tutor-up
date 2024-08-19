import express from "express";
import cors from "cors";
import { config } from "dotenv";
import facultiesRouter from "./routes/faculty";
import universitiesRouter from "./routes/university";
import offersRouter from "./routes/offer";
import programsRouter from "./routes/program";
import requestsRouter from "./routes/request";
import studentsRouter from "./routes/student";
import subjectsRouter from "./routes/subject";
import tutorsRouter from "./routes/tutor";
import loginRouter from "./routes/login";

config();

const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/faculties", facultiesRouter);
app.use("/universities", universitiesRouter);
app.use("/offers", offersRouter);
app.use("/programs", programsRouter);
app.use("/requests", requestsRouter);
app.use("/students", studentsRouter);
app.use("/subjects", subjectsRouter);
app.use("/tutors", tutorsRouter);
app.use("/login", loginRouter);

app.listen(port, () => {
  console.log(`Tutor app listening on port ${port}`);
});
