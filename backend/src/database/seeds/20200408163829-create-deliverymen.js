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
        },
        {
          name: 'Douglas Cardoso Barros',
          email: 'douglas.barros@fastfeet.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Enzo Azevedo Oliveira',
          email: 'primeiro_enzo@fastfeet.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Livia Cavalcanti Souza',
          email: 'livia168@fastfeet.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Pedro Carvalho Melo',
          email: 'pedo.melo@fastfeet.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Marcos Lima Sousa',
          email: 'marquinhos1999@fastfeet.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Nicolas Rocha Almeida',
          email: 'rochanicolas@fastfeet.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
