const {Router} = require('express');
const {ArticlesController} = require('../controllers/articlesController')
const articlesRouter = Router();

articlesRouter.get('/', ArticlesController.getItems);
articlesRouter.post('/', ArticlesController.createItem);
articlesRouter.get('/:id', ArticlesController.getItem);

module.exports = {articlesRouter}
