import * as Yup from 'yup';

import Queue from '../../lib/Queue';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import DeliveryProblem from '../models/DeliveryProblem';
import CancelDeliveryMail from '../jobs/CancelDeliveryMail';

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

  async delete(req, res) {
    const { delivery_id } = req.params;
    // Validando entregador
    const delivery = await Delivery.findByPk(delivery_id);
    if (!delivery)
      return res.status(400).json({ error: 'Deliveryman is not available.' });

    const deliveryman = await Deliveryman.findByPk(delivery.deliveryman_id);

    delivery.canceled_at = new Date();

    await delivery.save();

    await Queue.add(CancelDeliveryMail.key, {
      delivery,
      deliveryman,
    });

    return res.json(delivery);
  }
}

export default new DeliveryProblemController();