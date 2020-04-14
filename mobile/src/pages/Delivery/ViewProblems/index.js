import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import BoxNavigate from '~/pages/Delivery/BoxNavigate';
import {
  TitleHeader,
  Problems,
  Problem,
  Descripiton,
  ContentData,
  Data,
  NoProblems,
} from './styles';

import api from '~/services/api';

export default function ViewProblems({route}) {
  const {id} = route.params;
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblemsDelivery() {
      const response = await api.get(`delivery/${id}/problems`);

      setProblems(
        response.data.map(problem => {
          return {
            dateFormatted: format(
              parseISO(problem.createdAt),
              "d 'de' MMMM 'de' yyyy",
              {locale: pt},
            ),
            ...problem,
          };
        }),
      );
    }

    loadProblemsDelivery();
  }, [id]);

  return (
    <BoxNavigate>
      <TitleHeader>Encomenda {id}</TitleHeader>
      <Problems
        data={problems}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Problem>
            <ContentData>
              <Icon
                name="event"
                size={18}
                color="#c1c1c1"
                style={{paddingEnd: 3}}
              />
              <Data>{item.dateFormatted}</Data>
            </ContentData>
            <Descripiton>{item.description}</Descripiton>
          </Problem>
        )}
        ListEmptyComponent={
          <NoProblems>Encomenda sem problemas registrados</NoProblems>
        }
      />
    </BoxNavigate>
  );
}

ViewProblems.propTypes = {
  route: PropTypes.element.isRequired,
};
