import {CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import {themeSettings} from "../theme.js";
import {useSelector} from "react-redux";
import {useMemo} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Index from "../views/admin/Index.jsx";
import Layout from "../views/admin/layouts/Index.jsx";

function App() {
    const mode = useSelector(state => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Navigate to="/dashboard" replace />} />
                            <Route path="/dashboard" element={<Index />} />
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    )
}

export default App
