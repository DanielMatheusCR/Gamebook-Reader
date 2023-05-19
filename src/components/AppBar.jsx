import React from "react";
import { HStack, IconButton, Icon, Text, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function AppBar() {
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="dark-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack bg="black" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="400">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="md" as={MaterialIcons} name="menu" color="white" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            Gamebook Reader
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="md" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="md" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="md" color="white" />} />
        </HStack>
      </HStack>
    </>
    )
}
