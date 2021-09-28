import React, { useState, FC } from "react";
import { contextDefaultValues, DonationContext, DonationValue } from "./donationContext";


const DonationProvider: FC = ({ children }) => {
  const [donation, setDonation] = useState<DonationValue>(contextDefaultValues.donation);

  const addDonation = (newDonation: DonationValue) => setDonation(newDonation);

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