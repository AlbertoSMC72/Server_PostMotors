import config from "../config/config.js";

export const postEngine = async (engine) => {
    try {
        const resul = await config.query("INSERT INTO engines SET ?", [engine]);
        return { message: "Engine created"};
    } catch (error) {
        throw new Error(error.message);
     }
}

export const updateEngine = async (engine, id) => {
    config.startTransaction();
    try {
        await config.query("UPDATE engines set ? WHERE id_engine = ?", [engine, id]);
        config.commit();
        return { message: "Engine updated" };
    } catch (error) {
        config.rollback();
        throw { status: 500, message: "Internal Server Error", error };
    }
}