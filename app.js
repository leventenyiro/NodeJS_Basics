var Joi = require("joi")
var arrayString = ["banana", "bacon", "cheese"]
var arrayObjects = [{example: "example1"}, {example: "example2"}]

var userInput = { personalInfo: {
                    streetAddress: "12312",
                    city: "fdsf",
                    state: "af"
                },
                preferences : arrayObjects};
                //preferences : arrayString};

var personalInfoSchema = Joi.object().keys({
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state: Joi.string().trim().length(2).required()
})

var preferencesSchema = Joi.array().items(Joi.object().keys({
    example: Joi.string().required()
}))

//var preferencesSchema = Joi.array().items(Joi.string())

var schema = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
})

Joi.validate(userInput, schema, (err, result) => {
    if (err) throw err
    else console.log(result)
})