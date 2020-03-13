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
    const { id } = req.params;
    if (id) {
      const recipient = await Recipient.findByPk(id, {
        attributes: [
          'name',
          'cep',
          'state',
          'city',
          'street',
          'number',
          'complement',
        ],
      });
      return res.json(recipient);
    }
    const { name, page } = req.query;
    const recipients = await Recipient.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      order: ['id'],
      limit: 10,
      offset: (page - 1) * 2,
    });
    return res.json(recipients);
  }

  async show(req, res) {
    const recipients = await Recipient.findAll({
      order: ['name'],
      attributes: ['name', 'id'],
    });
    const data = recipients.map(recipient => {
      return { value: recipient.id, label: recipient.name };
    });
    return res.json(data);
  }

  async update(req, res) {
    const { id } = req.params;
    const recipient = await Recipient.findByPk(id);
    if (!recipient)
      return res.status(400).json({ error: 'Recipient does not exists.' });

    const schema = Yup.object().shape({
      name: Yup.string(),
      cep: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      street: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
    });
    // ERRO: Campos da requisição incompletos
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    await recipient.update(req.body);

    return res.json(recipient);
  }

  async delete(req, res) {
    const { id } = req.params;
    await Recipient.destroy({ where: { id } });
    return res.json({ message: 'Recipient successfully removed' });
  }
}

export default new RecipientController();
