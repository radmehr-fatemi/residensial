import { Schema, model, models } from "mongoose";

const profileSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    realState: {
        type: String,
        required: true
    },

    constructionDate: {
        type: Date,
        required: true
    },

    category: {
        type: String,
        enum: ["villa", "apartment", "store", "office"],
        required: true
    },

    rules: {
        type: [String],
        default: []
    },

    amenities: {
        type: [String],
        default: []
    },

    price: {
        type: Number,
        required: true
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: "UserB"
    }
},
    { timestamp: true }
);

const Profile = models.Profile || new model("Profile", profileSchema);

export default Profile