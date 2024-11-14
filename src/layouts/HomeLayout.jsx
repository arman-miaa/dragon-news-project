import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
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
                <aside className="left col-span-3">Left Navbar</aside>
                <section className="col-span-6">main contant</section>
                <aside className="col-span-3">right navbar</aside>

            </main>
      </div>
    );
};

export default HomeLayout;