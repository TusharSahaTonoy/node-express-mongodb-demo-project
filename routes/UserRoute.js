
const router = require('express').Router();

const UserController = require('../controller/UserController');

router.use((req, res, next)=>{
    console.log(Date.now());
    next();
});

router.get('/', UserController.index);
router.get('/add/:name', UserController.home);
// router.get('/', (req, res)=>{
//     res.send('Heomks');
// });

module.exports = router;