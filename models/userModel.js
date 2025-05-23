import { Schema, model } from "mongoose";

const userSchema = new Schema({
    nome: {type:String, required:true},
    email: {type: String, required:true, unique:true},
    senha: {type:String, required:true}
})

export const userModel = model("user", userSchema, "user") //3° parametro para nao aplicar a pluralização na hr de ver as coleções

