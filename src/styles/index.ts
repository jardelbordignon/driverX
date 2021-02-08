import styled from 'styled-components/native'
// to end the error, just add in tsconfig.json -> "noImplicitAny": false
import MapView from 'react-native-maps'
import Pulse from 'react-native-pulse'

import theme from './theme.json'

export const Box = styled.View `
  flex: 1;
  background-color: ${props => props.bg ? theme.colors[props.bg] : 'transparent'};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.justify || 'center'};
  padding: ${props => props.padding || 0}px;
  align-items: ${props => props.align || 'center'};
  width: 100%;
  max-width: ${props => props.width || '100%'};
  max-height: ${props => props.height ? props.height + 'px' : 'auto'};
  position: ${props => props.position || 'relative'};
  top: ${props => props.top || 0}px;
  z-index: ${props => props.zIndex || 1};
`

export const Btn = styled.TouchableOpacity `
  width: 100%;
  padding: ${props => props.padding || 15}px;
  opacity: ${props => props.disabled ? 0.5 : 1};
  background: ${props => props.bg ? theme.colors[props.bg] : theme.colors.primary};
`
export const BtnTxt = styled.Text `
  text-align: center;
  color: ${props => props.color ? theme.colors[props.color] : '#000'};
`

export const Title = styled.Text `
  font-size: 20px;
  color: ${props => props.color ? theme.colors[props.color] : theme.colors.dark};
  font-weight: bold;
`
export const SubTitle = styled.Text `
  font-size: ${props => props.small ? 12 : 15}px;
  color: ${props => props.color ? theme.colors[props.color] : theme.colors.dark};
  opacity: 0.7;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`

export const PickerButton = styled.TouchableOpacity `
  width: 100%;
  height: 40%;
  margin-top: 2.5%;
  justify-content: space-around;
  align-items: center;
  border-width: 3px;
  border-style: solid;
  border-color: ${props => props.active ? theme.colors.primary : theme.colors.muted50};
  background-color: ${props => props.active ? theme.colors.primary + '80' : theme.colors.muted50};
`

export const Input = styled.TextInput `
  background-color: ${theme.colors.light};
  border: 1px solid ${theme.colors.muted};
  width: 100%;
  padding: 7px 15px;
`

export const Spacer = styled.View `
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 10}px;
`

export const AddressList = styled.FlatList `
  flex: 1;
  width: 100%;
  padding-top: 10px;
`
export const AddressItem = styled.TouchableOpacity `
  padding: 5px 0;
  align-items: flex-start;
`

export const Map = styled(MapView) `
  flex: 1;
  width: 100%;
  height: 100%;
  opacity: ${props => props.disabled ? 0.2 : 1};
`

export const Avatar = styled.Image.attrs({ elevation: 50}) `
  width: ${props => props.small ? '35px' : '50px'};
  height: ${props => props.small ? '35px' : '50px'};
  box-shadow: 0 4px 4px rgba(0,0,0,0.25);
  background: ${theme.colors.muted};
  border-radius: ${props => props.small ? '35px' : '50px'};
`

export const VerticalSeparator = styled.View `
  width: 1px;
  height: 100%;
  background: ${theme.colors.muted};
`

export const Bullet = styled.View `
  height: 10px;
  width: 10px;
  border-radius: 10px;
  margin: 0 10px 0 20px;
  background-color: ${props => props.red ? '#EF5151' : '#5FDC4A' };
`

export const PulseCicle = styled(Pulse).attrs({ color: theme.colors.primary }) ``

