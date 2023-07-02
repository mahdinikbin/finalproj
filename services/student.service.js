const StudentModel = require("../Models/student.model");

async function createStudent(studentInfo) {
  try {
    let newStudent = new StudentModel(studentInfo);
    await newStudent.save();
    return "The new student has been added successfully";
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function deleteStudent(id) {
  try {
    let deleteResult = await StudentModel.deleteOne({ _id: id });
    if (deleteResult.deletedCount === 0) {
      return `The student with ${id} id doesn't exist`;
    }
    return `The student with ${id} id is deleted successfully`;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getAllStudents() {
  try {
    return await StudentModel.find({}, "-password");
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getStudentById(id) {
  try {
    let getResult = await StudentModel.findById(id, "-password");
    if (!getResult) {
      return `The student with given id doesn't exist`;
    }
    return getResult;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function updateStudentById(id, updatedValues) {
  try {
    let updatedResult = await StudentModel.updateOne({ _id: id }, updatedValues);
    if (updatedResult.modifiedCount === 0) {
      return `The student with ${id} id doesn't exist`;
    }
    return updatedResult;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudentById
};
