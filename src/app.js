import express from 'express'
import userRoutes from "./routes/user.routes.js"
import errorHandler from "./middlewares/error.middleware.js"
import pool from "./config/db.js"

(async () => {
    try{
        const connection = await pool.getConnection();
        console.log("database connected")
        connection.release();
    }catch(error){
    console.log("database connection failed: ", error.message)
}
})()


const app = express();
app.use(express.json());

app.use('/api/users', userRoutes)

//error handler using
app.use(errorHandler)

export default app;