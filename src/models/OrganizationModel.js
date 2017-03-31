import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const keywordSchema = new Schema({
  type: String,
  lowercase: true,
  trim: true,
  minlength: 2,
  maxlength: 100
});

const organizationSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
    minlength: 10,
    maxlength: 10
  },

  keywords: [keywordSchema]
});

export default mongoose.model('Organization', organizationSchema);
