const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find(){
    return db('schemes');
}
function findById(id){
    return db('schemes').where({id}).first();
}
function findSteps(id){
    return db('steps as stp')
    .join('schemes as sch', 'sch.id', 'stp.scheme_id')
    .select('stp.step_number', 'stp.instructions', 'sch.scheme_name')
    .orderBy('stp.step_number');
}
function add(scheme){
    return db('schemes').insert(scheme, "id")
    .then(([id])=>{
        return findById(id);
    });
}
function update(changes, id){
    return db('schemes').where({id}).update(changes);
}
function remove(id){
    return db('schemes').where({id}).del();
}