exports.seed = function(knex) {

  return knex('ingredients').insert([
    {ingredient: 'Eggs', measurement: '2'},
    {ingredient: 'Bread', measurement:'2 slices'},
    {ingredient: 'Turkey', measurement:'Preference'},
    {ingredient:'Cheese', measurement:'At least 2 slices'},
    {ingredient:'Hot Pockets', measurement:'At least 2'}
  ])
};

