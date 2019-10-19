const express = require('express');
const SessionController = require('./controllers/SessionController');
const MissionController = require('./controllers/MissionController');
const multer = require('multer')
const uploadConfig = require('./config/upload')


const routes = express.Router();
const upload = multer(uploadConfig);


routes.post('/sessions', SessionController.store);
routes.post('/missions',upload.single('picture'), MissionController.store);



module.exports = routes;