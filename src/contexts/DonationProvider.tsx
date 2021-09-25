import React, { useState, FC } from "react";
import { contextDefaultValues, DonationContext } from "./donationContext";


const DonationProvider: FC = ({ children }) => {
  const [donation, setDonation] = useState<string | number>(contextDefaultValues.donation);

  const addDonation = (newDonation: string | number) => setDonation(newDonation);

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