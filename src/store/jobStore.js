import { create } from "zustand";

const usePostStore = create((set) => ({
  jobs: [],
  createJob: (job) => set((state) => ({ posts: [job, ...state.jobs] })),
  deleteJob: (id) =>
    set((state) => ({ posts: state.posts.filter((job) => job.id !== id) })),
  setJobs: (jobs) => set({ jobs }),
}));

export default usePostStore;
