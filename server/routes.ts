import type { Express } from "express";
import { createServer, type Server } from "http";
import { registerLaunchpadRoutes } from "./launchpad-routes.js";
import { registerAIRoutes } from "./ai-routes.js";

export async function registerRoutes(app: Express): Promise<Server> {
  registerLaunchpadRoutes(app);
  // Register AI chat routes
  registerAIRoutes(app);

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
