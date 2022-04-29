const express = require('express');
const { readrecipes , createrecipes, deleterecipes, updaterecipes } = require('../models/recipes');
const router = express.Router();


router.get('/addnew', async (req, res) => {
    res.render('recipesform')
})


router.get('/:name', async (req, res) => {
    var name = req.params.name;
    const person = await readrecipes({'name': name})

    if (!person) {
        console.log('404 because person doesn\'t exist');
        res.render('404');
    }
    else {
        res.render('person', { person: person });
    }
})

// no error checking for now.
//
router.get('/:name/delete', async (req, res) => {
    var name = req.params.name;

    await deleterecipes(name);

    req.session.flash =    
    { type: 'success', intro: 'Data Deleted:', message:  "Data for <strong>" +
     name + "</strong> has been updated"};
    

    res.redirect(303, '/recipes');

});



// to edit we first need to fetch the data so we can display in on
// a form to be edited

router.get('/:name/edit', async (req, res) => {

    var name = req.params.name;

    const person = await readrecipes({'name': name})

    if (!person) {
        console.log('404 because person doesn\'t exist');
        res.render('404');
    }
    else {
        res.render('recipeseditform', { person: person });
    }
})

router.post('/:name/edit', async (req,res) =>{

    await updaterecipes(req.body);

    req.session.flash =    
    { type: 'success', intro: 'Data Updated:', message:  "Data for <strong>" +
     req.body.name+ "</strong> has been updated"};
    
    res.redirect(303, '/recipes')

})

router.post('/addnew', async (req, res) => {
    // note we leave error handling for now and assume our data is created.
    
        await createrecipes(req.body);
        req.session.flash =    
        { type: 'success', intro: 'Data Saved:', message:  "Data for <strong>" +
         req.body.name+ "</strong> has been added"};
        res.redirect(303, '/recipes')
    })

router.get('/', async (req, res) =>
{
    const recipes = await readrecipes();
    if (req.session.recipesdata){
        var newName = req.session.recipesdata.name;
    }
    else {
        var newName = ""
    }
    res.render('recipes', { recipes: recipes, newName : newName })    
})

module.exports = router;