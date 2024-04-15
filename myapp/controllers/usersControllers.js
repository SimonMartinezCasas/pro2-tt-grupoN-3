const user = require ("../db/database")

const usersController = {
    login: function (req, res) {
        return res.render ("login" /* variable de db */)
    },
    profile: function (req, res) {
        return res.render ("profile", {data: user.usuario})
    },
    profileEdit: function (req, res) {
        return res.render ("profileEdit" /* variable de db */)
    },
    register: function (req, res) {
        return res.render("register" /* variable de db */)
    }
}

module.exports = usersController
