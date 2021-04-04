const users = require('../controllers/users.server.controller');
const course = require('../controllers/courses.server.controller');
//
module.exports = function (app) {
        app.route('api/createcourse')
            .put(course.create)
            .post(users.requiresLogin,course.create);
        app.route('/api/getcourses/:userId')
            .get(course.getCourses)
            .put(users.requiresLogin, course.hasAuthorization, course.update)
            .delete(users.requiresLogin, course.hasAuthorization, course.delete);
        app.route('/api/allcourses')
            .get(course.listAll)
            .put(users.requiresLogin, course.hasAuthorization, course.update)
            .delete(users.requiresLogin, course.hasAuthorization, course.delete);
};
