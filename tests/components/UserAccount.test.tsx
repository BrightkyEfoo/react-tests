import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
  describe("it should always render heading user profile and user name", () => {
    const users = [
      {
        name: "John Doe",
        isAdmin: false,
        id: 1,
      },
      {
        name: "John Admin",
        isAdmin: true,
        id: 1,
      },
    ];

    const renders = users.map((user) => render(<UserAccount user={user} />));

    it("evry user should render heading", () => {
      const headings = screen.getAllByRole("heading");
      headings.forEach((heading) => {
        expect(heading).toHaveTextContent("User Profile");
      });
    });

  });

  it("it should render edit button if user is admin", () => {
    
  });

  it("it should not render edit button if user is not admin", () => {});
});
