const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

app.get('/animalesmarinos_api', async (req, res) => {
    const allExplorers =  await prisma.animalesMarinos_api.findMany({});
    res.json(allExplorers);
  });

  app.get('/animalesmarinos_api/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.animalesMarinos_api.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
  });