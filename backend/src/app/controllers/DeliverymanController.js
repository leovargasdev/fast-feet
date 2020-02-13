import * as Yup from 'yup';

import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      avatar_id: Yup.number().required(),
      email: Yup.string()
        .email()
        .required(),
    });
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    const isAvatar = await File.findByPk(req.body.avatar_id);
    if (!isAvatar) return res.status(400).json({ error: true });

    const { id, name, email } = await Deliveryman.create(req.body);

    return res.json({ id, name, email });
  }
}

export default new DeliverymanController();
