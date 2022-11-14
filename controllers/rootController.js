const RootController = {
  getHome: (req, res) => {
    res.send("hello world!");
  },
};

module.exports = RootController;
