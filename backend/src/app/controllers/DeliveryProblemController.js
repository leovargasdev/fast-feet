import * as Yup from 'yup';

import Delivery from '../models/Delivery';
import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryProblemController {
  async store(req, res) {
    const schema = Yup.object().shape({
      delivery_id: Yup.number().required(),
      description: Yup.string().required(),
    });

    // ERRO: Campos da requisição incompletos
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    // Validando entraga
    const isDelivery = await Delivery.findByPk(req.body.delivery_id);
    if (!isDelivery)
      return res.status(400).json({ error: 'Delivery is not available.' });

    const { description } = await DeliveryProblem.create(req.body);

    return res.json({ description, product_delivery: isDelivery.product });
  }
}

export default new DeliveryProblemController();
