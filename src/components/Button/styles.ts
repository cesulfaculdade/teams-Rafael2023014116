import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonStyleProps;
}
export const Container = styled(TouchableOpacity)<Props>`
flex: 1;
background-color: ${({theme, type}) => type === "PRIMARY" ? theme.COLORS.GREEN_500 : theme.COLORS.RED};
min-height: 55px;
max-height: 55px;
border-radius: 8px;

justify-content: center;
align-items: center;

padding: 18px;
`;

export const Title = styled.Text`
${({theme}) => css`
 color: ${theme.COLORS.GRAY_100};
 font-family: ${theme.FONT_FAMILY.REGULAR};
 font-size: ${theme.FONT_SIZE.MD}px;
 `}
 `;