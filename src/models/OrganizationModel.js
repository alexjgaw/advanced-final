import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256
  },

  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1024
  },

  imgUrl: {
    type: String,
    required: true,
    minlength: 16,
    maxlength: 2083
  },

  url: {
    type: String,
    required: true,
    minlength: 16,
    maxlength: 2083
  },

  keywords: [String]
});

export default mongoose.model('Organization', organizationSchema);
