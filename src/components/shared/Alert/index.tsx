import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
} from '@chakra-ui/react';
import React from 'react';

export interface AlertProps {
    status: 'error' | 'success';
    title: string;
    description: string;
    isHidden: boolean;
}

const Alerts: React.FC<AlertProps> = ({
    status,
    title,
    description,
    isHidden,
}: AlertProps) => {
    return (
        <Alert
            status={status}
            hidden={isHidden}
            w={{ base: 'auto', md: 500 }}
            mx={'auto'}
        >
            <AlertIcon />
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
        </Alert>
    );
};

export default Alerts;
