import * as Yup from 'yup';
import { Op } from 'sequelize';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cep: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    const { id, name, cep } = await Recipient.create(req.body);

    return res.json({ id, name, cep });
  }

  async index(req, res) {
    const { name } = req.query;
    const recipients = await Recipient.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    return res.json(recipients);
  }
}

export default new RecipientController();
