import nextConnect from 'next-connect'
import moongose from 'mongoose'
import { NextApiResponse } from 'next'
import RequestDBProps from './RequestDBProps'

const MONGO_READY_STATES = {
    disconnected: 0,
    connected: 1,
    connecting: 2,
    disconnecting: 3,  
}

async function database(req: RequestDBProps, res: NextApiResponse, next) {
    const mongooseIsConnected = req.mongooseClient && req.mongooseClient.connection.readyState == MONGO_READY_STATES.connected

    if (mongooseIsConnected) {
        return next()
    }

    req.mongooseClient = await moongose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    req.mongooseClient.set('useFindAndModify', false);
    
    return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware