module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'deliverymen',
      [
        {
          name: 'Breno Melo Silva',
          email: 'breno@fastfeet.com',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 4,
        },
        {
          name: 'Douglas Cardoso Barros',
          email: 'douglas.barros@fastfeet.com',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 2,
        },
        {
          name: 'Enzo Azevedo Oliveira',
          email: 'primeiro_enzo@fastfeet.com',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 3,
        },
        {
          name: 'Livia Cavalcanti Souza',
          email: 'livia168@fastfeet.com',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 1,
        },
        {
          name: 'Pedro Carvalho Melo',
          email: 'pedo.melo@fastfeet.com',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 5,
        },
        {
          name: 'Gabrielle Rodrigues Barbosa',
          email: 'gabizinha1999@fastfeet.com',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 6,
        },
        {
          name: 'Nicolas Rocha Almeida',
          email: 'rochanicolas@fastfeet.com',
          created_at: new Date(),
          updated_at: new Date(),
          avatar_id: 7,
        },
      ],
      {}
    );
  },

  down: () => {},
};
