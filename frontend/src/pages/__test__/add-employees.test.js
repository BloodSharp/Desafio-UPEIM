import { render, screen } from "@testing-library/react";

import InsertEmployee from "../add-employees.js";

it("Renderiza sin crashear", () => {
  render(<InsertEmployee />);
  const addEmployeeButton = screen.getByText("Agregar empleado");
  expect(addEmployeeButton).toBeInTheDocument();
});
