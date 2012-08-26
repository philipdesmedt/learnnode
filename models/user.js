var mongooseTypes = require('mongoose-types');

exports.createModel = function(mongoose) {
    var Schema = mongoose.Schema,
        User;

    // Define the User schema
    User = new Schema({
        name: { type: String },
        email: { type: mongoose.SchemaTypes.Email, required: true, unique: true },
        passwordHash: { type: String, required: false }

        signupDate: { type: Date, default: Date.now },
        isAdmin: { type: Boolean, default: false }
    });

    User.virtual('id').get(function() {
        return this._id.toHexString();
    });

    User.method('hasAdminRights', function() {
        return (this.isAdmin);
    });

    return User;
};
