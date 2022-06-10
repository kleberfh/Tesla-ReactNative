import React from "react";
import {
  Box,
  Flex,
  Center, ScrollView, Text,
} from "native-base";
import SideCar from "../CarAssets/SideCar";
import BatteryIcon from "../BatteryIcon";

export default function Home() {
  return (
    <Flex
      flex={1}
      backgroundColor={{
        linearGradient: {
          end: [0, 1],
          start: [0, 0],
          colors: ['#2A2D32', '#131313'],
        },
      }}
    >
      <ScrollView
        padding={4}
      >
        <Flex
          mt={12}
          flexDirection={'row'}
        >
          <Flex
            flexDirection={'column'}
          >
            <Text
              color={'#FFF'}
              fontSize={'3xl'}
              fontWeight={'bold'}
            >
              Kleber's tesla
            </Text>
            <Box
              opacity={30}
              alignItems={'center'}
              flexDirection={'row'}
            >
              <BatteryIcon status={70} />
              <Text
                ml={2}
                fontSize={'md'}
                color={'#EBEBF5'}
              >
                187 km
              </Text>
            </Box>
          </Flex>
        </Flex>
        <SideCar />
      </ScrollView>
    </Flex>
  )
};