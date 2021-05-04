const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'secretword';

/* This function is to verify the token of the user
when rendering the future appointments or deleten them */

const auth =  async (req, res, next) => {
    try{
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1];
        const payload = jwt.verify(token,secret)
        if(!req.params.id){
            next();
        }else if(req.params.id == payload.userId){

        }else {
            throw new Error('Cannot be verified')
        }
    }catch(err){
        res.status(500)
        .json({
            message: err.message
        })
    }
}

module.exports = auth;