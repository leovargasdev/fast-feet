import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';
import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const cssActiveLink = { fontWeight: 'bold', color: '#444' };
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="fastfeet" />
          <NavLink to="/deliveries" activeStyle={cssActiveLink}>
            Encomendas
          </NavLink>
          <NavLink to="/deliverymen" activeStyle={cssActiveLink}>
            Entregadores
          </NavLink>
          <NavLink to="/recipients" activeStyle={cssActiveLink}>
            Destinatários
          </NavLink>
          <NavLink to="/delivery-problems" activeStyle={cssActiveLink}>
            Problemas
          </NavLink>
        </nav>
        <aside>
          <Profile>
            <strong>{profile.name}</strong>
            <button type="button" onClick={() => dispatch(signOut())}>
              Sair do Sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
