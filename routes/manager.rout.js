import express, { Express, Request, Response } from 'express';
import { createManager, updateManagerById, deleteManager, getAllManagers, getManagerById } from '../services/manager.service'
const userController = require("../controllers/userController");
const { authenticated } = require("../middlewares/auth");
const router = express.Router()

router.post('/api/admin/manager', authorization(Roles.ITManager), async (req, res) => {
    try {
      let creationResult = await createManager(req.body);
      res.status(200).send({
        statusCode: 200,
        data: creationResult
      });
    } catch (error) {
      res.status(500).json({ data: "Internal server error" });
    }
  });
  
  router.put('/api/admin/manager/:id', authorization(Roles.ITManager), async (req, res) => {
    try {
      let updatingResult = await updateManagerById(req.params.id, req.body);
      res.status(200).send({
        statusCode: 200,
        data: updatingResult
      });
    } catch (error) {
      res.status(404).json({ data: "The manager with given id doesn't exist" });
    }
  });
  
  router.delete('/api/admin/manager/:id', authorization(Roles.ITManager), async (req, res) => {
    try {
      let deletionResult = await deleteManager(req.params.id);
      res.status(200).send({
        statusCode: 200,
        data: deletionResult
      });
    } catch (error) {
      res.status(500).json({ data: "Internal server error" });
    }
  });
  
  router.get('/api/admin/managers', authorization(Roles.ITManager), async (req, res) => {
    try {
      let fetchingResult = await getAllManagers();
      res.status(200).send({
        statusCode: 200,
        data: fetchingResult
      });
    } catch (error) {
      res.status(500).json({ data: "Internal server error" });
    }
  });
  
  router.get('/api/admin/manager/:id', authorization(Roles.ITManager), async (req, res) => {
    try {
      let professor = await getManagerById(req.params.id);
      res.status(200).send({
        statusCode: 200,
        data: professor
      });
    } catch (error) {
      res.status(404).json({ data: "The manager with given id doesn't exist" });
    }
  });
  
  export { router as managerRouter };
  