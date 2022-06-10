import React, {useRef, useState} from "react";
import {
  Flex,
  Text,
  Center,
  Pressable, Box
} from "native-base";
import * as Haptics from 'expo-haptics';
import {MotiView} from "moti";
import CarOff from "../CarAssets/CarOff";
import { Audio } from 'expo-av';
import AnimatedLottieView from "lottie-react-native";
import {Ionicons} from "@expo/vector-icons";

export default function Main({ unlockCar }) {
  const padlock_animation = useRef(null);

  const [isLocked, setIsLocked] = useState(true);

  const soundPaths = {
    on: require('../../assets/sounds/car_on.wav'),
    off: require('../../assets/sounds/car_off.wav')
  }

  const playSound = async (type) => {
    const { sound } = await Audio.Sound.createAsync(soundPaths[type]);
    await sound.playAsync();
    setTimeout(() => {
      sound.unloadAsync();
    }, 1000)
  }

  const animatePadLock = async () => {
    // await playSound(isLocked ? 'on' : 'off');
    // await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (isLocked) {
      padlock_animation.current?.play(0, 30);
    } else {
      padlock_animation.current?.play(30, 60);
    }
    setIsLocked(!isLocked);
    setTimeout(() => {
      unlockCar();
    }, 800)
  }

  return (
    <Flex
      flex={1}
      backgroundColor={{
        linearGradient: {
          colors: ['#292C31', '#000000', '#000000', '#17181A'],
          start: [0, 0],
          end: [0, 1],
        },
      }}
    >
      <Center
        flex={1}
      >
        <CarOff />
      </Center>
      <Pressable
        px={4}
        py={3}
        w='3/6'
        mx='auto'
        shadow={9}
        bottom={20}
        rounded='full'
        bgColor='#17171C'
        alignSelf='center'
        alignItems='center'
        position='absolute'
        flexDirection='row'
        onPress={animatePadLock}
        style={{
          background: 'linear-gradient(225deg, #333333, #2b2b2b)',
          boxShadow:  '-15px 15px 30px #252525, 15px -15px 30px #3b3b3b'
        }}
      >
        <MotiView
          from={{ translateX: 0 }}
          animate={{ translateX: isLocked ? 0 : 100 }}
          transition={{ type: 'timing' }}
        >
          <Box
            shadow={5}
            rounded='full'
            backgroundColor={'rgb(33,35,35)'}
          >
            <Box
              m={1}
              shadow={5}
              rounded='full'
              backgroundColor={{
                linearGradient: {
                  end: [0, 1],
                  start: [0.8, 0],
                  colors: ['#141515', '#2E3236'],
                },
              }}
            >
              <Box m={2}>
                <AnimatedLottieView
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  loop={false}
                  autoPlay={false}
                  ref={padlock_animation}
                  source={require('../../assets/animations/padlock.json')}
                />
              </Box>
            </Box>
          </Box>
        </MotiView>
        <MotiView
          from={{ opacity: 1 }}
          transition={{ type: 'timing' }}
          animate={{ opacity: isLocked ? 1 : 0 }}
        >
          <Text
            ml={4}
            color='#FFF'
            opacity={60}
            fontSize='2xl'
            fontWeight='semibold'
          >
            Unlock
          </Text>
        </MotiView>
      </Pressable>
    </Flex>
  )
};