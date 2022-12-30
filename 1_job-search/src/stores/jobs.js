import { defineStore } from "pinia";

import getJobs from "@/api/getJobs";

export const FETCH_JOBS = "FETCH_JOBS";
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";

export const useJobsStore = defineStore("jobs", {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async [FETCH_JOBS]() {
      const jobs = await getJobs();
      this.jobs = jobs;
    },
  },
  getters: {
    [UNIQUE_ORGANIZATIONS](state) {
      const uniqueOrgs = new Set();
      state.jobs.forEach((job) => {
        uniqueOrgs.add(job.organization);
      });
      return uniqueOrgs;
    },
  },
});
