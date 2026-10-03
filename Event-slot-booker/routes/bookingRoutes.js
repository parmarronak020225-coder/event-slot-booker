app.use(express.json());

app.get('/api/slots', (req, res) => {
    res.json({ message: 'Returning list of users' });
});

app.post('/api/slots', (req, res) => {
    const newUser = req.body;
    res.json({ message: 'User created', user: newUser });
});

app.put('/api/slots/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    res.json({ message: `User with ID ${userId} updated`, updatedUser });
});

app.delete('/api/slots/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `User with ID ${userId} deleted` });
});
