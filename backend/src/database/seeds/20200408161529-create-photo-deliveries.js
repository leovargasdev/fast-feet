module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'files',
      [
        {
          name: 'encomenda-entregue-1.jpg',
          path: '26ff4e19def5ba3603dbf98e8c34387e.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'encomenda-entregue-2.jpg',
          path: 'f4655bd45555f1b7cbabf5052a9fda24.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
