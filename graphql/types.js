import { gql } from 'apollo-server-express';
import { typesUsers } from '../models/users/tipos.js';
//import { typesProjects } from '../models/projects/tipos.js';

const typesGlobals = gql`
    scalar Date
`;

export const types = [
    typesGlobals,
    typesUsers,
    //typesProjects
];