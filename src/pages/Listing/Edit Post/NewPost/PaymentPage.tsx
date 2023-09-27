import  { useState } from "react";
import RadioButton from "~/components/RadioButton";
import { FilterItem } from "../../../HomePage/components/Modal/Filter/Filter";
import DarkButton from "~/components/DarkButton/DarkButton";
import { NewPostStyle } from "./NewPostStyle.styled";

interface PaymentDetailsState {
  listing: string;
  topAd: string;
}
const PaymentPage = ({handleSubmit, close} :{handleSubmit:(event:any)=>void , close:()=>void}) => {
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetailsState>({
    listing: "5",
    topAd: "10",
  });
  const handleListingChange = (value: string) => {
    setPaymentDetails((prev) => {
      return { ...prev, listing: value };
    });
  };
  const handleTopAdChange = (value: string) => {
    setPaymentDetails((prev) => {
      return { ...prev, topAd: value };
    });
  };


  return (
    <NewPostStyle>
    <div className='content'>
      <FilterItem title="Listing">
        <RadioButton
          label="28 days ($5)"
          checked={paymentDetails.listing === "5"}
          name="28 days"
          onChange={handleListingChange}
          value="5"
        />
      </FilterItem>
      <FilterItem title="Top Ad">
        <div className='radioGroup'>
          <RadioButton
            label="3 days ($5)"
            checked={paymentDetails.topAd === "5"}
            name="3 days"
            onChange={handleTopAdChange}
            value="5"
          />
          <RadioButton
            label="7 days ($10)"
            checked={paymentDetails.topAd === "10"}
            name="10 days"
            onChange={handleTopAdChange}
            value="10"
          />
        </div>
        <span className='imagesInfo'>
          having the exposure at the top of the page and being seen first
        </span>
      </FilterItem>
      <div className='totalDiv'>
        <div className='total'>
          <span>Total</span>
          <span>${+paymentDetails.listing + +paymentDetails.topAd}</span>
        </div>
        <div className='items'>
          <span className='totalItem'>
            Listing (${paymentDetails.listing})
          </span>
          <span className='totalItem'>
            Top ad (${paymentDetails.topAd})
          </span>
        </div>
      </div>

      <div onClick={close}><div onClick={handleSubmit}> <DarkButton title="Pay" /></div></div>
    </div>
    </NewPostStyle>
  );
};

export default PaymentPage;
