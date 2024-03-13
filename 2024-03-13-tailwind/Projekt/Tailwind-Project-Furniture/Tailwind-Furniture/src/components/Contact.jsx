const Contact = () => {
  return (
    <section className="bg-Dgrey h-screen p-6 flex justify-center items-center gap-36">
      <article className="text-white w-1/2 flex flex-col">
        <h3 className="text-5xl mb-6 ">Drop a message</h3>
        <form className="flex flex-col items-start">
          <label className="text-2xl text-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="bg-LLgrey mb-8 h-20 w-full  rounded-md placeholder:text-Pgrey placeholder:text-2xl placeholder:text-bold p-2"
            type="text"
            id="name"
            placeholder="Input your name"
          />
          <label className="text-2xl text-bold mb-2" htmlFor="name">
            Mobile no.
          </label>
          <input
            className="bg-LLgrey mb-8 h-20 w-full  rounded-md placeholder:text-Pgrey placeholder:text-2xl placeholder:text-bold p-2"
            type="tel"
            id="name"
            placeholder="Input your name"
          />
          <label className="text-2xl text-bold mb-2" htmlFor="name">
            Message
          </label>
          <textarea
            className="bg-LLgrey mb-8 h-64 w-full  rounded-md placeholder:text-Pgrey placeholder:text-2xl placeholder:text-bold p-2 py-5"
            type="tel"
            id="textfield"
            placeholder="Input your name"
          />
        </form>
        <a
          href="#"
          className="uppercase px-5 py-2.5  bg-black rounded-lg self-end "
        >
          Send
        </a>
      </article>
      <img src="../../public/phone.png" alt="" />
    </section>
  );
};

export default Contact;
