import Delivery from '../models/Delivery';
import DeliveryProblem from '../models/DeliveryProblem';

class DeliveriesProblemController {
  async index(req, res) {
    const deliveryProblem = await DeliveryProblem.findAll({
      attributes: ['id', 'description'],
      include: {
        model: Delivery,
        as: 'delivery',
        attributes: ['product', 'start_date'],
      },
    });

    return res.json(deliveryProblem);
  }
}

export default new DeliveriesProblemController();
