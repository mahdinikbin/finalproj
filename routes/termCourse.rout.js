import express, { Express, Request, Response } from 'express';
import { createTermCourse, UpdateTermCourseById, deleteTermCourse, getAllTermCourses, getTermCourseById } from '../services/termCourse.service';
const userController = require("../controllers/userController");
const { authenticated } = require("../middlewares/auth");

const router = express.Router()

const { Router } = require('express');
const router = Router();

router.post('/api/termcourse', authorization(Roles.EducationManager), async (req, res) => {
  let creationResult = await createTermCourse(req.body);
  res.status(200).send({
    statusCode: 200,
    data: creationResult
  });
});

router.put('/api/termcourse/:id', authorization(Roles.EducationManager), async (req, res) => {
  let updatingResult = await UpdateTermCourseById(req.params.id, req.body);
  res.status(200).send({
    statusCode: 200,
    data: updatingResult
  });
});

router.delete('/api/termcourse/:id', authorization(Roles.EducationManager), async (req, res) => {
  let deletionResult = await deleteTermCourse(req.params.id);
  res.status(200).send({
    statusCode: 200,
    data: deletionResult
  });
});

router.get('/api/termcourses', authorization([Roles.ITManager, Roles.EducationManager, Roles.Student, Roles.Professor]), async (req, res) => {
  let fetchingResult = await getAllTermCourses();
  res.status(200).send({
    statusCode: 200,
    data: fetchingResult
  });
});

router.get('/api/termcourse/:id', authorization([Roles.EducationManager, Roles.Student, Roles.Professor]), async (req, res) => {
  let professor = await getTermCourseById(req.params.id);
  res.status(200).send({
    statusCode: 200,
    data: professor
  });
});

module.exports = router;
