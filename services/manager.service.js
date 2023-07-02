import { ManagerModel } from "../Models/manager.model";

export async function createManager(managerInfo) {
    try {
        let newManager = new ManagerModel(managerInfo);
        await newManager.save();
        return "The new manager has been added successfully";
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function deleteManager(id) {
    let deleteResult = await ManagerModel.deleteOne({ _id: id })
        .catch((error) => {
            console.log(error);
            return error;
        });

    if (deleteResult.deletedCount === 0) {
        return `The manager with ${id} id doesn't exist`;
    }
    return `The manager with ${id} id is deleted successfully`;
}

export async function getAllManagers() {
    return await ManagerModel.find({}, "-password")
        .catch((error) => {
            console.log(error);
            return error;
        });
}

export async function getManagerById(id) {
    let getResult = await ManagerModel.findById(id, "-password")
        .catch((error) => {
            console.log(error);
            return error;
        });

    if (getResult === null) {
        return `The manager with ${id} id doesn't exist`;
    }

    return getResult;
}

export async function updateManagerById(id, updatedValues) {
    let updatedResult = await ManagerModel.updateOne({ _id: id }, updatedValues)
        .catch((error) => {
            console.log(error);
            return error;
        });

    if (updatedResult.modifiedCount === 0) {
        return `The manager with ${id} id doesn't exist`;
    }

    return updatedResult;
}
