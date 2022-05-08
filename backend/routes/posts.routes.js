const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post
      .find({status: 'published'})
      .select('author title image price location changed created name')
      .sort({created: -1});
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post
      .findById(req.params.id);
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/posts', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post('/posts/add', async (req, res) => {
  try {
    const {
      author,
      name,
      created,
      changed,
      status,
      title,
      text,
      image,
      price,
      phone,
      location,
    } = req.body;
    const pattern = new RegExp(
      /(<\s*(strong|em)*>(([A-z]|\s)*)<\s*\/\s*(strong|em)>)|(([A-z]|\s|\.)*)/,
    );
    const titleMatched = (title.match(pattern) || []).join('');
    const textMatched = (author.match(pattern) || []).join('');
    const locationMatched = (location.match(pattern) || []).join('');
    const emailPattern = new RegExp(
      '^[a-zA-Z0-9][a-zA-Z0-9_.-]+@[a-zA-Z0-9][a-zA-Z0-9_.-]+.{1,3}[a-zA-Z]{2,4}'
    );
    const validatedEmail = emailPattern.test(author);

    if (titleMatched.length < title.length)
      throw new Error('Invalid characters in the title...');

    if (textMatched.length < text.length)
      throw new Error('Invalid characters in the title...');

    if (location && locationMatched.length < location.length)
      throw new Error('Invalid characters in the location...');

    if (!validatedEmail) throw new Error('Wrong email!');

    if (text.length < 20 || title.length < 10)
      throw new Error('The text is too short');

    if (title && text && author && status) {
      const newPost = new Post({
        author: author,
        name: name,
        created: created,
        changed: changed,
        status: status,
        title: title,
        text: text,
        image: image,
        price: price,
        phone: phone,
        location: location,
      });
      await newPost.save();
      res.json({ message: 'OK' });
    } else {
      throw new Error('Wrong input!');
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
