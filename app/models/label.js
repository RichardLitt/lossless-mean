'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Label Schema
 */
var LabelSchema = new Schema({
	name: {
		type: String,
		default: '',
		trim: true
	},
	lossless: {
		type: Boolean,
		default: null
	},
	downloads: {
		type: Boolean,
		default: null
	},
	produces_LP: {
		type: Boolean,
		default: null
	},
	founded: {
		type: Date,
		default: Date.now
	},
	founder: {
		type: String,
		default: '',
		trim: true
	},
	distributor: {
		type: String,
		default: '',
		trim: true
	},
	genre: {
		type: String,
		default: '',
		trim: true
	},
	roster: {
		type: String,
		default: '',
		trim: true
	},
	country: {
		type: String,
		default: '',
		trim: true
	},
	state: {
		type: String,
		default: '',
		trim: true
	},
	city: {
		type: String,
		default: '',
		trim: true
	},
	website: {
		type: String,
		default: '',
		trim: true
	},
	twitter: {
		type: String,
		default: '',
		trim: true
	},
	facebook: {
		type: String,
		default: '',
		trim: true
	},
	youtube: {
		type: String,
		default: '',
		trim: true
	},
	user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
LabelSchema.path('name').validate(function(name) {
	return name.length;
}, 'Title cannot be blank');

/**
 * Statics
 *
 * // You don't understand this
 *
 * LabelSchema.statics.load = function(id, cb) {
 *	this.findOne({
 *		_id: id
 *	}).populate('')
 *};
 */
LabelSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Label', LabelSchema);