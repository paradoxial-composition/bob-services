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
        required: true
    },
    enabled: {
        type: Boolean,
        default: false
    },
    password: String
}