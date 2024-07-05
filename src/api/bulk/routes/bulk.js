


module.exports = {
	routes: [
	{
		method: 'GET',
		path: '/bulk',
		handler: 'bulk.index',
	},
	{
		method: 'POST',
		path: '/bulk',
		handler: 'bulk.create',
	},
{
		method: 'POST',
		path: '/bulk-testing',
		handler: 'bulk.createTest',
	},

	{
		method: 'POST',
		path: '/bulk/updateMany',
		handler: 'bulk.updateMany',
	}


	]
}