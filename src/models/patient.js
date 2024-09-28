import mongoose, { Schema } from "mongoose";
import { ObjectId } from "mongodb";

const PatientSchema = new Schema({
  userId: ObjectId,
  // Basic Information
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other',""],
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  languagesSpoken: {
    type: [String],
    default: [],
    required: false,
  },
  photoIDFile: {
    type: String, // Assuming you'll store the file path or URL in a string format
  },
});

// Export the model
const Patient = mongoose.models.Patient || mongoose.model('Patient', PatientSchema);
export default Patient;