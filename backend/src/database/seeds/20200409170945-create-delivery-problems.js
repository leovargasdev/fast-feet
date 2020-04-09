module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'delivery_problems',
      [
        {
          delivery_id: 7,
          description: 'Produto muito grande',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          delivery_id: 3,
          description: 'Destinatário Ausente',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          delivery_id: 5,
          description: 'Endereço de dificíl acesso',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          delivery_id: 7,
          description: 'Destinatário Ausente',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
