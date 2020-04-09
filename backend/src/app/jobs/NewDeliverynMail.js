import Mail from '../../lib/Mail';

class NewDeliverynMail {
  // Chave única ao chamar o job
  get key() {
    return 'NewDeliverynMail';
  }

  async handle({ data }) {
    const { deliveryman, delivery, recipient } = data;
    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova encomenda cadastrada',
      template: 'newdelivery',
      context: {
        name: deliveryman.name,
        product: delivery.product,
        recipient: recipient.name,
        adress: `(${recipient.cep}) ${recipient.adress}`,
      },
    });
  }
}

export default new NewDeliverynMail();
