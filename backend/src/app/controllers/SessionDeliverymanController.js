import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import Deliveryman from '../models/Deliveryman';
import File from '../models/File';
import authConfig from '../../config/auth';

class SessionDeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });
    // ERRO: Campos da requisição incompletos
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    const { id } = req.body;

    const deliveryman = await Deliveryman.findByPk( id, 
      {
        attributes: ['id', 'name', 'email', 'createdAt'],
        include: {
          model: File,
          as: 'avatar',
          attributes: ['url', 'path', 'id'],
        },
      });

    if (!deliveryman) return res.status(400).json({ error: 'Deliveryman not found' });

    return res.json({
      deliveryman,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionDeliverymanController();
