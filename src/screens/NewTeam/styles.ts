import theme from '@theme/index';
import styled from 'styled-components/native';

  export const Container = styled.View`
  flex:1;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  
  `;

  export const Title = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
  font-size: 40px;
  `;

  export const HeaderContainer = styled.View`
  background-color: ${({theme}) => theme.COLORS.PURPLE_500};
  width: 100%;
  height: 173px;
  padding-top: 54px;
  padding-bottom: 24px;
  `;

  export const Content = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: space-between;
  `