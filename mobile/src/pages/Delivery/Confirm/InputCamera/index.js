import PropTypes from 'prop-types';
import Snackbar from 'react-native-snackbar';
import {RNCamera} from 'react-native-camera';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {Container, CameraButton, LoadingSpinner} from './styles';

export default function InputCamera({loadPreview}) {
  const camera = useRef(null);
  const [loading, setLoading] = useState(false);

  async function handleChange({uri}) {
    const data = new FormData();

    const name = uri.split('/Camera/')[1];

    data.append('file', {
      uri,
      name,
      type: `image/${name.split('.')[1]}`,
    });

    try {
      const response = await api.post('files', data);

      console.tron.log('handleChange', response);

      const {id, url} = response.data;

      setLoading(false);
      loadPreview(id, url);
    } catch (error) {
      Snackbar.show({
        text: 'Não foi possível carrgar a imagem!',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#e50000',
      });
    }
  }

  async function takePicture() {
    if (camera) {
      setLoading(true);
      const options = {quality: 0.5, base64: true};
      const data = await camera.current.takePictureAsync(options);
      handleChange(data);
    }
  }

  return (
    <Container>
      <RNCamera
        style={{flex: 1}}
        ref={camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        port
        androidCameraPermissionOptions={{
          title: 'Permissão para usar a câmera',
          message: 'Nós precisamos da sua permissão para usar a câmera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }}
      />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <CameraButton onPress={takePicture}>
          <Icon name="photo-camera" size={36} color="#FFF" />
        </CameraButton>
      )}
    </Container>
  );
}

InputCamera.propTypes = {
  loadPreview: PropTypes.func.isRequired,
};
