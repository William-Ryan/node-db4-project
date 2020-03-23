exports.seed = function(knex) {

  return knex('recipes').insert([
    {recipe_name: 'Scrambled Eggs', description:'Eggs cooked well and then scrambled', steps:'Step 1 - Crack eggs into bowl then stir, Step 2 - Heat frying pan on stove then pour in stirred eggs, Step 3 - Cook eggs on low for about 10 minutes while scrambling, Step - 4 Once cooked well then place on plate'},
    {recipe_name: 'Turkey and Cheese Sandwich', description:'A cold sandwich made with turkey and cheese', steps: 'Step 1 - Grab bread, turkey, and cheese then place them together, Step 2 - grab 2 slices of bread, a preferred amount of turkey, and cheese, Step 3 - Place turkey and cheese on bottom slice of bread once done place top slice to sandwich the turkey and cheese, Step - 4 Enjoy and Eat'},
    {recipe_name: 'Pizza Hotpockets', description:'Microwave sandwiches with pepperoni and cheese', steps:'Step 1 - Find the directions, Step - 2 Follow the directions, Step 3 - Wait for it to cool or you will feel pain'}
  ])
};
