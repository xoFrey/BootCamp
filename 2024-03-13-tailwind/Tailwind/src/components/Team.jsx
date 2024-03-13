const Team = () => {
  return (
    <section className="flex items-center justify-between gap-10">
      <div className="flex flex-col justify-center items-center text-center gap-3">
        <img className="mb-4" src="./team-1.png" alt="" />
        <h3 className="font-bold text-lg font-Macondo">Product Design</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          blanditiis mollitia reiciendis accusamus, laudantium placeat dicta
          corporis nihil laboriosam impedit?
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-3">
        <img className="mb-4" src="./team-2.png" alt="" />
        <h3 className="font-bold text-lg font-Macondo">Art Direction</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          blanditiis mollitia reiciendis accusamus, laudantium placeat dicta
          corporis nihil laboriosam impedit?
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-3">
        <img className="mb-4" src="./team-3.png" alt="" />
        <h3 className="font-bold text-lg font-Macondo">Visual Design</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          blanditiis mollitia reiciendis accusamus, laudantium placeat dicta
          corporis nihil laboriosam impedit?
        </p>
      </div>
    </section>
  );
};

export default Team;
