import { Flex, Image, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import card from "./assets/card.png";

type Props = {
  name: string;
};

export const Card = ({ name }: Props): ReactElement => {
  return (
    <Flex flexDir="column" gap="4">
      <Image src={card} />
      <Text fontWeight="semibold">{name}</Text>
    </Flex>
  );
};
