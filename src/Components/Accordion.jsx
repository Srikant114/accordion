import { useState } from "react";

export default function Accordion({ faq }) {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion">
      <h3>
        {faq?.question}{" "}
        <span onClick={() => setShow(!show)}>{show ? "-" : "+"}</span>
      </h3>
      {show ? <p>{faq?.answer}</p> : ""}
    </div>
  );
}
