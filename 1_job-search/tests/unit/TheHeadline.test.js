import { render, screen } from "@testing-library/vue";

import TheHeadline from "@/components/TheHeadline.vue";
import { vi } from "vitest";
// import { vi } from "vitest";

describe("TheHeadline", () => {
  it("displays introduction action verb", () => {
    vi.useFakeTimers();
    render(TheHeadline);

    const actionPhrase = screen.getByRole("heading", {
      name: /build for everyone/i,
    });

    expect(actionPhrase).toBeInTheDocument();

    vi.useRealTimers();
  });
  /*
  describe("Vitests playground", () => {
    it("tracks wehther it has been called", () => {
      const mockFunction = vi.fn();
      mockFunction(1, 2);
      expect(mockFunction).toHaveBeenCalledWith(1, 2);
    });
  });
  */
});
