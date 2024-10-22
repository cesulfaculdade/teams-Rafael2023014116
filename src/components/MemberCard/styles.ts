import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 44px;
    ${({theme}) => css`
        background-color: ${theme.COLORS.GRAY_100};
        border-color: ${theme.COLORS.GRAY_200};
    `}
  border-width: 1px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
  margin-bottom: 14px;
`;

export const Name = styled.Text`
flex: 1;
${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_500};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`;