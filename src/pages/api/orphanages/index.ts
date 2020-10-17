import nextConnect from 'next-connect'
import dbConnect from '../../../database/dbConnect'
import { NextApiResponse } from 'next'
import RequestDBProps from '../../../database/RequestDBProps'
import { ObjectID } from 'mongodb'

import { Orphanage, OrphanageModelInterface } from '../../../models/Orphanage'

const endpoint = nextConnect()

// Always get dbConnection on endpoints. The db is provided on request object (req.dbClient and req.db)
endpoint.use(dbConnect)

endpoint.get(async (req: RequestDBProps, res: NextApiResponse) => {
    try {
        const orphanages = await Orphanage.find()

        return res.status(200).json({ sucess: true, qnt: orphanages.length, data: orphanages })
    } catch (error) {
        return res.status(400).json({ sucess: false })
    }
})

endpoint.post(async (req: RequestDBProps, res: NextApiResponse) => {
    try {
        const orphanage = await Orphanage.create(req.body)

        return res.status(200).json({ sucess: true, data: orphanage })
    } catch (error) {
        return res.status(400).json({ sucess: false })
    }
})

endpoint.delete(async (req: RequestDBProps, res: NextApiResponse) => {
    try {
        const { id } = req.body

        if (!id) {
            res.status(400)
            return res.end()
        }

        const result = await Orphanage.findByIdAndDelete(new ObjectID(id))

        if (result) {
            res.status(200)
            return res.end()
        }

        res.status(304)
        return res.end()
    } catch (error) {
        res.status(400)
        return res.end()
    }
})

endpoint.put(async (req: RequestDBProps, res: NextApiResponse) => {
    try {
        const {
            _id,
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        } = req.body as OrphanageModelInterface

        if (!_id) {
            res.status(400)
            return res.end()
        }

        const result = await Orphanage.findByIdAndUpdate(new ObjectID(_id), {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        })

        if (result) {
            res.status(200)
            return res.end()
        }

        res.status(304)
        return res.end()
    } catch (error) {
        res.status(400)
        return res.end()
    }
})

export default endpoint