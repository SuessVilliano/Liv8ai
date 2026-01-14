import express, { type Request, type Response } from 'express';
import { registerRoutes } from '../server/routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let routesRegistered = false;

export default async function handler(req: Request, res: Response) {
  if (!routesRegistered) {
    await registerRoutes(app);
    routesRegistered = true;
  }
  return app(req, res);
}
