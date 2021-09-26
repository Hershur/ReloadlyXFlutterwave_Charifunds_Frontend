import { createContext } from "react";

export interface IDonationProps {
    amount?: string | number;
    donorName?: string;
}

export type DonationContextState = {
    donation: IDonationProps | Object;
    addDonation: (d: IDonationProps | Object ) => void;
};

export const contextDefaultValues: DonationContextState = {
    donation: {amount: '', donorName: ''},
    addDonation: () => {}
};


export const DonationContext = createContext<DonationContextState>(contextDefaultValues);
