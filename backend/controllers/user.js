/* CONTROLLERS UTILISATEURS */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// Regex
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,20}/;


// créer un nouvel utilisateur
exports.signup = (req, res, next) => {
    const email    = req.body.email;
    const password = req.body.password;

    // vérifie que tous les champs sont complétés
    if(email == null || email == '' || password == null || password == '') {
        return res.status(400).json({ error: 'Tous les champs doivent être complétés' });
    }

    // contrôle la validité de l'adresse mail
    if(!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Adresse mail invalide' });
    }

    // contrôle la validité du mot de passe
    if(!passwordRegex.test(password)) {
        return res.status(400).json({ error: 'Le mot de passe doit contenir au moins 8 caractères dont une lettre majuscule, une lettre minusucle, un chiffre et un symbole' });
    }

    // vérifie que l'utilisateur que l'on souhaite créer n'existe pas
    db.User.findOne({
        attributes: ['email'],
        where: { 
            email: email
        }
    })
    .then(userExist => {
        if(!userExist) {
            bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const user = db.User.build({
                    email: req.body.email,
                    password: hash,
                    isAdmin: 0
                });
                user.save()
                    .then(() => res.status(201).json({ message: 'Votre compte a bien été créé !' }))
                    .catch(error => res.status(400).json({ error: 'Une erreur s\'est produite !' }));
            })
            .catch(error => res.status(500).json({ error: 'Une erreur s\'est produite lors de la création de votre compte' }));
        } else {
            return res.status(404).json({ error: 'Cet utilisateur existe déjà' })
        }
    })
    .catch(error => res.status(500).json({ error: 'Une erreur s\'est produite !' }));
};


// se connecter
exports.login = (req, res, next) => {
    db.User.findOne({
        where: { email: req.body.email }
    })
    .then(user => {
        if(user) {
            bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if(!valid) {
                    return res.status(401).json({ error: 'Mot de passe incorrect' });
                }
                res.status(200).json({
                    userId: user.id,
                    isAdmin: user.isAdmin,
                    username: user.username,
                    imageProfile: user.imageProfile,
                    token: jwt.sign(
                        {userId: user.id},
                        process.env.JWT_SECRET_TOKEN,
                        {expiresIn: '24h'}
                    )
                });
            })
            .catch(error => res.status(500).json({ error: 'Une erreur s\'est produite !' }));
        } else {
            return res.status(404).json({ error: 'Cet utilisateur n\'existe pas, veuillez créer un compte' })
        }
    })
    .catch(error => res.status(500).json({ error: 'Une erreur s\'est produite !' }));
}


// accéder à son profil
exports.getUserProfile = (req, res, next) => {
    const id = req.params.id;
    db.User.findOne({
        attributes: [ 'id', 'username', 'email', 'isAdmin', 'imageProfile' ],
        where: { id: id }
    })
    .then(user => {
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'Utilisateur non trouvé' })
        }
    })
    .catch(error => res.status(404).json({ error: 'Une erreur s\'est produite !' }));
}


// modifier son profil
exports.modifyUserProfile = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    const userId = decodedToken.userId;

    req.body.user = userId
    
    
    console.log('bodyUser', req.body.user);
    const userObject = req.file ?
    {
    ...JSON.parse(req.body.user),
    imageProfile: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    
    db.User.findOne({
        where: { id: userId },
    })
    .then(userFound => {
        if(userFound) {
            db.User.update(userObject, {
                where: { id: userId}
            })
            .then(user => res.status(200).json({ message: 'Votre profil a bien été modifié !' }))
            .catch(error => res.status(400).json({ error: 'Une erreur s\'est produite !' }))
        }
        else {
            res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
    })
    .catch(error => res.status(500).json({ error: 'Une erreur s\'est produite !' }));
}


// supprimer son profil
exports.deleteAccount = (req, res, next) => {
    const id = req.params.id;
    db.User.findOne({
        attributes: ['id'],
        where: { id: id }
    })
    .then(user => {
        if(user) {
            db.User.destroy({ 
                where: { id: id } 
            })
            .then(() => res.status(200).json({ message: 'Votre compte a été supprimé' }))
            .catch(() => res.status(500).json({ error: 'Une erreur s\'est produite !' }));
            
        } else {
            return res.status(404).json({ error: 'Utilisateur non trouvé' })
        }
    })
    .catch(error => res.status(500).json({ error: 'Une erreur s\'est produite !' }));
}