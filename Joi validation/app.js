const express = require("express");
const { number, string } = require("joi");
// const Joi = require("joi");
const app = express();
const Joi = require('joi');

app.use(express.json());

const validationMiddleware = (req, res, next)=>{
    // -----------------unknown false means exact two key is required for validation and unknown true means we can declared more then 2 keys in req.body
    // -----------------.optional means we write key on body then it will check otherwise it will not check it will egnore that things
    //------------------.valid('option one', 'option 2', 'option 3') if we give another value which is not 
    //-------------------min() max()
    //-------------------when 
    //-------------------object
    //-------------------array
    //-------------------regex expression names: Joi.string().pattern(new Regexp('your expression'))
    //-------------------ref
    //-------------------limit
    //-------------------email
    //-------------------xor
    //-------------------costum
    const schema = Joi.object().keys({
        name: Joi.string().min(5).required(),
        password: Joi.string().min(6).required(),
        search: Joi.string().optional(),
        category: Joi.string().valid('bike', 'car', 'truck'),
        amount: Joi.number().integer().min(1).max(20),
        age: Joi.number().integer().when('name', {is: 'test', then:Joi.required(), otherwise:Joi.optional()}),
        item: Joi.object().keys({
            id: Joi.string().required(),
            name: Joi.string().optional()
        }).unknown(false),
        items: Joi.array().items(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
        limit : Joi.required(),
        number: Joi.array().min(Joi.ref("limit")).required(),
        email: Joi.string().email({
            minDomainSegments: 2, 
            tlds: {allow: ["com","in"] },
        }),



    }).unknown(false);
    // const {error} = schema.validate(req.body); == > send perticular error on body
    const {error} = schema.validate(req.body,{abortEarly:false});
    if(error) {
        res.status(400).json({Errors: error});
    } else {
        next();
    }
}

app.post('/check', validationMiddleware, async (req, res)=> {
    res.status(201).json(req.body);
})

app.listen(4040);