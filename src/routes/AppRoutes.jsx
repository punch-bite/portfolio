import { Route, Routes } from "react-router-dom";
import AppRouter from "./routes/AppRoutes";
import Home from "./pages/home";
import Project from "./pages/projet";
import NotFound from "./pages/notfound";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projet/:id" element={<Project />} />
            <Route path="/notfound" element={<NotFound />} />
        </Routes>
    )
}
export default AppRouter;