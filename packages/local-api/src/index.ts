import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { createCellsRouter } from './routes/cells';

export const serve = (
  port: number, 
  filename:string, 
  dir: string, 
  useProxy: boolean) => {
  console.log(port, filename, dir)
  const app = express();

  app.use(createCellsRouter(filename, dir));

  if(useProxy) {
    // For local env
    app.use(createProxyMiddleware({
      target: 'http://localhost:3000',
      ws: true,
      logLevel: 'silent'
    }))
  } else {
    // Running in a user's machine
    const packagePath = require.resolve('@hiby90/local-client/build/index.html');
    app.use(express.static(path.dirname(packagePath)));
  }



  return new Promise<void>((resolve, reject)=> {
    app.listen(port, resolve).on('error', reject)
  });
}