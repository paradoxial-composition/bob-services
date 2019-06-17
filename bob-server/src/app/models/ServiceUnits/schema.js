export default {
    activity: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    userId: {
        type: String
    },
    description: {
        type: String
    },
    type: {
        type: String
    },
    intrestedUsers: [],
    achieved: {
        type: Boolean,
        default: false
    },
    location: {
        type: { type: String },
        coordinates: []
    },
    solved: Boolean
}