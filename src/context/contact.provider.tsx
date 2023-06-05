"use client";

import React, { useState, ReactNode, createContext } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

interface ContactContextProps {
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
}

export const ContactContext = createContext<ContactContextProps>(
  {} as ContactContextProps
);

export default function ContactProvider({ children }: Props) {
  const [name, setName] = useState<string>("William");
  const [email, setEmail] = useState<string>("");

  return (
    <ContactContext.Provider value={{ name, setName, email, setEmail }}>
      {children}
    </ContactContext.Provider>
  );
}
