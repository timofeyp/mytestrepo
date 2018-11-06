/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  'new': function (req, res) {
    console.log(req.session)
    res.send(req.session)
  },
  'post': function (req, res) {
    console.log(req.session)
  },

};

