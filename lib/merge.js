var merge = function () {

	// Create a new object
	var extended = {};

	// Merge the object into the extended object
	var merge = function (obj) {
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				// Push each value from `obj` into `extended`
				extended[prop] = obj[prop];
			}
		}
	};

	// Loop through each object and conduct a merge
	for (var i = 0; i < arguments.length; i++) {
		merge(arguments[i]);
	}

	return extended;
};

return merge;
