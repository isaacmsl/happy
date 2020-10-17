import mongoose, { Schema } from 'mongoose'
import { ObjectID } from 'mongodb'

export interface ImageInterface {
    path: string;
}

export interface OrphanageModelInterface {
    _id: ObjectID;
    name: String;
    latitude: Number;
    longitude: Number;
    about: String;
    instructions: String;
    opening_hours: String;
    open_on_weekends: Boolean;
    images: ImageInterface[];
    created_at: Date;
    updated_at: Date;
}

const OrphanageSchema: Schema<OrphanageModelInterface> = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 40,
    },
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number,
    },
    about: {
        type: String,
        required: true,
        maxlength: 255,
    },
    instructions: {
        type: String,
        required: true,
        maxlength: 255,
    },
    opening_hours: {
        type: String,
        required: true,
        maxlength: 10,
    },
    open_on_weekends: {
        type: Boolean,
        required: true,
        default: false,
    },
    images: {
        type: Array,
    }
}, {
    timestamps: { createdAt: 'created_at' },
    versionKey: false
})

export const Orphanage = mongoose.models.Orphanage || mongoose.model('Orphanage', OrphanageSchema)