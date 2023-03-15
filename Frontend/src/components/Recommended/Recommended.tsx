import { Flex } from "@chakra-ui/react";
import { Card } from "@components/Card/Card";
import { ReactElement } from "react";

export const Recommended = (): ReactElement => {
  return (
    <Flex gap="16" justifyContent="space-between" w="full">
      <Card path="/" name="Barber Jan" />
      <Card path="/" name="Barber Adam" />
      <Card path="/" name="Barber Kasia" />
    </Flex>
  );
};
