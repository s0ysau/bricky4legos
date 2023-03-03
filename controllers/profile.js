const Profile = require('../models/profile')

const dataCtrl = {
  index(req, res, next){
    Profile.find({}, (err, foundProfiles) => {
      if (err){
        res.status(400).send({
        msg: err.message
        })
      } else {
        res.locals.data.profile = foundProfiles
        next()
      }
    })
  },
  update(req, res, next){
    Profile.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateProfile) => {
      if(err) {
        res.status(400).send({
        msg: err.message
        })
      } else {
        res.locals.data.profile = updateProfile
        next()
      }
    })
  },
  create(req, res, next) {
    Profile.create(req.body, (err, createProfile) => {
      if (err) {
        res.status(400).send({
        msg: err.message
        })
      } else {
        res.locals.data.profile = createProfile
        next()
      }
    })
  },
  delete(req, res, next) {
    Profile.findByIdAndDelete(req.params.id, (err, deleteProfile) => {
      if(err) {
        res.status(400).send({
        msg: err.message
        }) 
      } else {
        res.locals.data.profile = deleteProfile
        next()
      }
    })
  },
  show(req, res, next) {
    Profile.findById(req.params.id, (err, foundProfile) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find profile'
        })
      } else {
        res.locals.data.profile = foundProfile
        next()
      }
    })
  }
}

const apiCtrl = {
  index (req, res, next) {
    res.json(res.locals.data.profiles)
  },
  show (req, res, next){
    res.json(res.locals.data.profile)
  }
}

module.exports = { dataCtrl, apiCtrl }