const express = require('express');
const router = express.Router();

const home  = require('../controllers/home')
const img  = require('../controllers/imgFunct')

module.exports = app => {
    router.get('/', home.index);
    router.get('/images/:image_id', img.index);
    router.post('/images', img.create);
    router.post('/images/:image_id/like', img.like);
    router.post('/images/:image_id/comment', img.comments);
    router.delete('/images/:image_id', img.delete)
    
    app.use(router);
}