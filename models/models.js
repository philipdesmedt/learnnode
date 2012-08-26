/**
 *
 *  Models for persisting data
 *  @author Philip De Smedt
 *  @date 17/04/2012
 *  @version 0.13
 *
 */

var mongooseTypes = require('mongoose-types'),
    createUserModel = require('./user').createModel,
    createPostModel = require('./post').createModel;

function defineModels(mongoose, cb) {
    //load additional types
    mongooseTypes.loadTypes(mongoose, "email");

    mongoose.model('User', createUserModel(mongoose));
    mongoose.model('Post', createPostModel(mongoose));
    cb();
}

exports.defineModels = defineModels;
