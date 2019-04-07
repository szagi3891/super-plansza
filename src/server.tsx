import * as express from 'express'; 
import * as path from 'path';
import { createServer } from 'http';

const pathApp = path.dirname(process.argv[1]);
const pathStatic = path.join(pathApp, 'static');

const app = express();
const server = createServer(app);

app.use('/static', express.static(pathStatic));

app.get('/', (_req, res) => {
    const pathIndex = path.join(pathApp, 'index.html');
    res.sendFile(pathIndex);
});

server.listen(8080, () => {
    console.info('Server start on 127.0.0.1:8080');
});