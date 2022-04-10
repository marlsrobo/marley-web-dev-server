import mongoose from "mongoose";

const schema = mongoose.Schema({
    tuit: String,
    handle: String,
    title: String,
    likes: Number,
    dislikes: Number,
    postedBy: {
        username: String
    },
    attachments: {
        img: String
    },
    time: String,
    avatarImg: String,
    stats: {
        comments: Number,
        retuits: Number,
        likes: Number
    }
}, {collection: 'tuits'});

export default schema;