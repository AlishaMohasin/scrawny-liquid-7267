import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    useDisclosure
  } from '@chakra-ui/react'
import axios from "axios"
import { getdata, postdata } from '../Pages/Api'

let initialdata = {
    category: "",
    color: "",
    title: "",
    owner: "",
    avatar: "",
    status: "",
    priority: 0,
    progress: 0,
    description: "",
    timestamp:""
  }
const Taskbutton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formdata, setformdata] = useState(initialdata);
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [data, setdata] = useState([]);



    function handlechange(e) {
        const { value, name } = e.target;
        setformdata({
            ...formdata,
            [name]:value
        })
        
    }

    function handlesubmit(e) {
      e.preventDefault();
      alert("Added new task")
      postdata(formdata)
      formdata(initialdata)
        
    }
    
   
  return (
      <div>
             <Button onClick={onOpen} bg="#0398dc">Add task</Button>
     

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Category</FormLabel>
                          <Input ref={initialRef} placeholder='Category' onChange={handlechange} value={formdata.category} name="category"/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>color</FormLabel>
                          <Input placeholder='color' onChange={handlechange} value={formdata.color } name="color"/>
                      </FormControl>
                      <FormControl mt={4}>
              <FormLabel>title</FormLabel>
                          <Input placeholder='title' onChange={handlechange} value={formdata.title } name="title"/>
                      </FormControl>
                      <FormControl mt={4}>
              <FormLabel>owner</FormLabel>
              <Input placeholder='owner' onChange={handlechange} value={formdata.owner}  name="owner"/>
                      </FormControl>
                      <FormControl mt={4}>
              <FormLabel>avatar</FormLabel>
                          <Input placeholder='avatar' onChange={handlechange} value={formdata.avatar } name="avatar"/>
                      </FormControl>
                      <FormControl mt={4}>
              <FormLabel>Status</FormLabel>
                          <Input placeholder='status' onChange={handlechange} value={formdata.status} name="status"/>
                      </FormControl>
                      <FormControl mt={4}>
              <FormLabel>priority</FormLabel>
                          <Input placeholder='priority' onChange={handlechange} value={formdata.priority} name="priority"/>
                      </FormControl>
                      <FormControl mt={4}>
              <FormLabel>Progess</FormLabel>
                          <Input placeholder='progress' onChange={handlechange} value={formdata.progress } name="progress"/>
                      </FormControl>
                      <FormControl mt={4}>
              <FormLabel>description</FormLabel>
                          <Input placeholder='description' onChange={handlechange} value={formdata.description } name="description"/>
                      </FormControl>
                      <FormControl mt={4}>
              <FormLabel>timestamp</FormLabel>
                          <Input placeholder='timestamp' onChange={handlechange} value={formdata.timestamp } name="timestamp"/>
                      </FormControl>
                      <FormControl>
                      <Button colorScheme='blue' mr={3}  onClick={handlesubmit}>
             Add
            </Button>
                      </FormControl>
          </ModalBody>

          <ModalFooter>
         
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Taskbutton