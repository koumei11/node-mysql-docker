const router = require('express').Router();
const handleRequest = require('../controllers/handleRequest');

router.get('/', (req, res) => {
  handleRequest(req, res);
});

module.exports = router;