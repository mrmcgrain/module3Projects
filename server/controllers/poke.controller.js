const Pokemon = require("../models/poke.model");

module.exports = {


    getPoke: (req, res) => {
        console.log('get route')
        Pokemon.find()
            .then(data => res.json({
                results: data
            }))
            .catch(err => res.json('Error: ' + err))
    },

    addPoke: (req, res) => {
        console.log('response route', req.body)
        Pokemon.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json('Error: ' + err))
    },

  
    deletePoke: (req , res ) => {
            console.log('delete route', req.body)
            Pokemon.findByIdAndRemove(req.body._id, {useFindAndModify: false})
                .then(result => res.json(result))
                .catch(err => console.log(err))
        }

    // getTimers: ( req, res ) => {
    //     Timers.find()
    //         .then(data => res.json({ 
    //             results: data }))
    //         .catch(err => res.json('Error: ' + err))
    // },

    // findTimer: (req, res) => {
    //     Timers.findById({ _id: req.params._id })
    //         .then(timer => res.json( timer ))
    //         .catch(err => res.json( err ))
    // },

    // createTimer: ( req, res ) => {
    //     console.log('response route', req.body)
    //     Timers.create( req.body )
    //         .then(data => res.json( data ))
    //         .catch(err => res.json('Error: ' + err))
    // },

    // updateTimer: ( req, res ) => {
    //     console.log('update route', req.params)
    //     console.log('body', req.body)
    //     Timers.findOneAndUpdate({_id: req.params._id}, req.body, { new: true} )
    //         .then(data => res.json(data))
    //         .catch(err => res.json('Error: ' + err))
    // },

    // deleteTimer: (req , res ) => {
    //     console.log('delete route', req.body)
    //     Timers.findByIdAndRemove({_id: req.body._id})
    //         .then(result => res.json(result))
    //         .catch(err => console.log(err))
    // }
}