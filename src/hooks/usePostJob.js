import { useState } from "react";
import useAuthStore from "../store/authStore";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import usePostStore from "../store/jobStore";

const usePostJob = () => {
  const [isPosting, setIsPosting] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setJobs = usePostStore((state) => state.setJobs);

  const handlePostJob = async (inputs) => {
    if (isPosting) return;
    if (!authUser)
      return console.error("You need to be logged in to post a job");
    setIsPosting(true);
    const newJob = {
      title: inputs.jobTitle,
      description: inputs.description,
      createdAt: Date.now(),
      createdBy: authUser.uid,
    };

    try {
      const docRef = await addDoc(collection(firestore, "jobs"), newJob);
      newJob.id = docRef.id;
      setJobs((jobs) => [newJob, ...jobs]);
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setIsPosting(false);
    }
  };

  return { isPosting, handlePostJob };
};

export default usePostJob;
