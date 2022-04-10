import * as tuitsDao from "../../tuits-dao.js";

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.postedBy = {username: "Marley Robinson"};
    newTuit.stats = {comments: 0,
        retuits: 0,
        likes: 0};
    newTuit.handle = "mrobinson";
    newTuit.title = '';
    newTuit.time = "just now";
    newTuit.attachments = {img: "https://artsy-media-uploads.s3.amazonaws.com/2P6t_Yt6dF0TNN76dlp-_Q%2F3417757448_4a6bdf36ce_o.jpg"};
    newTuit.avatarImg = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
};

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits();
    res.json(tuits);
};

const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updatedTuit);
    res.send(status);
};

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    res.send(status);
};

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}