'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Label = mongoose.model('Label'),
    _ = require('lodash');


/**
 * Find label by id
 */
exports.label = function(req, res, next, id) {
    Label.load(id, function(err, label) {
        if (err) return next(err);
        if (!label) return next(new Error('Failed to load label ' + id));
        req.label = label;
        next();
    });
};

/**
 * Create a label
 */
exports.create = function(req, res) {
    var label = new Label(req.body);
    label.user = req.user;

    label.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                label: label
            });
        } else {
            res.jsonp(label);
        }
    });
};

/**
 * Update a label
 */
exports.update = function(req, res) {
    var label = req.label;

    label = _.extend(label, req.body);

    label.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                label: label
            });
        } else {
            res.jsonp(label);
        }
    });
};

/**
 * Delete an label
 */
exports.destroy = function(req, res) {
    var label = req.label;

    label.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                label: label
            });
        } else {
            res.jsonp(label);
        }
    });
};

/**
 * Show an label
 */
exports.show = function(req, res) {
    res.jsonp(req.label);
};

/**
 * List of Labels
 */
exports.all = function(req, res) {
    Label.find().sort('-created').populate('user', 'name username').exec(function(err, labels) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(labels);
        }
    });
};