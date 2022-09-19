import {
    Flex,
    Heading,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import React from 'react';
// import { HiMenuAlt3 } from 'react-icons/hi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useAuth } from '../../context/auth';

const Header: React.FC = () => {
    const { user, logout } = useAuth();

    const router = useRouter();

    // const handleLogout = () => {
    //     localStorage.removeItem('token');
    //     setIsLogin(false);
    //     router.push('/login');
    // };

    return (
        <Flex
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            p={4}
            justifyContent='space-between'
            alignItems='center'
        >
            <Link href='/'>
                <a>
                    <Heading as='h1' color='white' fontSize={24}>
                        Moveelix
                    </Heading>
                </a>
            </Link>
            <Menu>
                <Flex
                    _hover={{ bgColor: 'primary.darker' }}
                    width={8}
                    height={8}
                    borderRadius={4}
                    justifyContent='center'
                    alignItems='center'
                >
                    <MenuButton as='button'>
                        <HamburgerIcon color='white' boxSize={8} />
                    </MenuButton>
                </Flex>
                <MenuList>
                    {user ? (
                        <MenuItem
                            onClick={() => {
                                logout();
                                router.push('/login');
                            }}
                        >
                            Logout
                        </MenuItem>
                    ) : (
                        <Link href='/login'>
                            <MenuItem>
                                <a>Login</a>
                            </MenuItem>
                        </Link>
                    )}
                </MenuList>
            </Menu>
        </Flex>
    );
};

export default Header;
