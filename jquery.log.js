/*
 * jquery.log.js
 * John Griffiths
 * 
 * simply allows you to do error logging & info 
 * without breaking other browsers
 * 
 */

jQuery.fn.debug = function(alertbox) {
  return this.each(function(){
    if (alertbox === null) { alert(this); }
  });
};

jQuery.log = function(message, alertbox) {
  if(window.console) {
     console.debug(message);
  } else if (alertbox === null) {
     alert(message);
  }
};