import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetUserById = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userRef = doc(firestore, "users", userId);
      const userSnapshot = await getDoc(userRef);
      if (userSnapshot.exists()) {
        setUser({ id: userSnapshot.id, ...userSnapshot.data() });
      }
      setLoading(false);
    };

    fetchUser();
  }, [userId]);

  return { user, loading };
};

export default useGetUserById;
