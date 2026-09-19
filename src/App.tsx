import AppSidebar from "./components/app-sidebar";
import NavBar from "./components/navigation/Navbar";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <>
      <NavBar />
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
    </>
  );
}

export default App;
