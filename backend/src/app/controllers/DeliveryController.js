import * as Yup from 'yup';
import { parseISO, isBefore } from 'date-fns';

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

  async update(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string(),
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
      signature_id: Yup.number(),
      start_date: Yup.date(),
      end_date: Yup.date(),
      canceled_at: Yup.date(),
    });

    // ERRO: Campos da requisição incompletos
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    const { recipient_id, deliveryman_id, signature_id, start_date } = req.body;

    if (start_date) {
      const hoursStart = parseISO(start_date).getHours();
      // Testa se não é uma data do passado e se o horário está entre às 08:00 e às 18:00h
      if (
        isBefore(parseISO(start_date), new Date()) ||
        hoursStart < 8 ||
        hoursStart > 18
      )
        return res
          .status(400)
          .json({ error: 'Start date for delivery is not permited!' });
    }

    // Validando entregador
    const isDeliveryman = await Deliveryman.findByPk(deliveryman_id);
    if (!isDeliveryman && deliveryman_id)
      return res.status(400).json({ error: 'Deliveryman is not available.' });

    // Validando destinatário
    const isRecipient = await Recipient.findByPk(recipient_id);
    if (!isRecipient && recipient_id)
      return res.status(400).json({ error: 'Recipient does not exists.' });

    // Validando foto da assinatura
    const isSignature = await File.findByPk(signature_id);
    if (!isSignature && signature_id)
      return res
        .status(400)
        .json({ error: 'Photo signature does not exists.' });

    // const delivery = await Delivery.create(req.body);

    return res.json({ ok: true });
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

  async delete(req, res) {
    const { delivery_id: id } = req.params;
    await Delivery.destroy({ where: { id } });
    return res.json({ message: 'Delivery successfully removed' });
  }
}

export default new DeliveryController();
