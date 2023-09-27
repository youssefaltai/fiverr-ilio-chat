import SettingsSVGPhone from "./SettingsSVGPhone";
import UpdateSVGPhone from "./UpdateSVGPhone";
import DeleteSVGPhone from "./DeleteSVGPhone";

type active = {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

const Phone: React.FC<active> = ({ active, setActive }) => {
  return (
    <div>
      <section className="optionsPhone">
        <div
          className={active === 0 ? "listColor1" : "list"}
          onClick={() => setActive(0)}
        >
          <SettingsSVGPhone active={active} />
          <p> Settings</p>
        </div>
        <div
          className={active === 1 ? "listColor1" : "list"}
          onClick={() => setActive(1)}
        >
          <UpdateSVGPhone active={active} />
          <p> Update password</p>
        </div>
        <div
          className={active === 2 ? "listColor1" : "list"}
          onClick={() => setActive(2)}
        >
          <DeleteSVGPhone active={active} />
          <p> Delete Account</p>
        </div>
      </section>
    </div>
  );
};

export default Phone;
