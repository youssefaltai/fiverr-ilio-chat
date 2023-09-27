import { HelpStyle } from "./HelpStyle.styled";
import Header from "./component/Header";
import { useAppSelector } from "~/features/hooks";
import { useEffect, useState } from "react";
import Options from "./component/Options";
import Information from "./component/Information";
import OptionsPhone from "./component/OptionsPhone";

const Help = () => {
  const windowDimensions = useAppSelector((state) => state.dimensions);
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    if (windowDimensions) {
      document.body.style.overflow = "unset";
    }
  }, [windowDimensions.width]);

  return (
    <HelpStyle>
      <Header phoneHeader="Help" />
      <div className="container">
        <div className="flexContainer">
          <div className="tab1">
            <section className="options">
              <Options
                icon={
                  active === 0
                    ? "/icons/about us.svg"
                    : "/icons/about us ash.svg"
                }
                alt="about us"
                content="About Us"
                active={active}
                setActive={setActive}
                number={0}
              />

              <Options
                icon={
                  active === 1 ? "/icons/terms.svg" : "/icons/terms ash.svg"
                }
                alt="Terms & Conditions"
                content="Terms and Conditions"
                active={active}
                setActive={setActive}
                number={1}
              />

              <Options
                icon={
                  active === 2
                    ? "/icons/privacy policy.svg"
                    : "/icons/privacy policy ash.svg"
                }
                alt="Privacy Policy"
                content="Privacy Policy"
                active={active}
                setActive={setActive}
                number={2}
              />

              <Options
                icon={
                  active === 3 ? "/icons/cookie.svg" : "/icons/cookie ash.svg"
                }
                alt="Cookie"
                content="Cookies"
                active={active}
                setActive={setActive}
                number={3}
              />
            </section>

            <section className="optionsPhone">
              <OptionsPhone
                icon={
                  active === 0
                    ? "/icons/about us white.svg"
                    : "/icons/about us ash.svg"
                }
                alt="About Us"
                content="About Us"
                active={active}
                setActive={setActive}
                number={0}
              />
              <OptionsPhone
                icon={
                  active === 1
                    ? "icons/terms white.svg"
                    : "/icons/terms ash.svg"
                }
                alt="Terms & Conditions"
                content="Terms & Conditions"
                active={active}
                setActive={setActive}
                number={1}
              />

              <OptionsPhone
                icon={
                  active === 2
                    ? "icons/privacy policy white.svg"
                    : "/icons/privacy policy ash.svg"
                }
                alt="Privacy Policy"
                content="Privacy Policy"
                active={active}
                setActive={setActive}
                number={2}
              />

              <OptionsPhone
                icon={
                  active === 3
                    ? "icons/cookie white.svg"
                    : "/icons/cookie ash.svg"
                }
                alt="Cookies"
                content="Cookies"
                active={active}
                setActive={setActive}
                number={3}
              />
            </section>

            <div className="line"></div>
          </div>
          <div className="tab2">
            {active === 0 && (
              <Information
                head="About Us"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Euismod nisi porta lorem mollis aliquam ut. Purus in mollis nunc sed.
                 Aliquet nec ullamcorper sit amet risus. In est ante in nibh. Purus semper eget duis at.
                  Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
                   Cursus eget nunc scelerisque viverra mauris. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. 
                   Fames ac turpis egestas integer. Id venenatis a condimentum vitae. 
                   Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
                    Nulla aliquet enim tortor at auctor. Dui vivamus arcu felis bibendum ut tristique et egestas quis."
              />
            )}

            {active === 1 && (
              <Information
                head="Terms and Conditions"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Euismod nisi porta lorem mollis aliquam ut. Purus in mollis nunc sed.
                 Aliquet nec ullamcorper sit amet risus. In est ante in nibh. Purus semper eget duis at.
                  Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
                   Cursus eget nunc scelerisque viverra mauris. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. 
                   Fames ac turpis egestas integer. Id venenatis a condimentum vitae. 
                   Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
                    Nulla aliquet enim tortor at auctor. Dui vivamus arcu felis bibendum ut tristique et egestas quis."
              />
            )}

            {active === 2 && (
              <Information
                head="Privacy Policy"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Euismod nisi porta lorem mollis aliquam ut. Purus in mollis nunc sed.
                 Aliquet nec ullamcorper sit amet risus. In est ante in nibh. Purus semper eget duis at.
                  Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
                   Cursus eget nunc scelerisque viverra mauris. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. 
                   Fames ac turpis egestas integer. Id venenatis a condimentum vitae. 
                   Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
                    Nulla aliquet enim tortor at auctor. Dui vivamus arcu felis bibendum ut tristique et egestas quis."
              />
            )}

            {active === 3 && (
              <Information
                head="Cookies"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Euismod nisi porta lorem mollis aliquam ut. Purus in mollis nunc sed.
                 Aliquet nec ullamcorper sit amet risus. In est ante in nibh. Purus semper eget duis at.
                  Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
                   Cursus eget nunc scelerisque viverra mauris. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. 
                   Fames ac turpis egestas integer. Id venenatis a condimentum vitae. 
                   Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
                    Nulla aliquet enim tortor at auctor. Dui vivamus arcu felis bibendum ut tristique et egestas quis."
              />
            )}
          </div>
        </div>
      </div>
    </HelpStyle>
  );
};

export default Help;
