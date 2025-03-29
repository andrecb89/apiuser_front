import { Box, Link, Text } from '@chakra-ui/react';


const Navlink = ({href, text}) =>{
    return (
        <Box>
            <Link href={href}>
                <Text color="#2f2f2f" fontWeight="bold" padding="5px">{text}</Text>
            </Link>
        </Box>

    );
}
export default Navlink;