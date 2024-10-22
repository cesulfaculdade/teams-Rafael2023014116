import theme from "@theme/index";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
${({theme}) => css`
        background-color: ${theme.COLORS.GRAY_200};
        padding: 2px 8px;
        border-radius: 999px;
    `};
`;

export const Text = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_400};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `};
`;