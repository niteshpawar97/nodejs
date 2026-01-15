import "dotenv/config"
import app from "./app.js"
import sequelize from "./config/sequelize.js"

const PORT = process.env.PORT || 3000

(async () => {
    try{
        await sequelize.authenticate();
        console.log("sequelize DB connected")

    }catch(error){
        console.log("sequelize DB failed: ", error.message);
    }
})();

await sequelize.sync();
console.log("Models synced");


//server start krne ke liye hai ye 
app.listen(3000, () => {
    console.log(`server running up in http://localhost:${PORT}`)
})