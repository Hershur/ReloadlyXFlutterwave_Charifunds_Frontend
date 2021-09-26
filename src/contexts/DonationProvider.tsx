import React, { useState, FC } from "react";
import { contextDefaultValues, DonationContext, IDonationProps } from "./donationContext";


const DonationProvider: FC = ({ children }) => {
  const [donation, setDonation] = useState<IDonationProps | Object>(contextDefaultValues.donation);

  const addDonation = (newDonation: IDonationProps | Object) => setDonation(newDonation);

  return (
    <DonationContext.Provider
      value={{
        donation,
        addDonation
      }}
    >
      {children}
    </DonationContext.Provider>
  );
};

export default DonationProvider;