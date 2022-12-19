import { Box } from "@chakra-ui/react"
import Navbar from "./Navbar"

const Layout = ({children}) => {
    return(
        <>
        <Navbar />
        <Box>
            {children}
        </Box>
        </>
    )
}

export default Layout