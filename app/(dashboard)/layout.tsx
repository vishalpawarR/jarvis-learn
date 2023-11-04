import NavBar from "./_components/NavBar";
import Sidebar from "./_components/Sidebar";

const DashboardLayout = ({
    children
} : { children : React.ReactNode}) => {
    return (
        <div className="h-full">
            <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
                <NavBar />
            </div>
            <div className="fixed inset-y-0 flex-col hidden w-56 h-full md:flex z-56">
                <Sidebar />
            </div>
            <main className="h-full md:pl-56 pt-[80px]">
                {children}
            </main>
        </div>
    );
}
export default DashboardLayout;