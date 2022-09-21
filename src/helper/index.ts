export const mapAuthCodeToMessage = (authCode: string) => {
    switch (authCode) {
        case 'auth/user-not-found':
            return 'User not found!';

        case 'auth/invalid-password':
            return 'Password provided is not corrected!';

        case 'auth/invalid-email':
            return 'Email provided is invalid!';

        case 'auth/email-already-in-use':
            return 'Email provided is already in use!';

        default:
            return '';
    }
};
