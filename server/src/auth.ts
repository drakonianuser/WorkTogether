const LocalStrategy = require('passport-local').Strategy;
import passport = require("passport");
import { Stats } from "fs";
import pool from "./database";

passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallBack: true
}, async (req:Request, done:Stats )=>{
    const result = await pool.query("INSERT INTO worktogether.usuarios SET =?", [req.body]);

    return done;
}));

export default passport;