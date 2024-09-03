import theme from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.View`
margin-top: 8px`;

export const Title = styled.Text`
text-align: center;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const SubTitle = styled.Text`
text-align: center;
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
color: ${({theme}) => theme.COLORS.GRAY_100};
`