import "./Loading.css";
const Loading = () => {
  const style = { width: "300px", height: "300px" };
  return (
    <section className="loading">
      <h2>loading</h2>

      <dotlottie-player
        src="https://lottie.host/edf68650-ce3a-4bbc-af09-071808b055c2/onXv93MKMF.json"
        background="transparent"
        speed="1"
        style={style}
        loop
        autoplay
      ></dotlottie-player>
    </section>
  );
};

export default Loading;
