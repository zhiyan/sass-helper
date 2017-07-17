const path = require('path')

const PATH_NODE_MODULES = path.join(process.cwd(), 'node_modules')

module.exports = {
	includePaths:  require('bourbon').includePaths.concat([
		PATH_NODE_MODULES,
		path.join(PATH_NODE_MODULES, 'normalize.css/'),
	])
}