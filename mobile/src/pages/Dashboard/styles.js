import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding: 0 20px;
`;
export const Header = styled.View`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  border-radius: 34px;
  width: 68px;
  height: 68px;
`;

export const Info = styled.View`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const Welcome = styled.Text`
  color: #666666;
  font-size: 12px;
  margin-bottom: -3px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #444;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #444;
  font-weight: bold;
`;

export const Deliveries = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
