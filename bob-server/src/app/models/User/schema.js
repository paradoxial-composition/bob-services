export default {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    adress: {
        type: String
    },
    birthDate: {
        type: Date,
        required: true
    },
    phone: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
    enabled: {
        type: Boolean,
        default: true
    }
}