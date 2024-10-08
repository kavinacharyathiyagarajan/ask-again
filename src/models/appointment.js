import { addHours, addWeeks, startOfWeek } from "date-fns";
import mongoose, { Schema } from "mongoose";
import { ObjectId } from "mongodb";
import Doctor from "./doctor";
import Patient from "./patient";

const appointmentSchema = new Schema({
  patient: {
    type: ObjectId,
    required: true,
    ref: Patient
  },
  doctor: {
    type: ObjectId,
    required: true,
    ref: Doctor
  },
  costPerHour: {
    type: Number,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  chatSummary: {
    type: String,
    required: false
  },
  chatHistory: {
    type: [Schema.Types.Mixed],
    required: false
  },
  doctorNotes: {
    type: String
  }
}, { timestamps: true });

// Export the model
const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);
export default Appointment;