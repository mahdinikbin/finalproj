const ProfessorModel = require("../Models/professor.model");

async function createProfessor(professorInfo) {
  try {
    let newProfessor = new ProfessorModel(professorInfo);
    await newProfessor.save();
    return "The new professor has been added successfully";
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function deleteProfessor(id) {
  try {
    let deleteResult = await ProfessorModel.deleteOne({ _id: id });
    if (deleteResult.deletedCount === 0) {
      return `The professor with ${id} id doesn't exist`;
    }
    return `The professor with ${id} id is deleted successfully`;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getAllProfessors() {
  try {
    return await ProfessorModel.find({}, "-password");
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getProfessorById(id) {
  try {
    let getResult = await ProfessorModel.findById(id, "-password");
    if (!getResult) {
      return `The professor with ${id} id doesn't exist`;
    }
    return getResult;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function updateProfessorById(id, updatedValues) {
  try {
    let updateResult = await ProfessorModel.updateOne({ _id: id }, updatedValues);
    console.log(updateResult);
    if (updateResult.modifiedCount === 0) {
      return `The professor with ${id} id doesn't exist`;
    }
    return updateResult;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = {
  createProfessor,
  deleteProfessor,
  getAllProfessors,
  getProfessorById,
  updateProfessorById
};
