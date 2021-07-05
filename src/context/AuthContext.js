import React, { useState, createContext, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const contextValues = {
    user,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
