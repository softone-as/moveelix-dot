import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Highlight,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Stack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { FormEvent, useEffect, useState } from 'react';
import ButtonComponent from '../src/components/shared/Button';
import HeadNext from '../src/components/shared/HeadNext';
import Layout from '../src/layout';

import githubLogo from '../public/assets/github-logo.png';
import googleLogo from '../public/assets/google-logo.png';
import Image from 'next/image';
import { useAuth } from '../src/context/auth';
import { useRouter } from 'next/router';
import { githubProvider, googleProvider } from '../src/config/firebase';

interface UserTypes {
    email: string;
    password: string;
}

const Login: NextPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputs, setInputs] = useState({ email: '', password: '' });

    const { signIn, user, signInWithProvider } = useAuth();
    const router = useRouter();

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
        try {
            await signIn(email, password);
            router.push('/');
        } catch (error) {
            throw error;
        }
    };

    const handleLoginWithGoogle = async () => {
        try {
            await signInWithProvider(googleProvider);
            router.push('/');
        } catch (error) {
            throw error;
        }
    };

    const handleLoginWithGithub = async () => {
        try {
            await signInWithProvider(githubProvider);
            router.push('/');
        } catch (error) {
            throw error;
        }
    };

    return (
        <Layout>
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
            <Box>
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
                            <FormHelperText textAlign='right'>
                                <Link>forgot password?</Link>
                            </FormHelperText>
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
                            onClick={handleLoginWithGithub}
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
