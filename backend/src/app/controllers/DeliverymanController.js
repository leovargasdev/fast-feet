import * as Yup from 'yup';
import { Op } from 'sequelize';

import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      name: Yup.string().required(),
      avatar_id: Yup.number().required(),
    });

    // ERRO: Campos da requisição incompletos
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    // Verificando o se email já não está cadastrado em algum entregador
    const isEmail = await Deliveryman.findOne({
      where: { email: req.body.email },
    });
    if (isEmail)
      return res
        .status(400)
        .json({ error: 'Email is not available.', type: 'email' });

    // Verificando o se o avatar existe
    const isAvatar = await File.findByPk(req.body.avatar_id);
    if (!isAvatar)
      return res
        .status(400)
        .json({ error: 'Avatar does not exists.', type: 'avatar' });

    const { id, email, name } = await Deliveryman.create(req.body);
    return res.json({ id, email, name });
  }

  async update(req, res) {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);
    if (!deliveryman)
      return res.status(400).json({ error: 'Deliveryman does not exists.' });

    const { email, avatar_id } = req.body;

    // Verificando o se email já não está cadastrado em algum entregador
    const isEmail = email && (await Deliveryman.findOne({ where: { email } }));
    if (isEmail && email !== deliveryman.email)
      return res.status(400).json({ error: 'Email is not available.' });

    // Verificando o se o avatar existe
    const isAvatar = avatar_id && (await File.findByPk(avatar_id));
    if (!isAvatar && avatar_id)
      // Testar se o campo foi preenchido
      return res.status(400).json({ error: 'Avatar does not exists.' });

    await deliveryman.update(req.body);
    return res.json({ deliveryman });
  }

  async index(req, res) {
    const { name, page } = req.query;
    const { id } = req.params;
    if (id) {
      const deliveryman = await Deliveryman.findByPk(id, {
        attributes: ['name', 'email'],
        include: {
          model: File,
          as: 'avatar',
          attributes: ['url', 'path', 'id'],
        },
      });
      return res.json(deliveryman);
    }
    const deliverymen = await Deliveryman.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      order: ['id'],
      limit: 10,
      offset: (page - 1) * 10,
      attributes: ['name', 'email', 'id'],
      include: {
        model: File,
        as: 'avatar',
        attributes: ['id', 'url', 'path'],
      },
    });

    return res.json(deliverymen);
  }

  async show(req, res) {
    const deliverymen = await Deliveryman.findAll({
      order: ['name'],
      attributes: ['name', 'id'],
    });
    const data = deliverymen.map(d => {
      return {
        value: d.id,
        label: d.name,
      };
    });
    return res.json(data);
  }

  async delete(req, res) {
    const { id } = req.params;
    await Deliveryman.destroy({ where: { id } });
    return res.json({ message: 'Deliveryman successfully removed' });
  }
}

export default new DeliverymanController();
