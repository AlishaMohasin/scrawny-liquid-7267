import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import AvatarDisplay from "./AvatarDisplay";
import StatusDisplay from "./StatusDisplay";
import ProgressDisplay from "./ProgressDisplay";
import PriorityDisplay from "./PriorityDisplay";
import axios from "axios";


const Tabular = ({ data,handledelete }) => {
 
  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Category</Th>
              <Th>Title</Th>
              <Th>Owner</Th>
              <Th>PERSON</Th>
              <Th>status</Th>
              <Th isNumeric>Priority</Th>
              <Th isNumeric>Progress</Th>

              <Th>Timestamp</Th>
              
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((ele) => (
              <Tr key={ele.id}>
                <Td>{ele.category}</Td>
                <Td>{ele.title}</Td>
                <Td>{ele.owner}</Td>
                <Td>
                  <AvatarDisplay data={ele.avatar} />
                </Td>
                <Td>
                  <StatusDisplay status={ele.status} />
                </Td>
                <Td>
                  <PriorityDisplay priority={ele.priority} />
                </Td>
                <Td>
                  <ProgressDisplay progress={ele.progress} />
                </Td>
                <Td>{ele.timestamp}</Td>
                <Td>
                  <Button onClick={()=>handledelete(`${ele.id}`)} >X</Button>
                </Td>
              
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tabular;
