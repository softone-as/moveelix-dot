import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Highlight,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { FormEvent, useEffect, useState } from 'react';
import ButtonComponent from '../src/components/shared/Button';
import HeadNext from '../src/components/shared/HeadNext';
import Layout from '../src/layout';

import Image from 'next/image';
import { useRouter } from 'next/router';
import githubLogo from '../public/assets/github-logo.png';
import googleLogo from '../public/assets/google-logo.png';
import Alerts, { AlertProps } from '../src/components/shared/Alert';
import { githubProvider, googleProvider } from '../src/config/firebase';
import { useAuth } from '../src/context/auth';
import { mapAuthCodeToMessage } from '../src/helper';

interface UserTypes {
    email: string;
    password: string;
}

const Login: NextPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputs, setInputs] = useState({ email: '', password: '' });
    const [contentAlert, setContentAlert] = useState<AlertProps>({
        status: 'error',
        title: '',
        description: '',
        isHidden: true,
    });

    const { user, signIn, signInWithProvider } = useAuth();
    const router = useRouter();

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (user) router.push('/');
    }, [router, user]);

    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLogin = async ({ email, password }: UserTypes) => {
        if (email === '' && password === '') {
            return setContentAlert({
                status: 'error',
                title: 'Error: Empty Value!',
                description: 'Please fill out the form!',
                isHidden: false,
            });
        }

        try {
            await signIn(email, password);
            setContentAlert({
                ...contentAlert,
                isHidden: true,
            });
        } catch (error: any) {
            return setContentAlert({
                status: 'error',
                title: 'Error!',
                description: mapAuthCodeToMessage(error.code),
                isHidden: false,
            });
        }
    };

    const handleLoginWithGoogle = async () => {
        try {
            await signInWithProvider(googleProvider);
        } catch (error: any) {
            return setContentAlert({
                status: 'error',
                title: 'Error!',
                description: mapAuthCodeToMessage(error.code),
                isHidden: false,
            });
        }
    };

    const handleLoginWithGithub = async () => {
        try {
            await signInWithProvider(githubProvider);
        } catch (error: any) {
            return setContentAlert({
                status: 'error',
                title: 'Error!',
                description: mapAuthCodeToMessage(error.code),
                isHidden: false,
            });
        }
    };

    return (
        <Layout>
            {/* Modal */}
            <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login with SSO</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ButtonComponent
                            rounded='lg'
                            variant='primary'
                            width='full'
                            onClick={handleLoginWithGithub}
                            my={2}
                        >
                            Login with Github{' '}
                            <Box ml={2}>
                                <Image
                                    src={githubLogo}
                                    width={20}
                                    height={20}
                                    alt='github-logo'
                                />
                            </Box>
                        </ButtonComponent>
                        <ButtonComponent
                            rounded='lg'
                            variant='primary'
                            width='full'
                            onClick={handleLoginWithGoogle}
                            my={2}
                        >
                            Login with Google{' '}
                            <Box ml={2}>
                                <Image
                                    src={googleLogo}
                                    width={20}
                                    height={20}
                                    alt='google-logo'
                                />
                            </Box>
                        </ButtonComponent>
                    </ModalBody>
                </ModalContent>
            </Modal>
            {/* End Modal */}

            <Alerts
                status={contentAlert.status}
                title={contentAlert.title}
                description={contentAlert.description}
                isHidden={contentAlert.isHidden}
            />

            <HeadNext title='Login' />
            <Heading size='lg' color={'#fff'} textAlign='center' my={10}>
                <Highlight
                    query='Moveelix'
                    styles={{
                        px: '3',
                        py: '1',
                        rounded: 'full',
                        bgGradient: 'linear(to-l, #7928CA, #FF0080)',
                    }}
                >
                    Welcome to Moveelix!
                </Highlight>
            </Heading>

            <Box w={{ base: 'auto', md: 500 }} alignItems='center' mx={'auto'}>
                <form
                    onSubmit={(e: FormEvent) => {
                        e.preventDefault();
                        handleLogin(inputs);
                    }}
                >
                    <Stack
                        spacing={4}
                        p='1rem'
                        backgroundColor='#fff'
                        boxShadow='md'
                        rounded='md'
                    >
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input
                                name='email'
                                type={'email'}
                                placeholder='Email address'
                                onChange={(e) => handleChange(e)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Password'
                                    onChange={(e) => handleChange(e)}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button
                                        h='1.75rem'
                                        size='sm'
                                        onClick={handleShowPassword}
                                    >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <ButtonComponent
                            rounded='lg'
                            type='submit'
                            variant='primary'
                            width='full'
                        >
                            Login
                        </ButtonComponent>
                        <ButtonComponent
                            rounded='lg'
                            variant='primary'
                            width='full'
                            onClick={onOpen}
                        >
                            Login with SSO
                        </ButtonComponent>
                        <Text textAlign={'center'}>
                            {' '}
                            Didn't have account yet?
                        </Text>
                        <Link
                            href='/register'
                            _hover={{ textDecoration: 'none' }}
                        >
                            <ButtonComponent
                                rounded='lg'
                                variant='secondary'
                                width='full'
                            >
                                Register
                            </ButtonComponent>
                        </Link>
                    </Stack>
                </form>
            </Box>
        </Layout>
    );
};

export default Login;
