import { GiImperialCrown } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import SectionHeader from "./SectionHeader";
import { programs } from "../data";
import Card from "../UI/Card";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHeader icon={<GiImperialCrown />} title="Programmes" />
    
      <div className="programs__wrapper">
        {programs.map(({ id, icon, path, info, title }) => {
          return (
            <Card className="programs__program" key={id}>
              <span> {icon} </span>
              <h4> {title} </h4>
              <small> {info} </small>
              <Link to={path} className="btn sm">
                {" "}
                ...Plus {<AiFillCaretRight />}
              </Link>
            </Card>
          );
        })}
      </div>
        </div>
    </section>
  );
};
export default Programs;
