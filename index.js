import express from "express";
import authRouter from "./routes/auth.routes.js";
import donationRouter from "./routes/donation.routes.js";
import donationPlanRouter from "./routes/donationPlan.routes.js";
import infoRouter from "./routes/info.routes.js";
import cors from 'cors'

const PORT = 5000;
const app = express();

const corsConfig = {
  origin: true, // Рефлектить запросивший домен в Access-Control-Allow-Origin
  credentials: true, // Позволить отправку креденшалов (куки, HTTP аутентификация)
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'] // Разрешить все методы
}
const corsMiddleware = cors( corsConfig )
app.use( corsMiddleware )

app.use(express.json());


app.use('/', authRouter);
app.use('/', donationRouter);
app.use('/', donationPlanRouter);
app.use('/', infoRouter);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
