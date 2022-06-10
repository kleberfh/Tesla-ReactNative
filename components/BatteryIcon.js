import React from "react";
import { FontAwesome } from '@expo/vector-icons';

export default function BatteryIcon({status}) {
  const batteryIcons = {
    'full': <FontAwesome name="battery" size={18} color="#EBEBF5" />,
    'good': <FontAwesome name="battery-3" size={18} color="#EBEBF5" />,
    'half': <FontAwesome name="battery-half" size={18} color="#EBEBF5" />,
    'low': <FontAwesome name="battery-1" size={18} color="#EBEBF5" />,
    'empty': <FontAwesome name="battery-0" size={18} color="#EBEBF5" />
  };

  const batteryMesure = () => {
    if (status >= 80) {
      return 'full';
    } else if (status >= 51 && status <= 80) {
      return 'good';
    } else if (status === 50) {
      return 'half';
    } else if (status >= 1 && status <= 50) {
      return 'low';
    } else {
      return 'empty';
    }
  }

  return batteryIcons[batteryMesure(status)];
};