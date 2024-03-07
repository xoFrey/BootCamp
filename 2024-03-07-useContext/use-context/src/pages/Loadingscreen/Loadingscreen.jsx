import { useContext, useEffect } from "react";
import { LoadingContext } from "../../context/Context";
import FetchData from "../../components/FetchData/FetchData";

const Loadingscreen = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  });

  return (
    <section>
      <h1>Loading...</h1>
      <FetchData />
    </section>
  );
};

export default Loadingscreen;
