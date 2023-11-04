import NavBarRoutes from "@/components/NavBarRoutes";
import MobileSidebar from "./MobileSidebar";

const NavBar = () => {
    return (
        <div className="flex items-center h-full p-4 bg-white border-b shadow-sm">
            <MobileSidebar />
            <NavBarRoutes />
        </div>
    );
}
 
export default NavBar;