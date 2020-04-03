import React, {useState} from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import previewImage from '~/assets/preview.png';

import Camera from './InputCamera';
import BoxNavigate from '~/pages/Delivery/BoxNavigate';

import {Preview, CameraButton, BtnSubmit} from './styles';

import api from '~/services/api';

export default function ConfirmDelivery({navigation, route}) {
  const {id} = route.params;
  const [cameraOpen, setCameraOpen] = useState(false);
  const [preview, setPreview] = useState(previewImage);
  const [fileId, setFileId] = useState('');

  function loadPreview(imageId, url) {
    setFileId(imageId);
    setPreview({uri: url});
    setCameraOpen(false);
  }

  async function handleSubmit() {
    if (fileId === -1) {
      Alert.alert(
        'Campos obrigatórios não preenchidos',
        'Por favor, inclua uma foto da assinatura do destinatário!',
      );
    } else {
      try {
        await api.put(`delivery/${id}`, {
          end_date: new Date(),
          signature_id: fileId,
        });
        navigation.goBack();
        Alert.alert(
          'Entrega confirmada',
          'A entrega foi confirmada com sucesso!',
        );
      } catch (error) {
        Alert.alert(
          'Erro ao confirmar entrega',
          'Não foi possível confirmar a entrega!',
        );
      }
    }
  }

  if (cameraOpen) return <Camera loadPreview={loadPreview} />;

  return (
    <BoxNavigate>
      {preview && <Preview source={preview} />}
      <CameraButton onPress={() => setCameraOpen(true)}>
        <Icon name="photo-camera" size={36} color="#fff" />
      </CameraButton>
      <BtnSubmit onPress={handleSubmit}>Enviar</BtnSubmit>
    </BoxNavigate>
  );
}

ConfirmDelivery.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
