import { PORT } from "./config";
import createServer from "./base/server";

const app = createServer();

app.listen(PORT, () => console.log("Server running"));
