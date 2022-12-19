import {Box, useMediaQuery} from "@mui/material";
import Navbar from "../../../components/Admin/Navbar.jsx";
import {Outlet} from "react-router-dom";
import {useState} from "react";
import Sidebar from "../../../components/Admin/Sidebar.jsx";

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
            <Sidebar isNonMobile={isNonMobile} drawerWidth={"250px"} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <Box flexGrow={1}>
                <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout