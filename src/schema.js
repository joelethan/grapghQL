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
exports.resolvers = void 0;
const client_1 = require("@prisma/client");
const axios_1 = __importDefault(require("axios"));
const prisma = new client_1.PrismaClient();
exports.resolvers = {
    Query: {
        allUsers: (_, { page }) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`https://swapi.dev/api/people/?page=${page}`);
            return response.data;
        }),
        searchUser: (_, { name }) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`https://swapi.dev/api/people/?search=${name}`);
            return response.data.results;
        }),
    },
};
