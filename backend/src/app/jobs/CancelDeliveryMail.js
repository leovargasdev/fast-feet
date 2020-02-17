import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

class CancelDeliveryMail {
  get key() {
    return 'CancelDeliveryMail';
  }

  async handle({ data }) {
    const {
      deliveryman: { name, email },
      delivery: { product, canceled_at },
    } = data;
    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Cancelamento de Encomenda',
      template: 'canceldelivery',
      context: {
        name,
        product,
        date: format(parseISO(canceled_at), "dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        }),
      },
    });
  }
}

export default new CancelDeliveryMail();
