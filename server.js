const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.SERVER_PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        message: 'Welcome to the My Simple Application!'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        description: 'This is a simple application that implements routes, http methods and the views(ejs).'
    });
});

app.get('/services', (req, res) => {
    res.render('services', {
        title: 'Our Services',
        services: ['Web Development', 'Mobile Development', 'Internet of Things', 'CyberSecurity']
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Us',
        contactDetails: {
            name: 'Matthew Balinton',
            phone: '09055812027',
            email: 'matbalinton@gmail.com'
        }
    });
});

// Search this(localhost:5000) :>
app.listen((PORT), () => {
    console.log(`Server is Running at Port: ${PORT}`);
})

