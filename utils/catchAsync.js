"use strict";

const catchAsync = (fn) => (req, res, next) => {
	Promise.resolve(fn(req, res, next))
	//.then(() => next())
	.catch((err) => next(err));
};

export default catchAsync;
