import Header from "./Header";

const Welcome = () => {
  return (
    <section className="bg-bgwelcome bg-cover bg-center bg-no-repeat h-screen ">
      <Header />
      <main className="flex justify-center items-center h-4/5">
        <h1 className="text-[80px] text-center text-white w-4/5">
          Everyone Loves To Welcome A Good Furniture
        </h1>
      </main>
    </section>
  );
};

export default Welcome;
