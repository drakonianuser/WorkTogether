"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LocalStrategy = require('passport-local').Strategy;
const passport = require("passport");
passport.use('local.sigup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
}));
