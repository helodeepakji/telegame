const express = require('express');
const path = require('path');
const route = express.Router();

route.get('/auth/:username/:id',(req,res) => {
    const username = req.params.username;
    const id = req.params.id;
    req.session.username = username;
    req.session.user_id = id;
    console.log(id);
    res.redirect('/home');
})

route.get('/home', (req, res) => {
    res.sendFile(path.join(process.cwd(),'build', 'index.html'));
});

route.get('/username', (req, res) => {
    if (req.session.username && req.session.user_id) {
        res.json({username : req.session.username , id : req.session.user_id});
    } else {
        res.send('No session data found');
    }
});

module.exports = route;