import "./env.js" 
import { app } from "./app.js";
import connectDB from "./db/db.js";

    
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server is running on port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Error while connecting MONGODB", err);
})