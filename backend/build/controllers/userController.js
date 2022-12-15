"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.getUsers = exports.createUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const index_1 = require("../helpers/index");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name, lastName } = req.body;
    if (!email || !password || !name || !lastName)
        return res.status(400).json({ message: 'Fields are required { email, name, lastName, password }' });
    const hashedpw = yield (0, index_1.hashPassword)(password);
    const createUser = yield User_1.default.create({
        email,
        lastName,
        name,
        password: hashedpw
    });
    return createUser ? res.status(201).json(createUser) : res.status(400).json({ message: 'Check fields in the body and try again.' });
});
exports.createUser = createUser;
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield User_1.default.find({});
    return allUsers.length ? res.status(200).json(allUsers) : res.status(404).json({ message: 'Users are empty.' });
});
exports.getUsers = getUsers;
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userById = yield User_1.default.findById(id);
        return userById ? res.status(201).json(userById) : res.status(404).json({ message: 'Users are empty.' });
    }
    catch (error) {
        return next(error);
    }
});
exports.getUser = getUser;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { email, password, name, lastName } = req.body;
        const hashedpw = yield (0, index_1.hashPassword)(password);
        const userById = yield User_1.default.findByIdAndUpdate({ _id: id }, Object.assign(Object.assign({}, req.body), { email, password: hashedpw, name, lastName }), { new: true });
        return userById ? res.status(200).json(userById) : res.status(400).json({ message: 'Id is not correct, check and try again' });
    }
    catch (error) {
        return next(error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const saveUserToReturn = yield User_1.default.findById(id);
        const removeUserById = yield User_1.default.deleteOne({ _id: id });
        return removeUserById.acknowledged ? res.status(200).json(saveUserToReturn) : res.status(400).json({ message: 'Id is not correct, check and try again' });
    }
    catch (error) {
        return next(error);
    }
});
exports.deleteUser = deleteUser;
