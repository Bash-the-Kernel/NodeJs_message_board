const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

router.post('/new', (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date()
  });
  res.redirect('/');
});

router.get('/message/:id', (req, res) => {
  const message = messages[req.params.id];
  res.render('message', { title: 'Message Details', message: message });
});

module.exports = router;