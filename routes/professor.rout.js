import express, { Express, Request, Response } from 'express';
import { createProfessor, deleteProfessor, getAllProfessors, getProfessorById, updateProfessorById } from '../services/professor.service';
const userController = require("../controllers/userController");
const { authenticated } = require("../middlewares/auth");

const router = express.Router()

router.post('/api/admin/professor', authorization(Roles.ITManager), async (req, res) => {
    try {
      let creationResult = await createProfessor(req.body);
      res.status(200).send({
        statusCode: 200,
        data: creationResult
      });
    } catch (error) {
      res.status(500).json({ data: "internal server error" });
    }
  });
  
  router.put('/api/admin/professor/:id', authorization([Roles.ITManager, Roles.Professor]), async (req, res) => {
    try {
      let updatingResult = await updateProfessorById(req.params.id, req.body);
      res.status(200).send({
        statusCode: 200,
        data: updatingResult
      });
    } catch (error) {
      res.status(404).json({ data: "The professor with given id doesn't exist" });
    }
  });
  
  router.delete('/api/admin/professor/:id', authorization(Roles.ITManager), async (req, res) => {
    try {
      let deletionResult = await deleteProfessor(req.params.id);
      res.status(200).send({
        statusCode: 200,
        data: deletionResult
      });
    } catch (error) {
      res.status(500).json({ data: "internal server error" });
    }
  });
  
  router.get('/api/admin/professors', authorization([Roles.ITManager, Roles.EducationManager]), async (req, res) => {
    try {
      let fetchingResult = await getAllProfessors();
      res.status(200).send({
        statusCode: 200,
        data: fetchingResult
      });
    } catch (error) {
      res.status(500).json({ data: "internal server error" });
    }
  });
  
  router.get('/api/admin/professor/:id', authorization([Roles.ITManager, Roles.EducationManager]), async (req, res) => {
    try {
      let professor = await getProfessorById(req.params.id);
      res.status(200).send({
        statusCode: 200,
        data: professor
      });
    } catch (error) {
      res.status(404).json({ data: "The professor with given id doesn't exist" });
    }
  });
  
  export { router as professorRouter };
  