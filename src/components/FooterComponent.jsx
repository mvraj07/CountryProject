import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
export const FooterComponent = ({ curData }) => {
  const Icons = {
    MdPlace: <MdPlace size={54} />,
    IoCallSharp: <IoCallSharp size={54} />,
    TbMailPlus: <TbMailPlus size={54} />,
  };

  console.log(Icons);
  return (
    <li className="footercomp">
      <div className="icon">{Icons[curData.icon]}</div>
      <div className="details">
        <h3>{curData.title}</h3>
        <p>{curData.details}</p>
      </div>
    </li>
  );
};
