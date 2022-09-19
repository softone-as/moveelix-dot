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

import Image from 'next/image';
import { useRouter } from 'next/router';
import githubLogo from '../public/assets/github-logo.png';
import googleLogo from '../public/assets/google-logo.png';
import { useAuth } from '../src/context/auth';

interface UserTypes {
    email: string;
    password: string;
}

const SignUp: NextPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputs, setInputs] = useState({ email: '', password: '' });

    const { signUp, user } = useAuth();
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
            await signUp(email, password);
            router.push('/');
        } catch (error) {
            throw error;
        }
    };

    return (
        <Layout>
            <HeadNext title='Register' />
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
                    Join with us in Moveelix!
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
                            Register
                        </ButtonComponent>
                        <Link href='/Login' _hover={{ textDecoration: 'none' }}>
                            <ButtonComponent
                                rounded='lg'
                                variant='secondary'
                                width='full'
                            >
                                Already have account? Login!
                            </ButtonComponent>
                        </Link>
                    </Stack>
                </form>
            </Box>
        </Layout>
    );
};

export default SignUp;
