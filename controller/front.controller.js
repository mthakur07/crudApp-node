const crudmodel = require("../model/crud.model");

const home = async(req, res) => {
    const cruds = await crudmodel.find();
    // console.log(cruds)
    res.render('index',{
        cruds
    });
}

const create = (req, res) => {
    res.render('create');
}
const store = async (req, res) => {
    console.log(req.file);

//    await crudmodel.create({
//        name: req.body.name,
//        email: req.body.email,
//        contact: req.body.contact
//    })
//    res.redirect('/');
}

const edit = async(req, res) => {
  let data=  await crudmodel.findOne({_id: req.params.id});
  if(data) {
    res.render('edit',{
        data
    })
  } else {
    res.redirect('/');
  }
    //res.render('edit');
}
const update = async(req, res) => {

    await crudmodel.updateOne({_id: req.params.id},{
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact
    })
    res.redirect('/');
    //res.render(req.body);

}
const trash = async(req, res) => {
    await crudmodel.deleteOne({_id: req.params.id})
    res.redirect('/');
}

module.exports = {
    home,
    store,
    create,
    edit,
    update,
    trash
}
