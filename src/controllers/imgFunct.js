const path = require('path')
const helpers = require('../helpers/libs')
const fs = require('fs-extra')
const { Image } = require('../models')

const ctrl = {};

ctrl.index = (req, res) => {

};

ctrl.create = (req, res) => {
   
    const saveImage = async () => {
        const imgUrl = helpers.randomName()
        const images = await Image.find({filename: imgUrl})
        if(images.length > 0) {
            saveImage();
        } else {
    

        const imagePath = req.file.path
        const ext = path.extname(req.file.originalname).toLowerCase();
        const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`) 
        // If statment para cambiar el lugar donde se almacenan las imagenes
       if (ext === '.png' || ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
       await fs.rename(imagePath, targetPath);
        // Almacenar las imagenes en la DB
      const newImg = new Image({
           title: req.body.title,
           filename: imgUrl + ext,
           description: req.body.description
       })
      const imageSaved = await newImg.save();
      res.send('it works')
    } else {
        await fs.unlink(imagePath);
        res.status(500).json({error: 'Only images or gifs are allowed...'})
    }
    
    };

}
saveImage();
};

ctrl.like = (req, res) => {
    
};

ctrl.comments = (req, res) => {

};

ctrl.delete = (req, res) => {
    
}

module.exports = ctrl;