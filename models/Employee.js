import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    employee_id: {
        type: String,
        required: [true, 'Employee ID is required'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Employee Name is required'],
        minlength: [3, 'Employee Name must be at least 3 characters long']
    },
    email: {
        type: String,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
        unique: true
    },
    job_title: {
        type: String,
        required: [true, 'Job title is required'],
        enum: ['Software Developer', 'Product Manager', 'Graphic Designer', 'HR']
    },
    age: {
        type: Number,
        required: true,
        min: [19, 'Employees age must be at least 18 or above'],
        max: [120, 'Employee age must be below 120!']
    },
    date_hired: {
        type: Date,
        default: Date.now,
        required: true
    },
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;