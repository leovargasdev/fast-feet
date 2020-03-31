import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';

class DeliveriesDeliveryman {
  async index(req, res) {
    const deliveries = await Delivery.findAll({
      where: { deliveryman_id: req.userId, canceled_at: null },
      attributes: ['id', 'status', 'createdAt', 'end_date', 'start_date'],
      include: {
        model: Recipient,
        as: 'recipient',
        attributes: ['city'],
      },
    });

    return res.json(deliveries);
  }
}

export default new DeliveriesDeliveryman();
