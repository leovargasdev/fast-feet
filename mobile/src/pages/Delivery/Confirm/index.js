import PropTypes from 'prop-types';
import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/MaterialIcons';

import previewImage from '~/assets/preview.png';

import Camera from './InputCamera';
import BoxNavigate from '~/pages/Delivery/BoxNavigate';

import {Preview, CameraButton, BtnSubmit} from './styles';

import api from '~/services/api';

export default function ConfirmDelivery({navigation, route}) {
  const {id} = route.params;
  const [cameraOpen, setCameraOpen] = useState(false);
  const [preview, setPreview] = useState(previewImage);
  const [fileId, setFileId] = useState(-1);

  function loadPreview(imageId, url) {
    setFileId(imageId);
    setPreview({uri: url});
    setCameraOpen(false);
  }

  async function handleSubmit() {
    if (fileId === -1) {
      Snackbar.show({
        text: 'Por favor, inclua uma foto da assinatura do destinatário!',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#E7BA40',
      });
    } else {
      try {
        await api.put(`delivery/${id}`, {
          end_date: new Date(),
          signature_id: fileId,
        });
        navigation.goBack();
        Snackbar.show({
          text: 'A entrega foi confirmada com sucesso!',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: '#79b791',
        });
      } catch (error) {
        Snackbar.show({
          text: 'Não foi possível confirmar a entrega!',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: '#e50000',
        });
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
