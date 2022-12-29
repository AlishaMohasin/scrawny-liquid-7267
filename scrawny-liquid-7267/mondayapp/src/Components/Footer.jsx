import {
    Button,
    ButtonGroup,
    Container,
    Divider,
    IconButton,
    Input,
    Stack,
    Text,
    Image
  } from '@chakra-ui/react'
  import * as React from 'react'
  import {  FaLinkedin, FaTwitter,FaFacebook ,FaYoutube,FaInstagram} from 'react-icons/fa'

  
export const Footer = () => (
      <div style={{width:"100%"}}>
    <Container as="footer" >
      <Stack
        spacing="8"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        py={{ base: '12', md: '16' }}
      >
        <Stack spacing={{ base: '6', md: '8' }} align="start">
       <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"/>
          <Text color="muted">Accessibility statement</Text>
        </Stack>
        <Stack
          direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
          spacing={{ base: '12', md: '8' }}
        >
          <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36" flex="1">
             
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">About us</Button>
                <Button variant="link">Careers</Button>
                              <Button variant="link">Pricing</Button>
                              <Button variant="link">Investor relations</Button>
                              <Button variant="link">Contact sales</Button>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
            
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">Privacy</Button>
                <Button variant="link">Terms</Button>
                              <Button variant="link">Become a partner</Button>
                              <Button variant="link">Blog</Button>
                              <Button variant="link">Contact us</Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing="4">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Stay up to date
            </Text>
            <Stack spacing="4" direction={{ base: 'column', sm: 'row' }} maxW={{ lg: '360px' }}>
              <Input placeholder="Enter your email" type="email" required />
              <Button variant="primary" type="submit" flexShrink={0}>
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
        All rights reserved   &copy; monday.com.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="#" aria-label="facebook" icon={<FaFacebook fontSize="1.25rem" />} />
                  <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
                  <IconButton as="a" href="#" aria-label="Youtube" icon={<FaYoutube fontSize="1.25rem" />} />
                  <IconButton as="a" href="#" aria-label="instagram" icon={<FaInstagram fontSize="1.25rem" />} />
        </ButtonGroup>
      </Stack>
        </Container>
        </div>
  )