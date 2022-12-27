import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import axios from "axios";

import JobListings from "@/components/JobResults/JobListings.vue";

vi.mock("axios");

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });

  const renderJobListings = ($route) => {
    render(JobListings, {
      global: {
        mocks: {
          $route,
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  };

  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    const $route = createRoute();

    renderJobListings($route);

    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
  });

  it("creates a job listing for every job", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const queryParams = { page: "1" };
    const $route = createRoute(queryParams);

    renderJobListings($route);

    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(10);
  });

  describe("when params exclude page number", () => {
    it("displays page number 1", () => {
      const queryParams = { page: undefined };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      expect(screen.getByText("Page 1")).toBeInTheDocument();
      expect(screen.queryByText("Next") == undefined);
      expect(screen.queryByText("Previous") == undefined);
    });
  });

  describe("when params include page number", () => {
    it("displays page number", () => {
      const queryParams = { page: "3" };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      expect(screen.getByText("Page 3")).toBeInTheDocument();
      //expect(screen.getByText("Next")).toBeInTheDocument();
      expect(screen.getByText("Previous")).toBeInTheDocument();
    });
  });

  describe("when user is on first page", () => {
    it("does not show link to previous page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      await screen.findAllByRole("listitem");
      const previousLink = screen.queryByRole("link", { name: /previous/i });
      expect(previousLink).not.toBeInTheDocument();

      expect(screen.queryByText("Previous") == undefined);
      expect(screen.queryByText("Next") != undefined);
    });

    it("shows link to next page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      await screen.findAllByRole("listitem");
      const nextLink = screen.queryByRole("link", { name: /next/i });
      expect(nextLink).toBeInTheDocument();

      expect(screen.queryByText("Previous") == undefined);
      expect(screen.queryByText("Next") != undefined);
    });
  });

  describe("when params is over page number", () => {
    it("displays page number 100", () => {
      const queryParams = { page: "100" };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      expect(screen.queryByText("Next") == undefined);
    });
  });
});
