export const addQuestions = data => {
    let entities = [];
    let keys = data[0];
    for (let info of data.slice(1)){
        let entity = {};
        for (let index in info){
            entity[keys[index]] = info[index];
        }
        if (entity.hasOwnProperty('title'))
            entities.push(entity);
    }

    return {
        type: 'add_questions',
        entities
    }
};
