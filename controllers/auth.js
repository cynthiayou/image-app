exports.getSignup = (req, res, next)=>{
    res.status(200).send("get signup page");
};

exports.getLogin = (req, res, next)=>{
    res.status(200).send("get login page");
};

exports.postSignup = (req, res, next)=>{
    res.status(200).send("post signup page");
};

exports.postLogin = (req, res, next)=>{
    res.status(200).send("post login page");
};

exports.postLogout = (req, res, next)=>{
    res.status(200).send("post logout page");
};
