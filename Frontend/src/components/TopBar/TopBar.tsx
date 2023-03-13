import { Flex, Icon, Text } from "@chakra-ui/react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

export const TopBar = (): ReactElement => {
  return (
    <Flex
      alignItems="center"
      bg="brown.400"
      color="white"
      flexDir="row"
      h="20"
      justifyContent="space-between"
      px="8"
      py="2"
    >
      <Link to={paths.landingPage}>
        <Text fontSize="2xl" fontWeight="semibold" w="28">
          Look Booker
        </Text>
      </Link>
      <Flex alignItems="center" fontSize="2xl" fontWeight="semibold" gap="8">
        <Link to={paths.hairdressers}>
          <Text
            _hover={{
              color: "brown.100",
            }}
            transitionDuration="0.2s"
          >
            HAIRDRESSERS
          </Text>
        </Link>
        <Link to={paths.beautySalons}>
          <Text
            _hover={{
              color: "brown.100",
            }}
            transitionDuration="0.2s"
          >
            BEAUTY SALONS
          </Text>
        </Link>
      </Flex>

      <Link to={paths.profile}>
        <Icon
          _hover={{
            color: "brown.100",
          }}
          as={PersonOutlineIcon}
          h="12"
          transitionDuration="0.2s"
          w="12"
        />
      </Link>
    </Flex>
  );
};
