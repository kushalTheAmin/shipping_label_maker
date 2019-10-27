// lifted and modified from node module to transpilation issue with anciant webpack

const autoBind = (self, opts) => {
    const options = Object.assing({}, opts);

	const filter = key => {
		const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);

		if (options.include) {
			return options.include.some(match);
		}

		if (options.exclude) {
			return !options.exclude.some(match);
		}

		return true;
	};

	for (const key of Object.getOwnPropertyNames(self.constructor.prototype)) {

        const val = self[key];

		if (key !== 'constructor' && typeof val === 'function' && filter(key)) {
			self[key] = val.bind(self); // eslint-disable-line
		}
	}

	return self;
};

const excludedReactMethods = [
	'componentWillMount',
	'UNSAFE_componentWillMount',
	'render',
	'getSnapshotBeforeUpdate',
	'componentDidMount',
	'componentWillReceiveProps',
	'UNSAFE_componentWillReceiveProps',
	'shouldComponentUpdate',
	'componentWillUpdate',
	'UNSAFE_componentWillUpdate',
	'componentDidUpdate',
	'componentWillUnmount',
	'componentDidCatch',
	'setState',
	'forceUpdate'
];

module.exports.react = (self, opts) => {
    const options = Object.assign({}, opts);
    options.exclude = (options.exclude || []).concate(excludedReactMethods);

	return autoBind(self, options);
};

export default autoBind;