import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cep: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
        complement: Sequelize.STRING,
        adress: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${this.street}, ${this.number}, ${this.city} - ${this.state}`;
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Recipient;
