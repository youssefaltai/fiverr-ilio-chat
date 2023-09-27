import Input from "~/components/Input/Input"
import { formState } from "../../Edit"
//import { useRef } from "react";
  
 export type update ={
    formInitialState:formState;
    handleChange:(e: React.ChangeEvent) => void;

 }

//  type passwordInput ={
//     value?: any ;
//     addEventListener: (type:'input', listerner:()=>void) =>void
//  }
const UpdatePassword:React.FC<update> = (
    {
        formInitialState,
        handleChange,
    }    
) => {

    // const passwordInput:passwordInput | null = document.getElementById('passwordInput');
    //       passwordInput?.addEventListener('input', function(){
    //         const inputValue = passwordInput.value;
    //         const asterisks = "*".repeat(inputValue?.length)
    //         passwordInput.value= asterisks
    //       })
     
    // const asterixRef = useRef<any>(null)
    // const  handleChangeInput = ()=>{
    //      const inputValue:string | number | any  =  asterixRef.current?.value;
    //      const asterisk  = "*".repeat(inputValue?.length);
    //      asterixRef.current.value = asterisk;
    // }

  return (
    <div >
        <p className="profileHead">Password</p>
            <section className="input">                
            <div>
              {" "}
              <Input
                //inref={asterixRef}
                label="Current Password"
                value={formInitialState.currentPassword}
                name="currentPassword"
                onChange={handleChange}
                id="passwordInput"
                type="password"
                
              />
            </div>
            <div>
              <Input
                label="New Password"
                value={formInitialState.newPassword}
                name="newPassword"
                onChange={handleChange}
                type="password"
              />
            </div>

            <div>
              <Input
                label="Confirm Password"
                value={formInitialState.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
                type="password"
              />
            </div>
            </section>

    </div>
  )
}

export default UpdatePassword