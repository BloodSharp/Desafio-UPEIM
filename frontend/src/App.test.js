import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

it("Renderiza la página principal", () => {
  render(<App />);

  const challengeText = screen.getByText("Desafío de ingreso UPEIM");
  const challengeAddEmployeeButtonText = screen.getByText("Añadir empleados");
  const challengeListEmployeesButtonText = screen.getByText("Listar empleados");

  expect(challengeText).toBeInTheDocument();
  expect(challengeAddEmployeeButtonText).toBeInTheDocument();
  expect(challengeListEmployeesButtonText).toBeInTheDocument();
});
