import fetch from "isomorphic-unfetch";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  useColorModeValue,
} from "@chakra-ui/react";

import { Sidebar } from "ui";

const EventIndex = () => {
  return (
    <Sidebar>
      <Table
        variant="simple"
        bg={useColorModeValue("white", "gray.700")}
        borderRadius="lg"
        p={8}
      >
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Sidebar>
  );
};

EventIndex.getInitialProps = async (context) => {
  // getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/events");
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
};

export default EventIndex;
