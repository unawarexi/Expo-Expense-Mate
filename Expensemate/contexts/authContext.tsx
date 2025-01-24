import { auth, firestore } from "@/firebase/FirebaseConfig";
import { AuthContextType, UserType } from "@/types";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType>(null);

  // ------------------------- Login
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true, msg: "" };
    } catch (error: any) {
      let msg = error.message;
      return { success: false, msg: msg };
    }
  };

  // ----------------- Registration
 // ----------------- Registration
const register = async (
    email: string, 
    password: string, 
    firstname: string, 
    lastname: string, 
    confirmPassword: string
  ) => {
    if (password !== confirmPassword) {
      return { success: false, msg: "Passwords do not match" };
    }
  
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const uid = response.user?.uid;
  
      // Combine firstname and lastname for the full name
      const name = `${firstname} ${lastname}`;
  
      // Save user data to Firestore
      await setDoc(doc(firestore, "users", uid), { name, email, uid });
  
      return { success: true, msg: "" };
    } catch (error: any) {
      let msg = error.message;
      return { success: false, msg: msg };
    }
  };
  

  // ----------------- Update User Data in App
  const updateUserData = async (uid: string) => {
    try {
      const docRef = doc(firestore, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data) {
          const userData: UserType = {
            uid: data.uid,
            email: data.email || null,
            name: data.name || null,
            image: data.image || null,
          };

          setUser({ ...userData });
        }
      }

      
    } catch (error: any) {
      let msg = error.message;
      console.log("error : ", error);
    }
  };

  const contextValue: AuthContextType = {
    user,
    setUser,
    login,
    register,
    updateUserData,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;