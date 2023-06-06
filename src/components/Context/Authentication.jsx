import { createContext, useEffect, useState, useMemo } from "react";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider, facebookProvider, twitterProvider } from "../../firebase/config";

export const Authentication = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: null,
    logged: false
  });

  const login = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .catch(e => console.log(e));
  };

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginWithTwitter = () => {
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const register = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .catch(e => console.log(e));
  };

  const logout = () => {
    signOut(auth)
      .catch(e => console.log(e));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          logged: true
        });
      } else {
        setUser({
          email: null,
          logged: false
        });
      }
    });
  }, []);

  const authenticationValue = useMemo(
    () => ({
      user,
      login,
      register,
      logout,
      loginWithGoogle,
      loginWithFacebook,
      loginWithTwitter
    }),
    [user, login, register, logout, loginWithGoogle, loginWithFacebook, loginWithTwitter]
  );

  return (
    <Authentication.Provider value={authenticationValue}>
      {children}
    </Authentication.Provider>
  );
};
