
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        {
          VIN: '1253HIG776K',
          make: 'BMW',
          model: 'S360',
          mileage: 123423.45,
          transmission_type: 'automatic',
          status: 'clean'
        },
        {
          VIN: '1253HPG776G',
          make: 'TOYOTA',
          model: 'premio',
          mileage: 123423.63,
          transmission_type: 'automatic',
          status: 'salvage'
        },
        {
          VIN: '1253HPG786M',
          make: 'Ford',
          model: 'M30',
          mileage: 234423.45,
          transmission_type: 'automatic',
          status: 'salvage'
        },
      ]);
    });
};
