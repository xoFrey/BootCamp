import { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [answer, setAnswer] = useState(false);
  return (
    <>
      <section className="faq">
        <p>Why is React great?</p>
        <button onClick={() => setAnswer((answer) => !answer)}>-</button>
      </section>
      <section className={answer ? "show" : "answer"}>
        <div className="border"></div>
        <p>Fast Learning Curve</p>
      </section>
    </>
  );
};

export default FAQ;
