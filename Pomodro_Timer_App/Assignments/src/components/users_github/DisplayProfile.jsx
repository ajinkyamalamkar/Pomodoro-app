import React from 'react';
import moment from 'moment';
import {
  Box,
  Container,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';

function DisplayProfile({data}) {
  function Feature({
    Username,
    Name,
    public_repos,
    public_gists,
    date,
    ...rest
  }) {
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Image src={data.avatar_url} alt="" w={300} ml={120} />
        <Heading fontSize="xl" mt={5}>{Username}</Heading>
        <Text mt={4}>{Name}</Text>

        <TableContainer mt={5}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>No. of public repos</Th>
                <Th>No. of public gists</Th>
                <Th>Profile created at</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{data.public_repos}</Td>
                <Td>{data.public_gists}</Td>
                <Td>{moment (data.created_at).format ('YYYY-MM-DD')}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
  return (
    <Container maxW="2xl" mt={10}>
      <VStack spacing={8}>
        <Heading fontSize="xl" size="sm" textAlign="end">
          users Github public information
        </Heading>
        <Feature
          Username={data.login}
          Name={data.name}
          public_repos={data.public_repos}
          public_gists={data.public_gists}
          date={moment (data.created_at).format ('YYYY-MM-DD')}
        />
      </VStack>
    </Container>
  );
}

export default DisplayProfile;
