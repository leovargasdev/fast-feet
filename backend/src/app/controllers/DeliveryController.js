import * as Yup from 'yup';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import File from '../models/File';

class DeliveryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string().required(),
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
    });

    // ERRO: Campos da requisição incompletos
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    const { recipient_id, deliveryman_id } = req.body;

    // Validando entregador
    const isDeliveryman = await Deliveryman.findByPk(deliveryman_id);
    if (!isDeliveryman)
      return res.status(400).json({ error: 'Deliveryman is not available.' });

    // Validando destinatário
    const isRecipient = await Recipient.findByPk(recipient_id);
    if (!isRecipient)
      return res.status(400).json({ error: 'Recipient does not exists.' });

    const delivery = await Delivery.create(req.body);

    return res.json(delivery);
  }

  async index(req, res) {
    const deliveries = await Delivery.findAll({
      where: { canceled_at: null },
      attributes: ['id', 'product'],
      include: [
        { model: Recipient, as: 'recipient', attributes: ['name', 'cep'] },
        {
          model: Deliveryman,
          as: 'deliverymen',
          attributes: ['name', 'email'],
          include: {
            model: File,
            as: 'avatar',
            attributes: ['id', 'url'],
          },
        },
      ],
    });
    return res.json(deliveries);
  }
}

export default new DeliveryController();
