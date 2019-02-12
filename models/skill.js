const skills = [
    {skill: "kicking ass"},
    {skill: "learning"},
    {skill: "laughing"}

];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, skill) {
    skills[id] = skill;
}

function deleteOne(id) {
    skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
}

function getOne(id) {
    return skills[id];
}

function getAll(){
    return skills;
}