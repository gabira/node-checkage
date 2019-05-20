module.exports = (req, res, next) => {
	if (req.query.age) return next();
	return res.redirect("/");
};
