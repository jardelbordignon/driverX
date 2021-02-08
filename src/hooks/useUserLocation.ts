/**
  Config para android no arquivo ios/NomeDoProjeto/Info.plist
  ...
  <key>NSLocationWhenInUseUsageDescription</key>
  <string>Premitir o app saber minha localização</string>
  ...
  
  Config para android no arquivo android/app/src/main/AndroidManifest.xml
  ...
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  ...

  Com as configurações prontas basta inluir na screen

  import useUserLocation from '../useUserLocation'

  const userLocation = useUserLocation()
  console.log(userLocation.latitude, userLocation.longitude)
 */
import React, { useState, useEffect } from 'react'
import { PermissionsAndroid } from 'react-native'
import Geolocation from 'react-native-geolocation-service'

export default function useUserLocation() {

  const [hasLocationPermission, setHasLocationPermission] = useState(false)
  const [userLocation, setUserLocation] = useState({latitude: 0, longitude: 0})

  async function verifyLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )
      setHasLocationPermission(granted === PermissionsAndroid.RESULTS.GRANTED)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    verifyLocationPermission()

    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        pos => setUserLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        }),
        error => console.log(error.code, error.message)
      )
    }
  }, [hasLocationPermission])

  return userLocation
}