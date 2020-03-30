
import {format} from 'date-fns';

import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';

class DeliveriesDeliveryman{
  async index(req, res){
    const deliveries = await Delivery.findAll({
      where: {deliveryman_id: req.userId},
      attributes: ['id','status', 'createdAt'],
      include: {
        model: Recipient,
        as: 'recipient',
        attributes: ['city']
      }
    });
    const data = deliveries.map((delivery) => {
      const {createdAt, status, id, recipient: {city}} = delivery;
      return {
        id, city, status,
        date: format(createdAt, 'dd/MM/yyyy'),
      }
    });
    return res.json(data);
  }
}

export default new DeliveriesDeliveryman();