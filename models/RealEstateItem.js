import mongoose from 'mongoose';

const realEstateSchema = new mongoose.Schema({
    property_id: {
        type: String,
        required: [true, 'Property ID is required'],
        unique: true
    },
    title: {
        type: String,
        required: [true, 'Property title is required'],
        minlength: [5, 'Title must be at least 5 characters long']
    },
    type: {
        type: String,
        enum: ['Apartment', 'House', 'Condo', 'Commercial', 'Land'],
        required: [true, 'Property type is required']
    },
    listing_type: {
        type: String,
        enum: ['Rent', 'Sale'],
        required: [true, 'Listing type must be Rent or Sale']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [1, 'Price must be greater than zero']
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        minlength: [3, 'Location must be at least 3 characters']
    },
    square_meters: {
        type: Number,
        required: [true, 'Size is required'],
        min: [5, 'Property must be at least 5 square meters']
    },
    bedrooms: {
        type: Number,
        required: false,
        min: [0, 'Bedrooms cannot be negative']
    },
    bathrooms: {
        type: Number,
        required: false,
        min: [0, 'Bathrooms cannot be negative']
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const realEstate = mongoose.model('realEstate', realEstateSchema);

export default realEstate;