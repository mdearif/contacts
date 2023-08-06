export type ContactType = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: PhoneNumberType[];
    dob: string;
}

export type PhoneNumberType = {
    code: string;
    phone: string;
    label: string;
}