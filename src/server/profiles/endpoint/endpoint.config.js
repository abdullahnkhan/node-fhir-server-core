const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./endpoint.arguments');
const controller = require('./endpoint.controller');

let write_only_scopes = write_scopes('EndPoint');
let read_only_scopes = read_scopes('EndPoint');

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
		path: '/:version/endpoint',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getEndPoint
	},
	{
		type: 'post',
		path: '/:version/endpoint/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getEndPoint
	},
	{
		type: 'get',
		path: '/:version/endpoint/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getEndPointById
	},
	{
		type: 'post',
		path: '/:version/endpoint',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createEndPoint
	},
	{
		type: 'put',
		path: '/:version/endpoint/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateEndPoint
	},
	{
		type: 'delete',
		path: '/:version/endpoint/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteEndPoint
	}
];

/**
 * @name exports
 * @summary EndPoint config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ENDPOINT
	},
	routes
};
