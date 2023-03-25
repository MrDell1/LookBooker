import {
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { Recommended } from "@components/Recommended/Recommended";
import SearchIcon from "@mui/icons-material/Search";
import { ReactElement } from "react";
import left from "./assets/left.png";
import lp from "./assets/lp.png";
import right from "./assets/right.png";

const LandingPage = (): ReactElement => {
  return (
    <Flex flexDir="column" pb="16">
      <Flex
        bgImage={lp}
        bgPosition="top"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="calc(100vh - 80px)"
        w="full"
      >
        <Flex
          alignItems="center"
          flexDir="row"
          gap="4"
          h="full"
          justifyContent="center"
          w="full"
        >
          <Input
            _focusVisible={{
              borderColor: "brown.400",
            }}
            bgColor="white"
            borderColor="brown.300"
            borderRadius="32px"
            fontSize="2xl"
            fontWeight="semibold"
            h="fit-content"
            placeholder="Find your hairdresser"
            py="2"
            w="96"
          />
          <Button
            _hover={{
              color: "brown.300",
            }}
            bg="transparent"
            color="white"
            fontSize="xl"
            h="16"
            transitionDuration="0.4s"
          >
            <Icon as={SearchIcon} h="full" w="full" />
          </Button>
        </Flex>
      </Flex>
      <Flex px="40" py="16" w="full">
        <Flex flexDir="column" gap="12" w="full">
          <Text color="black" fontSize="2xl" fontWeight="bold">
            RECOMMENDED
          </Text>
          <Recommended />
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="20" px="40">
        <Flex>
          <Image objectFit="contain" src={left} w="50%" />
          <Flex flexDir="column" gap="16">
            <Heading>The best specialists in your area</Heading>
            <Text fontSize="2xl">
              In LOOKBOOKER you will find the best health & beauty salons in
              your area. Find out more about them - check out their profiles in
              LOOKBOOKER, read reviews from other customers and browse their
              portfolios. Save time and do not worry about a thing!
            </Text>
            <Text fontSize="2xl" fontWeight="semibold">
              With LOOKBOOKER, booking appointments is free and easy.
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Flex flexDir="column" gap="16">
            <Heading>Make an appointment online</Heading>
            <Text fontSize="2xl">
              Do you want to make an appointment with a barber, hairdresser,
              nail stylist or massage parlour in the area? Are you looking for a
              place where the best specialists will take care of your beard,
              eyebrows or give you a relaxing massage? LOOKBOOKER is a free
              booking app that makes it easy for you to find a free appointment
              and conveniently make an appointment. No calling - you book
              anytime and from anywhere.
            </Text>
            <Text fontSize="2xl" fontWeight="semibold">
              Discover new places in your area and make appointments with
              LOOKBOOKER!
            </Text>
          </Flex>
          <Image objectFit="contain" src={right} w="50%" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
