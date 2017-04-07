import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const publicFigureSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256
  },

  userName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256
  },

  profileUrl: {
    type: String,
    required: true,
    minlength: 16,
    maxlength: 2083
  },

  imgUrl: {
    type: String,
    required: true,
    minlength: 16,
    maxlength: 2083
  },

  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256
  }
});

export default mongoose.model('PublicFigure', publicFigureSchema);
