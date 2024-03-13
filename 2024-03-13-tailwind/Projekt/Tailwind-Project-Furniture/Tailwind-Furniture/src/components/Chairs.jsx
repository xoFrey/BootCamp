import { Link } from "react-router-dom";

const Chairs = () => {
  return (
    <div className="px-14 bg-Lgrey pt-24 pb-12">
      <section className="flex justify-center items-center gap-14 ">
        <div className="w-1/5 flex flex-col gap-10">
          <h3 className="text-3xl font-bold">Who we are</h3>
          <p className="text-lg font-medium w-4/5 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            accumsan turpis quis quis at. Nec, nisi dis duis urna, elit justo,
            euismod. Ultricies fermentum nibh in ut quis lacus sollicitudin
            proin. Eu sit enim ullamcorper nisl id est. A pulvinar ut fringilla
            vulputate feugiat lobortis phasellus mattis dignissim. Dapibus sed
            quam venenatis platea. Et pharetra, convallis nec volutpat. Sed id
            et sed diam. Diam leo ipsum, urna in lorem amet euismod.
          </p>
          <Link to="/">
            <img
              className="w-20 h-20"
              src="../../public/arrowright.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex gap-24 justify-center items-baseline">
          <div className="flex flex-col items-center justify-center gap-2">
            <img className="mb-10" src="../../public/chair1.png" alt="" />
            <p className="text-lg font-bold w-2/5 text-center">
              Light brown chair with wooden legs
            </p>
            <p className="text-lg font-bold w-2/5 text-center">$100</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img className="mb-10" src="../../public/chair2.png" alt="" />
            <p className="text-lg font-bold w-2/5 text-center">
              Black chair with long legs
            </p>
            <p className="text-lg font-bold w-2/5 text-center">$100</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img className="mb-10" src="../../public/chair3.png" alt="" />
            <p className="text-lg font-bold w-2/5 text-center">
              White chair with spiral design legs
            </p>
            <p className="text-lg font-bold w-2/5 text-center">$100</p>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Chairs;
