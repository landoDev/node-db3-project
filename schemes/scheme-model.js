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
    //select sch.scheme_name, stp.step_number, stp.instructions from steps as stp join schemes as sch on stp.scheme_id = sch.id where sch.id = 2 order by stp.step_number;
    return db.select('sch.scheme_name', 'stp.step_number', 'stp.instructions')
    .from('steps as stp')
    .join('schemes as sch', 'stp.scheme_id = sch.id')
    .orderBy('stp.step_number')
    .where({id})
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