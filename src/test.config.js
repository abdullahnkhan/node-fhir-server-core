const FHIRServer = require('./index.js');
const http = require('http');
const sinon = require('sinon');
const MockRequest = require('readable-mock-req');
const { expect } = require('chai');
const env = require('var');

const { Issuer, Strategy } = require('./auth');

let { VERSIONS } = FHIRServer.constants;




module.exports = {
	server: {
		port: 3000,
		corsOptions: {
			maxAge: 86400,
			methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		},
		// ssl: {
		// 	key: './src/key.pem',
		// 	cert: './src/cert.pem'
		// }
	},
	logging: {
		level: 'debug',
	},
	auth: {
		// This servers URI
		resourceServer: env.RESOURCE_SERVER,
		//
		// if you use this strategy, you need to add the corresponding env vars to docker-compose
		//
		strategy: {
			name: 'bearer',
			//useSession: false,
			service: './src/auth/passport_strategy'
			//service: './src/strategies/bearer.strategy.js'
		}
	},
	// Security URLS for Capability Statement
	security: [
		{
			url: 'authorize',
			valueUri: 'https://fhirapp.herokuapp.com/authorize'
		},
		{
			url: 'token',
			valueUri: 'https://fhirapp.herokuapp.com/token'
		}
	],
	profiles: {
		Appointment: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		AppointmentResponse: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		Bundle: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		MedicationRequest: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		Observation: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		Patient: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['4_0_0'], VERSIONS['3_0_1'], VERSIONS['1_0_2']],
		},
		Questionnaire: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		QuestionnaireResponse: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
	},
};



