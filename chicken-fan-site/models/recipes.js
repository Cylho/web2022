const mongoose = require('mongoose');

const recipesSchema = new mongoose.Schema({
    name: String,
    dob: String,
    imageurl: String,
    imageur2: String,
    hobbies: [String]
})

const recipes = mongoose.model('recipes', recipesSchema)


readrecipes = async (options = {}) => {
    if (Object.entries(options).length == 0)
        return recipes.find().lean();

    else if (options.name)

        return recipes.findOne(options).lean();

    else
        return undefined;

}

createrecipes = async (data) => {
    let recipesDoc = new recipes(data);
    await recipesDoc.save();
}


deleterecipes = async (name) => {
    const recipes = await recipes.findOne({ name: name });
    await recipes.remove();
}

updaterecipes = async (data) => {
    var id = data._id;
    console.log(id);
    console.table(data)
    await recipes.findByIdAndUpdate({_id: id}, {...data})
}


exports.readrecipes = readrecipes;
exports.createrecipes = createrecipes;
exports.deleterecipes = deleterecipes;
exports.updaterecipes = updaterecipes;