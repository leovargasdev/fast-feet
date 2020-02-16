import * as Yup from 'yup';

import Delivery from '../models/Delivery';
import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryProblemController {
  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    // ERRO: Campos da requisição incompletos
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    const { delivery_id } = req.params;

    // Validando entraga
    const isDelivery = await Delivery.findByPk(delivery_id);
    if (!isDelivery)
      return res.status(400).json({ error: 'Delivery is not available.' });

    const { description } = await DeliveryProblem.create({
      delivery_id,
      ...req.body,
    });

    return res.json({ description, product_delivery: isDelivery.product });
  }

  async index(req, res) {
    const { delivery_id } = req.params;
    const deliveryProblem = await DeliveryProblem.findAll({
      where: { delivery_id },
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

export default new DeliveryProblemController();
