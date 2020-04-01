import styled from 'styled-components/native';

export const TitleHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const Problems = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 80%;
`;

export const Problem = styled.View`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  margin-top: 15px;
  padding: 8px 10px;
  border-radius: 4px;
  border: 1px solid #f1f1f1;
  background: #fff;
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
  /* margin-top: 50px; */
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;
