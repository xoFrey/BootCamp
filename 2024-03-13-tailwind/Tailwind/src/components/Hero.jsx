const Hero = () => {
  return (
    <>
      <section className="flex justify-between items-center p-5 gap-10 mb-10">
        <div>
          <p className="font-bold mb-3">Branding | Image making</p>
          <h2 className="text-6xl font-bold mb-3 text-tahiti">
            My Awesome Portfolio
          </h2>
          <p className="font-Macondo">And I made it myself</p>
        </div>
        <img className="max-w-[40%]" src="../../public/Image.png" alt="" />
      </section>
      <section></section>
    </>
  );
};

export default Hero;
