import Input from "~/components/Input/Input";
import { update } from "../update/UpdatePassword";

const Delete: React.FC<update> = ({ formInitialState, handleChange }) => {
  return (
    <div>
      <p className="profileHead">Delete Account</p>
      <section className="input">
        <div>
          {" "}
          <Input
            label="Enter Your Password"
            value={formInitialState.deleteAccount}
            name="deleteAccount"
            onChange={handleChange}
            type="password"
          />
        </div>
      </section>
    </div>
  );
};

export default Delete;
