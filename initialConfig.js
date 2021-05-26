var express = require('express');
var jwt = require('jsonwebtoken');
var sqlite = require('sqlite3');
var crypto = require('crypto');

// not really that good as a secret key
const KEY = "m yincredibl y(!!1!11!)<'SECRET>)Key'!";

var db = new sqlite.Database("users.sqlite3");

var app = express();