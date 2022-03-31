const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const pt = require('./models1');
const cr = require('./models2');
const tr = require('./models3');

var app = express();

app.use(bodyparser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.post("/customsReg", async(req, res) => {
    const snd = new cr({
        username: req.body.username,
        dt: req.body.dt,
        tn: req.body.tn,
        igl: req.body.igl,
        phonenumber: req.body.phonenumber
    })
    try {
        const ssuc = await snd.save();
        console.log(ssuc);
        res.send(ssuc);
    } catch (error) {
        console.log(error)
    }
})


app.post("/tournamentReg", async(req, res) => {
    const snd = new tr({
        username: req.body.username,
        dt: req.body.dt,
        tn: req.body.tn,
        igl: req.body.igl,
        phonenumber: req.body.phonenumber
    })
    try {
        const ssuc = await snd.save();
        console.log(ssuc);
        res.send(ssuc);
    } catch (error) {
        console.log(error)
    }
})


app.post("/cnntform",async(req, res) => {
    const snd = new pt({
        username: req.body.username,
        PlayerID: req.body. PlayerID,
    })
    try {
        const ssuc = await snd.save();
        console.log(ssuc);
        res.send(ssuc);
    } catch (error) {
        console.log(error)
    }
})

mongoose.connect("mongodb://127.0.0.1/esports",).then(() => {
    console.log("connected to database")
}).catch((err) => {
    console.log(err)
});

app.listen(3000, () => {
    console.log("Connected to 3000")
})

