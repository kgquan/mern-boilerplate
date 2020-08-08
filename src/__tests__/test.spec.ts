import request from 'supertest';
import app from '../app';
import http from 'http';
import path from 'path';
process.env.NODE_CONFIG_DIR = path.join(__dirname, "/../../config/");
import config from 'config';
import mongoose from 'mongoose';

describe("Test endpoint", () => {
	let server: http.Server;
	let port: number;

	beforeAll(async () => {
		try {
			port = config.get("port") || 5001;
			const url:string = config.get("dbUri");
			await mongoose.connect(url, { useNewUrlParser: true });
		} catch (ex) {
			console.error(ex);
		}
	});

	beforeEach((done) => {
		server = app.listen({ port }, done);
	});

	afterEach(() => {
		server.close();
	});

	it("should be a test", async (done) => {
		const res = await request(server)
			.get('/')
			expect(res.status).toEqual(200);
			done();
	});
})