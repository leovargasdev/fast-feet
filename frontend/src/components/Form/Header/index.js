import React, {memo} from 'react';
import PropTypes from 'prop-types';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';

import Title from '~/components/Title';
import { Container, Btns, BtnSubmit, BtnBack } from './styles';

function Header({ content, voltarLink='/' }) {
  return (
    <Container>
      <Title content={content} />
      <Btns>
        <BtnBack to={voltarLink}>
          <MdKeyboardArrowLeft size={22} />
          VOLTAR
        </BtnBack>
        <BtnSubmit type="submit">
          <MdCheck size={22} />
          SALVAR
        </BtnSubmit>
      </Btns>
    </Container>
  );
}

Header.propTypes = {
  content: PropTypes.string.isRequired,
};

export default memo(Header);