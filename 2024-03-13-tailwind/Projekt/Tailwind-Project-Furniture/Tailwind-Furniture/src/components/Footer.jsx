import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="flex justify-evenly py-20">
        <div className="flex flex-col items-start gap-5">
          <h4 className="text-2xl font-bold uppercase">Our company</h4>
          <Link className="text-2xl font-bold" to="/">
            About us
          </Link>
          <Link className="text-2xl font-bold" to="/">
            Become a Partner
          </Link>
          <Link className="text-2xl font-bold" to="/">
            Contact us
          </Link>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h4 className="text-2xl font-bold uppercase">Learn More</h4>
          <Link className="text-2xl font-bold" to="/">
            How it works
          </Link>
          <Link className="text-2xl font-bold" to="/">
            FAQs
          </Link>
          <Link className="text-2xl font-bold" to="/">
            Terms and Conditions
          </Link>
          <Link className="text-2xl font-bold" to="/">
            Private Policy
          </Link>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h4 className="text-2xl font-bold uppercase">Subscribe</h4>
          <form>
            <input
              className="bg-LLgrey mb-8 w-72 px-5 py-2.5 rounded-md placeholder:text-Pgrey placeholder:text-xl placeholder:text-bold p-2"
              type="text"
              placeholder="Input your email address"
            />
            <a
              href="#"
              className="uppercase px-5 py-2.5 bg-black rounded-lg text-white -ml-6"
            >
              Send
            </a>
          </form>
        </div>
      </section>{" "}
      <div className="flex flex-col items-start gap-3.5">
        <Link onClick={() => window.scrollTo(0, 0)} className="self-end" to="/">
          <img src="../../public/pageup.png" alt="" />
        </Link>
        <div className="bg-black w-full">
          <p className="text-white p-4">
            By using this website you accept our Terms and use and Private
            Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
