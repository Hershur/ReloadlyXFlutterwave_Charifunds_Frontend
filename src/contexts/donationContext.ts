import { createContext } from "react";


export type DonationContextState = {
    donation: number | string;
    addDonation: (d: number) => void;
};

export const contextDefaultValues: DonationContextState = {
    donation: '',
    addDonation: () => {}
};


export const DonationContext = createContext<DonationContextState>(contextDefaultValues);
