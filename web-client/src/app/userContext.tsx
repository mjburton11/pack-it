import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface User {
  name: string;
}

export const userContext = createContext<{
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>> | (() => void);
}>({ user: null, setUser: () => {} });

export const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
