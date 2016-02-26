//http://mherman.org/blog/2015/02/12/postgresql-and-nodejs/#postgres-setup

var pg = require('pg');
var connection = require(path.join(__dirname, '../', '../', 'config'));

var client = new pg.Client(connection);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null)');
query.on('end', function() { client.end(); });
