var _ = require('lodash');
var User = require('../../models/user');

var userController = () => {
    /* Route for verifying whether user is authenticated */
    var get = (req, res) => {
        if (req.user) {
            res.json(_.assign(req.user, {
                authenticated: true
            }));
        }
        else {
            res.json({
                authenticated: false
            });
        }
    };

    /* Route for adding a bar to a user's visited locations */
    var put = (req, res) => {
        if (req.user) {
            var userId = req.body.userId;
            var barId = req.body.barId;
            console.log(barId);
            User.findById(userId, (err, user) => {
                if (err) {
                    res.status(401).send({
                        error: 'Please login!'
                    });
                }
                console.log('before update', user.visited);
                _.indexOf(user.visited, barId) === -1 ? user.visited.push(barId) : _.remove(user.visited, id => id === barId);
                console.log('after update', user.visited);
                User.update({_id: userId}, {visited: user.visited}, (err, raw) => {
                    if (err) {
                        console.log(err);
                    }
                    req.user.visited = user.visited;
                    res.json(user);
                });
             
            });
        }
        else {
            res.status(401).send({
                error: 'Please login!'
            });
        }
    };


    return {
        get: get,
        put: put
    };

};


module.exports = userController();