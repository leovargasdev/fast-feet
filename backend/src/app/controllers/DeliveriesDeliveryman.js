import { Op } from 'sequelize';

import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';

class DeliveriesDeliveryman {
  async index(req, res) {
    const { pending } = req.query;
    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id: req.userId,
        canceled_at: null,
        end_date: pending.includes('true')
          ? { [Op.eq]: null }
          : { [Op.ne]: null },
      },
      attributes: ['id', 'status', 'createdAt', 'end_date', 'start_date'],
      include: {
        model: Recipient,
        as: 'recipient',
        attributes: ['city'],
      },
      sort: ['createdAt'],
    });

    return res.json(deliveries);
  }
}

export default new DeliveriesDeliveryman();
