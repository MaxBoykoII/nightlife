var _ = require('lodash');

var userController = function() {
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
    var put = (req, res) => {
        /* Route for adding a bar to a user's visited locations */

        if (req.user) {
            console.log(req.body);
            res.json(req.user);
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