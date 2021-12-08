//import du package jsonwebtoken
const jwt = require('jsonwebtoken');

// export du middleware
module.exports = (req, res, next) => {
    try{
        // récupération du token dans lee header
        const token = req.headers.authorization.split(' ')[1];
        // décodage du token, la clef devient un objet JS
        const decodedToken= jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        // récupération de l'userId
        const userId = decodedToken.userId;
        // si on a un user id dans le body de la requête et qu'il est différent de l'user id du token
        if ( req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            console.log('token correct')
            next();
        }
    }
    catch(error){
        res.status(401).json({error: new Error ('Invalid request') });
    }
};