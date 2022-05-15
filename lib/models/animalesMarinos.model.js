const execQuery = require('./../helpers/execQuery');
const TYPES = require('tedious').TYPES;

const addAnimal = (animalData) => {
    const {
        id,
        nameComun,
        nameScientist,
        tipo,
        habitat,
        description,
        urlImage,
    } = animalData;
    const query = `
        INSERT INTO [dbo].[animalesMarinos] (id,nameComun,nameScientist,tipo,habitat,description,urlImage)
        VALUES (@id,@nameComun,@nameScientist,@tipo,@habitat,@description,@urlImage)
    `;
    const parameters = [
        {name: 'id', type: TYPES.Int.UniqueIdentifier, value: id},
        {name: 'nameComun', type: TYPES.VarChar, value: nameComun},
        {name: 'nameScientist', type: TYPES.VarChar, value: nameScientist},
        {name: 'tipo', type: TYPES.VarChar, value: tipo},
        {name: 'habitat', type: TYPES.VarChar, value: habitat},
        {name: 'description', type: TYPES.VarChar, value: description},
        {name: 'urlImage', type: TYPES.VarChar, value: urlImage},
    ];
    return execQuery.execWriteCommand(query, parameters);
};

const updateAnimal = (animalData) => {
    const {
        id,
        nameComun,
        nameScientist,
        tipo,
        habitat,
        description,
        urlImage,
    } = animalData;
    const query = `
        UPDATE [dbo].[animalesMarinos]
        SET nameComun=@nameComun, nameScientist=@nameScientist, tipo=@tipo, habitat=@habitat, description=@description, urlImage=@urlImage
        WHERE id=@id
    `;
    const parameters = [
        {name: 'id', type: TYPES.Int.UniqueIdentifier, value: id},
        {name: 'nameComun', type: TYPES.VarChar, value: nameComun},
        {name: 'nameScientist', type: TYPES.VarChar, value: nameScientist},
        {name: 'tipo', type: TYPES.VarChar, value: tipo},
        {name: 'habitat', type: TYPES.VarChar, value: habitat},
        {name: 'description', type: TYPES.VarChar, value: description},
        {name: 'urlImage', type: TYPES.VarChar, value: urlImage},
    ];
    return execQuery.execWriteCommand(query, parameters);
};

const deleteAnimal = (animalID) => {
    const query = `
        DELETE FROM [dbo].[animalesMarinos]
        WHERE id = @id
    `;
    const parameters = [
        {name: 'id', type: TYPES.Int.UniqueIdentifier, value: id}
    ];
    return execQuery.execWriteCommand(query, parameters);
};

const allAnimal = () => {
    const query = `
        SELECT * FROM [dbo].[animalesMarinos]
    `;
    return execQuery.execReadCommand(query);
};

const getByIDAnimal = (id) => {
    const query = `
        SELECT * FROM [dbo].[animalesMarinos]
        WHERE id = @id
    `;

    const parameters = [
        {name: 'id', type: TYPES.Int.UniqueIdentifier, value: id},
    ];

    return execQuery.execReadCommand(query, parameters);
};

module.exports = {
    addAnimal,
    updateAnimal,
    deleteAnimal,
    allAnimal,
    getByIDAnimal,
};