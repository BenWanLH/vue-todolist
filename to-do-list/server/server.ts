const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 4040;
var dbSource = require("./database/database.ts");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/getAllTask",(req,res)=>{
    let sql = "select * from tasks";
    dbSource.all(sql,[], (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

app.post("/api/addTask", (req,res)=>{
    if(req.body.task){
        let sql = 'INSERT INTO tasks (task,checked) VALUES (?,?)';
        dbSource.run(sql,[req.body.task,req.body.checked || false],function (err, result){
            if(err){
                res.status(400).json({"error":err.message});
            }
            res.json({
                "message":"success",
                "id":this.lastID
            })
        })
    }
});
app.delete("/api/removeTask/:id", (req,res)=>{
    if(req.params.id){
        let sql = 'DELETE FROM tasks WHERE id = ?';
        dbSource.run(sql,req.params.id,(err, result)=>{
            if(err){
                res.status(400).json({"error":err.message});
            }
            res.json({
                "message":"success"
            })
        })
    }
});
app.listen(port, ()=>{
    console.log(`app listening at ${port}`);
})
