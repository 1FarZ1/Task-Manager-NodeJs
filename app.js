const express = require('express');
const Tasksrouter = require('./routes/tasks');
const { default: connectDb } = require('./mongoDb');

const app = express();
const port = 3000;

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/v1/tasks",Tasksrouter);









let main = async ()=>{  
try {
    await connectDb();
    app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
    }
);
} catch (error) {
    
}
}
