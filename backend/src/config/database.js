module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'fastFeet',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
