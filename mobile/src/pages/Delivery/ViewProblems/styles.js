import styled from 'styled-components/native';

export const TitleHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const Problems = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const Problem = styled.View`
  display: flex;
  flex-direction: column;

  margin-top: 15px;
  padding: 8px 10px;
  background: #fff;
  border-width: 1px;
  border-color: #0000001a;
  border-radius: 4px;
`;

export const Descripiton = styled.Text`
  color: #999999;
  font-size: 16px;
  line-height: 20px;
  margin-top: 5px;
`;
export const ContentData = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Data = styled.Text`
  color: #c1c1c1;
  font-size: 12px;
`;

export const NoProblems = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  background: #fff;
  padding: 10px 14px;
  border-radius: 4px;
`;
