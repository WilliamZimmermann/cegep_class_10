"use client";

import React, { useState, ReactNode, createContext } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

interface MyAppContextProps {
  name: string;
  setName: (val: string) => void;
}

export const MyAppContext = createContext<MyAppContextProps>(
  {} as MyAppContextProps
);

export default function MyAppProvider({ children }: Props) {
  const [name, setName] = useState<string>("");

  return (
    <MyAppContext.Provider value={{ name, setName }}>
      {children}
    </MyAppContext.Provider>
  );
}
