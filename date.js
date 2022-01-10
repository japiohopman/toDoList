// jshint esversion:6
exports.getDate = function(){
const today = new Date();
const option = {
  weekday: "long",
  day: "numeric",
  month: "long"
};
return  today.toLocaleDateString("en-GB", option);

};

// day
exports.getDay = function(){
const today = new Date();
const option = {
  weekday: "long",

};
return today.toLocaleDateString("en-GB", option);

};
