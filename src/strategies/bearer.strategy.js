const Strategy = require('passport-http-bearer').Strategy;
const request = require('superagent');
const env = require('var');

const params = {
	scope: 'openid',
	respose_types: ['code'],
	client_id: 'ABCD_CLIENT_ID',
	client_secret: 'ABCD_CLIENT_SECRETE',
	redirect_uris: ['https://angular-test-fhir.netlify.com/assets/signin-callback.html'],
};
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
	response_types: ['code'],
	redirect_uris: ['https://angular-test-fhir.netlify.com/assets/signin-callback.html'],
});

module.exports.strategy = new Strategy({ client, params, passReqToCallback, usePKCE }, (tokenset, userinfo, done) => {
	console.log('tokenset', tokenset);
	console.log('access_token', tokenset.access_token);
	console.log('id_token', tokenset.id_token);
	console.log('claims', tokenset.claims);
	console.log('userinfo', userinfo);

	User.findOne({ id: tokenset.claims.sub }, function (err, user) {
		if (err) return done(err);
		return done(null, user);
	});
});
