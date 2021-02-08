/*
   Esse é um seletor de posição no mapa, pode ser utilizado em qualquer contexto
   ele recebe dois parametros:
   redirectTo -> é obrigatório, indica para onde irá redirecionar passando a position
   buttonText -> é opcional, o default é 'Continuar cadastro'

   exemplo: uma imobiliária, para registrar um imóvel precisa pegar a posição,
   então na lista de imóveis um botão chama o seletor informando que após pegar a posição do imóvel
   o botão deve redirecinar para o formulário cadastro passando como parametro a position

   <Button onPress={
      () => navigation.navigate('MapPositionSelector', {redirectTo: 'PropertyForm'})
   }>
 */

import React, { useState, useEffect } from 'react'
import { Marker, MapEvent } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'

import useUserLocation from '../hooks/useUserLocation'
import propertyMarker from '../images/property-marker.png'

import {
  View, StyledMapView, RectButtonNext, Text
} from '../styles/components/selectMapPosition'

export default function MapPositionSelector(props: any) {
  const [position, setPosition] = useState({latitude: 0, longitude: 0})
  const nav = useNavigation()
  const userLocation = useUserLocation()
  const selectedPosition = position.latitude !== 0

  if (!userLocation.latitude) return <Text>Loading...</Text>

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate)
  }

  const {redirectTo, buttonText} = props.route.params
  
  return (
    <View>
      <StyledMapView 
        initialRegion={{...userLocation, latitudeDelta: 0.02, longitudeDelta: 0.02 }}
        onPress={handleSelectMapPosition}>
        {/* <Marker icon={userMarker} coordinate={userPosition} /> */}

        {selectedPosition &&
          <Marker icon={propertyMarker} coordinate={position} />
        }
      </StyledMapView>
      
      {selectedPosition &&
        <RectButtonNext onPress={() => nav.navigate(redirectTo, { position })}>
          <Text>{buttonText || 'Continuar cadastro'}</Text>
        </RectButtonNext>
      }
    </View>
  )
}