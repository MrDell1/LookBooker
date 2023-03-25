import { createContext, ReactElement, ReactNode, useContext, useMemo } from "react";

export type User = {
    username: string,
    isAdmin: boolean,
}

export type AnonUser = {
    signIn: () => Promise<void>;
}

export type AuthUser = {
    signOut: () => Promise<void>;
}

export type SessionServiceValue =
  | {
      status: "loading";
    }
  | {
      status: "auth";
      value: AuthUser;
      user: User;
    }
  | {
      status: "anon";
      value: AnonUser;
    };

type SessionServiceState =
  | {
      status: "auth";
      value: User;
    }
  | {
      status: "anon";
    };

export const SessionService = createContext<SessionServiceValue>({
  status: "loading",
});

export const useSessionService = (): SessionServiceValue["status"] => {
    const context = useContext(SessionService);
    return context.status;
  };

export const useAnonSessionService = (): AnonUser => {
    const context = useContext(SessionService);
  
    if (context.status !== "anon") {
      throw new Error("AnonService not defined");
    }
  
    return context.value;
  };
  
  export const useAuthSessionService = (): AuthUser => {
    const context = useContext(SessionService);
    if (context.status !== "auth") {
      throw new Error("AuthService not defined");
    }
    return context.value;
  };

  type Props = {
    children: ReactNode;
  };
  
  export const SessionServiceProvider = ({ children }: Props): ReactElement => {
    const status = useSessionService();
    const value = useMemo<SessionServiceValue>(() => {
        switch(status){
            case "anon":
                return
        }
    }, [])
  }