const path = require('path')

const PATH_NODE_MODULES = path.join(process.cwd(), 'node_modules')

module.exports = {
	includePaths:  require('bourbon').includePaths.concat([
		path.join(PATH_NODE_MODULES, 'normalize.css/'),
		path.join(PATH_NODE_MODULES, 'sass-helper/')
	])
}