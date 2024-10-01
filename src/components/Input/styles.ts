import { TextInput } from "react-native"
import styled from "styled-components/native"


export const Container = styled(TextInput)`
flex: 1;
min-height: 54px;
max-height: 54px;
height: 54px;
color: ${({theme})=> theme.COLORS.GRAY_500};
font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
border-width: 1px;
border-radius: 8px;
border-color: ${({theme})=> theme.COLORS.GRAY_300};
background-color: ${({theme})=> theme.COLORS.GRAY_100};
padding: 16px;`