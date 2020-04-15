module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'files',
      [
        {
          name: 'woman.png',
          path: '2f98e9cd55fabf9863bd84016d7a228a.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'man.jpg',
          path: 'bc4f6785d34221d8d54e96991040b743.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'harry-potter.jpg',
          path: 'a4ccb0f2410fe4a9f6c5670d403baa01.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'keanu-reeves.jpg',
          path: '359315f63c9e0fe91b98c9e9928b41be.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'jakie-chan.jpg',
          path: 'bafd5b1358e101bae33fb47e63e96733.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'angelina-jolie.jpg',
          path: '5118cd10f607cd39ca2c880983d6a88e.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'christian-bale.jpg',
          path: 'fcc8bb1ce99d3717f9c6556a6fc2f5bd.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
