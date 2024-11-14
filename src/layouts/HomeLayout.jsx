import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNav from "../components/layout-components/RightNav";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
      <div className="font-Poppins">
        <header>
          <Header></Header>
          <section className="w-11/12 mx-auto">
            <LatestNews></LatestNews>
          </section>
        </header>
        <nav>
          <section className="w-11/12 mx-auto py-2">
            <Navbar></Navbar>
          </section>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
                <aside className="left col-span-3"><LeftNavbar></LeftNavbar></aside>
                <section className="col-span-6">main contant</section>
                <aside className="col-span-3"><RightNav></RightNav></aside>

            </main>
      </div>
    );
};

export default HomeLayout;