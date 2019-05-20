class MainController {
	index(req, res) {
		res.render("index");
	}

	check(req, res) {
		const age = req.body.age;
		if (age > 18) res.redirect(`/major?age=${age}`);
		res.redirect(`/minor?age=${age}`);
	}

	major(req, res) {
		const age = req.query.age;
		res.render("major", { age });
	}

	minor(req, res) {
		const age = req.query.age;
		res.render("minor", { age });
	}
}

module.exports = new MainController();
