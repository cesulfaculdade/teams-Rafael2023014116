import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  `;

  export const HeaderContainer = styled.View`
  background-color: ${( props ) => props.theme.COLORS.PURPLE_500 };
  width: 100%;
  padding-top: 54px;
  padding-bottom: 24px;
  `;

  export const Content = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: space-between;

  `;

  export const InputContainer = styled.View`
  flex-direction: row;
  `;