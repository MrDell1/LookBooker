import { Flex, Image, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import card from "./assets/card.png";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  path: string;
};

export const Card = ({ name, path }: Props): ReactElement => {
  return (
    <Link to={path}>
      <Flex flexDir="column" gap="4">
        <Image src={card} />
        <Text fontWeight="semibold">{name}</Text>
      </Flex>
    </Link>
  );
};
