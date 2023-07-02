const termCourseModel = require("../Models/termCourse.model");

async function createTermCourse(courseInfo) {
  try {
    let newCourse = new termCourseModel(courseInfo);
    await newCourse.save();
    return "The new termCourse has been added successfully";
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function deleteTermCourse(id) {
  try {
    let deleteResult = await termCourseModel.deleteOne({ _id: id });
    if (deleteResult.deletedCount === 0) {
      return `The termCourse with ${id} id doesn't exist`;
    }
    return `The termCourse with ${id} id is deleted successfully`;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getAllTermCourses() {
  try {
    return await termCourseModel.find({});
  } catch (error) {
    console.log(error);
    return "Internal server error";
  }
}

async function getTermCourseById(id) {
  try {
    let getResult = await termCourseModel.findById(id);
    if (!getResult) {
      return `The termCourse with ${id} id doesn't exist`;
    }
    return getResult;
  } catch (error) {
    console.log(error);
    return `The termCourse with ${id} id doesn't exist`;
  }
}

async function updateTermCourseById(id, updatedValues) {
  try {
    let updateResult = await termCourseModel.updateOne({ _id: id }, updatedValues);
    if (updateResult.modifiedCount === 0) {
      return `The termCourse with ${id} id doesn't exist`;
    }
    return updateResult;
  } catch (error) {
    console.log(error);
    return `The termCourse with ${id} id doesn't exist`;
  }
}

module.exports = {
  createTermCourse,
  deleteTermCourse,
  getAllTermCourses,
  getTermCourseById,
  updateTermCourseById
};
