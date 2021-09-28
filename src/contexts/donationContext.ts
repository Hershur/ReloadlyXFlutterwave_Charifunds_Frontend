import { createContext } from "react";

export type DonationValue = {
    amount: string, 
    donorName: string
};

export type DonationContextState = {
    donation: DonationValue;
    addDonation: (d: DonationValue ) => void;
};

export const contextDefaultValues: DonationContextState = {
    donation: {amount: '', donorName: ''},
    addDonation: (donation: DonationValue) => {}
};


export const DonationContext = createContext<DonationContextState>(contextDefaultValues);
