exports.addTodoSchema = {
	description: 'Create a new todo',
	tags: ['todos'],
	summary: 'Creates new todo with given values',
	body: {
		type: 'object',
		properties: {
			title: {type: 'string'},
			important: {type: 'boolean'},
			done: {type: 'boolean'}
		}
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: {type: 'string'},
				title: {type: 'string'},
				important: {type: 'boolean'},
				done: {type: 'boolean'},
				__v: {type: 'number'}
			}
		}
	}
};
