import { Router } from "express";
import { HealthController } from "../../application/health.controller";

const router = Router();
const healthController = new HealthController();

//health check for testing
router.get("/hc", healthController.check);

//unknow api call
router.get("*", healthController.unknow);

export default router;
