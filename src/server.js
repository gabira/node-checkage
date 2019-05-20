const express = require("express");
const path = require("path");
const nunjuks = require("nunjucks");
const routes = require("./routes");

class App {
	constructor() {
		this.express = express();
		this.isDev = process.env.NODE_ENV !== "production";

		this.middlewares();
		this.views();
		this.routes();
	}
	middlewares() {
		this.express.use(express.urlencoded({ extended: false }));
	}
	views() {
		nunjuks.configure(path.resolve(__dirname, "app", "views"), {
			watch: this.isDev,
			express: this.express,
			autoscape: true
		});
		this.express.use(express.static(path.resolve(__dirname, "public")));
		this.express.set("view engine", "njk");
	}
	routes() {
		this.express.use(routes);
	}
}

module.exports = new App().express;
