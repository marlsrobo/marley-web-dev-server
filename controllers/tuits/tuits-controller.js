import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.postedBy = {username: "Marley Robinson"};
    newTuit.stats = {comments: 0,
                     retuits: 0,
                     likes: 0};
    newTuit.handle = "mrobinson";
    newTuit.title = '';
    newTuit.time = "just now";
    newTuit.attachments = {img: "profile_banner.jpg"};
    newTuit.avatarImg = "marley.JPG"
    tuits.unshift(newTuit);
    res.json(newTuit);
};

const findAllTuits = (req, res) => res.json(tuits);

const updateTuit = (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
};

const deleteTuit = (req, res) => {
    const tuitIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitIdToDelete);
    res.sendStatus(200);
};

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}