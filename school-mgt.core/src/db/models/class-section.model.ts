import mongoose from 'mongoose';
import { DbModel } from './../../common/constant';

const classSectionSchema = new mongoose.Schema({
    class: { type: String, required: true },
    section: { type: String, required: true },
});

classSectionSchema.set('toJSON', { virtuals: true });

const ClassSectionModel = mongoose.model(DbModel.classSection, classSectionSchema);

export default ClassSectionModel;
