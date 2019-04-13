const FHIRServer = require('./index.js');
const config = require('./test.config');
const passport = require('passport');
const Strategy = require('passport-http-bearer').Strategy;
const { Issuer } = require('openid-client');

let main = function() {
	let server = FHIRServer.initialize(config);

	server.logger.info('FHIR Server successfully validated.');

	// Validating auth using passport
	const params = {
		scope: 'openid',
		respose_types: ['code'],
		client_id: 'ABCD_CLIENT_ID',
		client_secret: 'ABCD_CLIENT_SECRETE',
		redirect_uris: ['https://angular-test-fhir.netlify.com/assets/signin-callback.html'],
	};
	// optional, defaults to false, when true req is passed as first argument to verify fn
	const passReqToCallback = false;

	const usePKCE = true;

	const issuer = new Issuer({
		issuer: 'https://fhirapp.herokuapp.com',
		authorization_endpoint: 'https://fhirapp.herokuapp.com/auth',
		token_endpoint: 'https://fhirapp.herokuapp.com/token',
		userinfo_endpoint: 'https://fhirapp.herokuapp.com/userinfo',
		jwks_uri: 'https://fhirapp.herokuapp.com/jwks',
		code_challenge_methods_supported: ['plain', 'S256']
	});

	const client = new issuer.Client({
		client_id: 'ABCD_CLIENT_ID',
		client_secret: 'ABCD_CLIENT_SECRETE',
		respose_types: ['code'],
		redirect_uris: ['https://angular-test-fhir.netlify.com/assets/signin-callback.html'],
	});

	passport.use('oidc', new Strategy({ client, params, passReqToCallback, usePKCE }, (tokenset, userinfo, done) => {
		console.log('tokenset', tokenset);
		console.log('access_token', tokenset.access_token);
		console.log('id_token', tokenset.id_token);
		console.log('claims', tokenset.claims);
		console.log('userinfo', userinfo);

		User.findOne({ id: tokenset.claims.sub }, function (err, user) {
			if (err) return done(err);
			return done(null, user);
		});
	}));

	server.app.get('/auth', passport.authenticate('oidc'));

	//server.app.get('/auth', function(req, res){
	//	console.info('/auth');
	//	res.send('/auth route');
	//});

	// Start our server
	server.listen(3000);
	server.logger.info('FHIR Server listening on localhost:' + 3000);
};

main();
