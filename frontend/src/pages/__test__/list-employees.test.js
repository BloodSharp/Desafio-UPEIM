import { render, screen } from "@testing-library/react";

import ListEmployees from "../list-employees.js";

it("Renderiza sin crashear", () => {
  render(<ListEmployees />);
  const filterByNameText = screen.getByText("Filtrar por nombre");
  expect(filterByNameText).toBeInTheDocument();
});
