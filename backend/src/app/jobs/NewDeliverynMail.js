import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

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
        date: format(new Date(), "dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        }),
      },
    });
  }
}

export default new NewDeliverynMail();
