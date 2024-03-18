import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeader from "../components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader subHeader={'Our Story'} mainHeader = {'About us'}/>
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader subHeader={'Don\'t hesitate'} mainHeader={'Contact us'}/>
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:12345678">
            +123456789
          </a>
        </div>
      </section>
      <section>
        <footer className="border-t p-8 text-center text-gray-500 mt-16">
          &copy; 2024 All right reserved
        </footer>
      </section>
    </>
  );
}
