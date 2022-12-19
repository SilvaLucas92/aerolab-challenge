import { Box, Button, HStack, Text } from "@chakra-ui/react"
const FILTERS = ['Most Recent', 'Lowest Price', 'Highest Price']
const Filters = ({activeFilter, onChange}) => {
    return(
        <HStack spacing={5}>
            <Text>Sort By</Text>
            {FILTERS.map(filter => (
                <Box key={filter} bg={activeFilter === filter? 'cyan.200' : 'gray.100'} p={2}  borderRadius='20px' cursor='pointer' onClick={() => onChange(filter)} >
                    {filter}
                </Box>
            ))}
        </HStack>
    )
}

export default Filters