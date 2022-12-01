import { mount, render, screen } from "@testing-library/vue";

import TheSubnav from "@/components/TheSubnav.vue";
import { faL } from "@fortawesome/free-solid-svg-icons";

describe("TheSubnav", () => {
  describe("When user is on jobs page", () => {
    it("displays job count", () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });

      const jobCount = screen.queryByText("1653");
      expect(jobCount.textContent).toBe("1653");
    });
  });

  describe("When user is NOT on jobs page", () => {
    it("doest not display job count", () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });

      const jobCount = screen.queryByText("1653");
      expect(jobCount).toBeNull();
    });
  });
});
