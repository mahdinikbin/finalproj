import express, { Express, Request, Response } from 'express';
import { createApprovedCourse, deleteApprovedCourse, UpdateApprovedCourseById, getAllApprovedCourses, getApprovedCourseById } from '../services/approvedCourse.service';

const router = express.Router()

const express = require('express');
const router = express.Router();

router.post('/api/approvedcourse', authorization(Roles.EducationManager), async (req, res) => {
    let creationResult = await createApprovedCourse(req.body);
    res.status(200).send({
        statusCode: 200,
        data: creationResult
    });
});

router.put('/api/approvedcourse/:id', authorization(Roles.EducationManager), async (req, res) => {
    let updatingResult = await UpdateApprovedCourseById(req.params.id, req.body);
    res.status(200).send({
        statusCode: 200,
        data: updatingResult
    });
});

router.delete('/api/approvedcourse/:id', authorization(Roles.EducationManager), async (req, res) => {
    let deletionResult = await deleteApprovedCourse(req.params.id);
    res.status(200).send({
        statusCode: 200,
        data: deletionResult
    });
});

router.get('/api/approvedcourses', authorization([Roles.ITManager, Roles.EducationManager, Roles.Student, Roles.Professor]), async (req, res) => {
    let fetchingResult = await getAllApprovedCourses();
    res.status(200).send({
        statusCode: 200,
        data: fetchingResult
    });
});

router.get('/api/approvedcourse/:id', authorization([Roles.EducationManager, Roles.Student, Roles.Professor]), async (req, res) => {
    let professor = await getApprovedCourseById(req.params.id);
    res.status(200).send({
        statusCode: 200,
        data: professor
    });
});

module.exports = router;
