const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true,
        trim: true
    },

    content: {
        type: String,
        required: true
    },

    author: {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        }
    },

    tags: [
        {
            type: String
        }
    ],

    comments: [
        {
            username: {
                type: String,
                required: true
            },

            comment: {
                type: String,
                required: true
            },

            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],

    likes: {
        type: Number,
        default: 0
    },

    published: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Blog", blogSchema);