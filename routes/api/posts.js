const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
const multer  = require('multer')
const upload = multer();
router.post('/', upload.single('photo'), postsCtrl.create);
router.get('/', postsCtrl.index)
<<<<<<< HEAD
=======
router.delete('/:id', postsCtrl.remove)
>>>>>>> working

module.exports = router;