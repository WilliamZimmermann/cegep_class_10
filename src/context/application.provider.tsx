"use client";

import React, { useState, ReactNode, createContext } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

interface ApplicationContextProps {
  name: string;
  setName: (val: string) => void;
}

export const ApplicationContext = createContext<ApplicationContextProps>(
  {} as ApplicationContextProps
);

export default function ApplicationProvider({ children }: Props) {
  const [name, setName] = useState<string>("William");

  return (
    <ApplicationContext.Provider value={{ name, setName }}>
      {children}
    </ApplicationContext.Provider>
  );
}
