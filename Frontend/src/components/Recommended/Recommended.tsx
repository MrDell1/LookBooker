import { Flex } from "@chakra-ui/react";
import { Card } from "@components/Card/Card";
import { ReactElement } from "react";

export const Recommended = (): ReactElement => {
  return (
    <Flex gap="16" justifyContent="space-between" w="full">
      <Card name="Barber Jan" />
      <Card name="Barber Adam" />
      <Card name="Barber Kasia" />
    </Flex>
  );
};
