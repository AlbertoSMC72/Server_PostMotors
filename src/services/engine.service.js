import { postEngine, updateEngine } from "../repositories/engines.repositories.js";
import { validateEngine } from "../models/engines.model.js";

export const postEngineService = async (engine) => {
    try {
        const validEngine = validateEngine(engine);
        if (validEngine.success) {
            return await postEngine(engine);
        }else {
            throw new Error(validEngine.error.message);
        }
    } catch (error) {
        throw error;
    }
}

export const putEngineService = async (engine, id) => {
    try {
        return await updateEngine(engine , id);
    } catch (error) {
        throw error;
    }
}