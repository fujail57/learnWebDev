// const getId = require("get-short-id");
const shortID = require("short-id-gen");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  //   const shortID = getId();
  const shortId = shortID.generate();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortId });
}

module.exports = {
  handleGenerateNewShortURL,
};
