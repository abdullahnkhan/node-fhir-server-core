const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./documentmanifest.arguments');
const controller = require('./documentmanifest.controller');

let write_only_scopes = write_scopes('DocumentManifest');
let read_only_scopes = read_scopes('DocumentManifest');

let common_args_array = Object.getOwnPropertyNames(common_args)
	.map((arg_name) => common_args[arg_name]);

let resource_args_array = Object.getOwnPropertyNames(resource_specific_args)
	.map((arg_name) => Object.assign({ versions: VERSIONS.STU3 }, resource_specific_args[arg_name]));

const resourceAllArguments = [
	route_args.VERSION,	...common_args_array, ...resource_args_array,
];

let routes = [
	{
		type: 'get',
		path: '/:version/documentmanifest',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getDocumentManifest
	},
	{
		type: 'post',
		path: '/:version/documentmanifest/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getDocumentManifest
	},
	{
		type: 'get',
		path: '/:version/documentmanifest/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getDocumentManifestById
	},
	{
		type: 'post',
		path: '/:version/documentmanifest',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createDocumentManifest
	},
	{
		type: 'put',
		path: '/:version/documentmanifest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateDocumentManifest
	},
	{
		type: 'delete',
		path: '/:version/documentmanifest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteDocumentManifest
	}
];

/**
 * @name exports
 * @summary DocumentManifest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DOCUMENTMANIFEST
	},
	routes
};
