const animalsRoute = require('express').Router();
const {v4: uuidv4} = require('uuid');
const animalsModel = require('./../models/animalesMarinos.model');

animalsRoute.get('/', async(req, res) => {
    animalsModel.allAnimal()
    .then(data => {
        res.status(200).json({ data });
    })
    .catch(error => {
        res.status(500).json({ error });
    });
});

animalsRoute.get('/:id', async (req, res) => {
    const {id: animalID} = req.params;
    animalsModel.getByIDAnimal(animalID)
    .then(data => {
        if(data.length > 0) {
            res.status(200).json({ data: { ...data[0] } });
        }
        else {
            res.status(404).json({ error: 'No se encuentra esta tarea' });
        }
    })
    .catch(error => {
        res.status(500).json({error});
    });
});

animalsRoute.post('/', async (req, res) => {
    const animalID = uuidv4();
    const {
        nameComun,
        nameScientist,
        tipo,
        habitat,
        description,
        urlImage,
    } = req.body;
    animalsModel.addAnimal({
        id,
        nameComun,
        nameScientist,
        tipo,
        habitat,
        description,
        urlImage,
    })
    .then((rowCount, more) => {
        res.status(200).json({
            data: {
                rowCount,
                more,
                animalID,
            },
        });
    })
    .catch(error => {
        res.status(500).json({error});
    });
});

animalsRoute.put('/:id', async (req, res) => {
    const {id: animalID} = req.params;
    const {
        nameComun,
        nameScientist,
        tipo,
        habitat,
        description,
        urlImage,
    } = req.body;
    animalsModel.updateAnimal({
        id,
        nameComun,
        nameScientist,
        tipo,
        habitat,
        description,
        urlImage,
    })
    .then((rowCount, more) => {
        res.status(200).json({
            data: {
                rowCount,
                more,
                animalID,
            },
        });
    })
    .catch(error => {
        res.status(500).json({error});
    });
});


animalsRoute.delete('/:id', async (req, res) => {
    const {id: animalID} = req.params;
    animalsModel.deleteAnimal(animalID)
    .then((rowCount, more) => {
        res.status(200).json({ rowCount, more });
    })
    .catch(error => {
        res.status(500).json({ error });
    })
});

module.exports = animalsRoute;