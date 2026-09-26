"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type ContactContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
}

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) throw new Error("useContact must be used within a ContactProvider");
  return context;
}
