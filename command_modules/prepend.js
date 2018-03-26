var helpers = require('../helpers.js');

/**
 * Returns the base / empty state for user settings
 */
var get_blank_settings = function(user) {
	return {
	    "terms": []
	};
}

/**
 * Takes the old settings and parameters, updates settings and returns the new value
 */
var update_settings = function(old_settings, command_pieces) {
    var user = command_pieces.user;
    var command = command_pieces.command;
    var parameters = command_pieces.parameters;

	var settings = old_settings;
	settings["terms"] = [helpers.combine_parameters(parameters,0) + " "];
	return settings;
}

/**
 * Takes a message and settings, updates the message
 */
var modify_message = function(message, settings) {
	message.text = settings["terms"].join("") + message.text;
	return message;
}

module.exports = {
	"get_blank_settings": get_blank_settings,
	"update_settings": update_settings,
	"modify_message": modify_message
}
