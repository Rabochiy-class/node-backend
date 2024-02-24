import express from "express"
import authRouter from "./routes/auth.routes.js"
import donationRouter from "./routes/donation.routes.js"
import donationPlanRouter from "./routes/donationPlan.routes.js"
import infoRouter from "./routes/info.routes.js"


const PORT = 5000
const app = express()
app.use( express.json() )
app.use( '/', authRouter )
app.use( '/', donationRouter )
app.use( '/', donationPlanRouter )
app.use( '/', infoRouter)
app.listen( PORT, () => console.log( 'Server Started' ) )
