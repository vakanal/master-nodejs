const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const rolesValidos = {
  values: ["ADMIN_ROLE", "USER_ROLE"],
  message: "{VALUE} no es un rol válido.",
};

const UserSchema = new Schema({
  name: { type: String, required: [true, "Campo Obligatorio"] },
  email: { type: String, required: [true, "Campo Obligatorio"], unique: true },
  password: { type: String, required: [true, "Campo Obligatorio"] },
  img: { type: String, required: false },
  role: { type: String, default: "USER_ROLE", enum: rolesValidos },
  status: { type: Boolean, default: true },
  google: { type: Boolean, default: false },
});

UserSchema.plugin(uniqueValidator, {
  message: "Error, {PATH} debe ser único.",
});

UserSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

module.exports = mongoose.model("UserModel", UserSchema);
