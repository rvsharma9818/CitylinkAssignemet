const mongoose = require("mongoose");

//email validation
const isValidEmail = function (email) {
  const emailRegex = /^[a-z0-9]{1,}@g(oogle)?mail\.com$/;
  return emailRegex.test(email);
};

// mobile validation
const isValidPhone = function (Phone) {
  const mobileRegex = /^[6-9]\d{9}$/;
  return mobileRegex.test(Phone);
};

//validation for Value
const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value !== "string" || value.trim().length === 0 || value == "")
    return false;
  return true;
};

//title validation
const isValidScripts = function (title) {
  const scriptRegex = /^(?![0-9]*$)[A-Za-z0-9\s\-_,\.;:()]+$/;
  return scriptRegex.test(title);
};

// Name Validation
const isValidName = function (name) {
  const nameRegex = /^[a-zA-Z][a-zA-Z ]*$/i;
  return nameRegex.test(name);
};
const isValidVehical = function (value) {
  const nameRegex = /^[A-Z]{2}\s[0-9]{2}\s[A-Z]{2}\s[0-9]{4}$/i;
  return nameRegex.test(value);
};
//validation of  empty string
const validString = function (value) {
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

//validation for Request Body
const isValidRequestBody = function (request) {
  return Object.keys(request).length > 0;
};

//validation for ObjectId
const isValidObjectId = function (objectId) {
  return mongoose.Types.ObjectId.isValid(objectId);
};

const isValidLattitude = function (value) {
  const LattitudeRegex = /^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/gi;
  return LattitudeRegex.test(value);
};
const isValidLongitude = function (value) {
  const LongitudeRegex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/i;
  return LongitudeRegex.test(value);
};

// Pincode validation
const isValidPincode = function (pincode) {
  if (
    !pincode ||
    pincode.toString().trim().length == 0 ||
    pincode.toString().trim().length != 6
  )
    return false;
  if (isNaN(Number(pincode.toString().trim()))) return false;
  return true;
};

// Status validation
const isValidStatus = function (status) {
  if (["pending", "completed", "cancelled"].indexOf(status) == -1) return false;
  return true;
};

module.exports = {
  isValid,
  isValidRequestBody,
  isValidObjectId,
  isValidEmail,
  isValidStatus,
  isValidPhone,
  isValidPincode,
  isValidName,
  isValidVehical,
  isValidLattitude,
  isValidLongitude,
};
