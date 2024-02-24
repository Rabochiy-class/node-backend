import express from "express"
import authRouter from "./routes/auth.routes.js"
import donationRouter from "./routes/donation.routes.js"


const PORT = 5000
const app = express()
app.use( express.json() )
app.use( '/', authRouter )
app.use( '/', donationRouter )
app.listen( PORT, () => console.log( 'Server Started' ) )
