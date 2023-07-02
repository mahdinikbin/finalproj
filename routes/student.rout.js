import express, { Express, Request, Response } from 'express';
import { createStudent, deleteStudent, getAllStudents, getStudentById, updateStudentById } from '../services/student.service';

const userController = require("../controllers/userController");
const { authenticated } = require("../middlewares/auth");

const router = express.Router()

router.post('/api/admin/student', authorization(Roles.ITManager), async (req, res) => {
    try {
      let creationResult = await createStudent(req.body);
      res.status(200).send({
        statusCode: 200,
        data: creationResult
      });
    } catch (error) {
      res.status(500).json({ data: 'Internal server error' });
    }
  });
  
  router.put('/api/admin/student/:id', authorization([Roles.ITManager, Roles.Student]), async (req, res) => {
    try {
      let updatingResult = await updateStudentById(req.params.id, req.body);
      res.status(200).send({
        statusCode: 200,
        data: updatingResult
      });
    } catch (error) {
      res.status(404).json({ data: 'The student with given id does not exist' });
    }
  });
  
  router.delete('/api/admin/student/:id', authorization(Roles.ITManager), async (req, res) => {
    try {
      let deletionResult = await deleteStudent(req.params.id);
      res.status(200).send({
        statusCode: 200,
        data: deletionResult
      });
    } catch (error) {
      res.status(500).json({ data: 'Internal server error' });
    }
  });
  
  router.get('/api/admin/students', authorization([Roles.ITManager, Roles.EducationManager]), async (req, res) => {
    try {
      let fetchingResult = await getAllStudents();
      res.status(200).send({
        statusCode: 200,
        data: fetchingResult
      });
    } catch (error) {
      res.status(500).json({ data: 'Internal server error' });
    }
  });
  
  router.get('/api/admin/student/:id', authorization([Roles.ITManager, Roles.EducationManager, Roles.Student]), async (req, res) => {
    try {
      let professor = await getStudentById(req.params.id);
      res.status(200).send({
        statusCode: 200,
        data: professor
      });
    } catch (error) {
      res.status(404).json({ data: 'The student with given id does not exist' });
    }
  });
  
  export { router as studentRouter };
  