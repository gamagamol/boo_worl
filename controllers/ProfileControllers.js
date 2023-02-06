const db = require('../utils/db')
const collection = 'user'
const { body, validationResult } = require('express-validator');

const index = async (req, res) => {

    let id = parseInt(req.params.id)
    const profile = await db.collection(collection).find({id:id}).toArray()
    res.render('profile_template', {
      profile: profile[0],
    });  
}

const insert = async(req, res) => {

    let profile = req.body
    const errors = validationResult(req);
    console.log(errors);
    if (profile == null) {
        res.status(201).json({
        'message':'Failed'
         });
    } else {
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        else {
                maxId = await db.collection(collection).find().sort({ id: -1 }).limit(1).toArray()
                maxId = maxId[0].id
                profile.id = maxId + 1

                db.collection('user').insertOne(profile)
                console.log(req.body);


                res.status(201).json({
                    'message':'Success'
                });
            
            }

    }

    
}

module.exports = {
    index: index,
    insert:insert
}