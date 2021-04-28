const router = require('express').Router();

const userRouter = require('./Routes/userRouter');
// const storeRouter = require('./Routes/storeRouter');
// const kitchenRouter = require('./Routes/kitchenRouter');

router.use('/user', userRouter);

module.exports = router;