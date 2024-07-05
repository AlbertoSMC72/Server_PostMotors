import e from "express";
import { postEngine, updateEngine } from "../repositories/engines.repositories.js";

export const postEngineService = async (req) => {
    try {
        return await postEngine(req.body);
    } catch (error) {
        throw error;
    }
}

export const putEngineService = async (req) => {
    try {
        return await updateEngine(req.body, req.params.id);
    } catch (error) {
        throw error;
    }
}