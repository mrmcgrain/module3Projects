const Controller = require("../controllers/poke.controller");

module.exports = app => {
    app.get('/api/all', Controller.getPoke);
    app.get("/api/:_id", Controller.getPoke) 
    app.post('/api/create', Controller.addPoke);
    app.put('/api/:_id', Controller.deletePoke);
}




// module.exports = app => {
//     app.get('/api/all', Controller.getTimers);
//     app.get("/api/:_id", Controller.findTimer)
//     app.post('/api/create', Controller.createTimer);
//     app.put('/api/:_id', Controller.updateTimer);
//     app.put('/delete', Controller.deleteTimer);
// }