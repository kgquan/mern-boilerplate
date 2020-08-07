import app from './app';
import path from 'path';
process.env.NODE_CONFIG_DIR = path.join(__dirname, "/../../config/");
import config from 'config';

let environment: string | undefined = process.env.NODE_ENV;
let port: number;

if (!environment) {
  environment = "development";
}

if (environment === "development") {
  port = config.get("port") || 5000;
} else if (environment === "testing") {
  port = config.get("port") || 5001;
} else {
  port = 5002;
}

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
