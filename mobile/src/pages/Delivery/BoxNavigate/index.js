import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, TopBox, Content} from './styles';

export default function BoxNavigate({children}) {
  return (
    <Wrapper>
      <TopBox />
      <Content>{children}</Content>
    </Wrapper>
  );
}

BoxNavigate.propTypes = {
  children: PropTypes.element.isRequired,
};
