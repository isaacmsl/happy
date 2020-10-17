import { Mongoose } from 'mongoose';
import { NextApiRequest } from 'next';

export default interface RequestDB extends NextApiRequest {
    mongooseClient: Mongoose;
}