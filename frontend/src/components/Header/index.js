import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';
import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="fastfeet" />
          <NavLink to="/deliveries">Encomendas</NavLink>
          <NavLink to="/deliverymen">Entregadores</NavLink>
          <NavLink to="/recipients">Destinatários</NavLink>
          <NavLink to="/delivery-problems">Problemas</NavLink>
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
