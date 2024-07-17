import Accordion from "./Accordion";
import accordionData from "../accordionData.json";

console.log(accordionData?.faq);

export default function Faq() {
  return (
    <div>
      <h1>FAQ &apos; S</h1>

      {accordionData?.faq?.map((obj, index) => {
        return <Accordion faq={obj} key={index} />;
      })}
    </div>
  );
}
