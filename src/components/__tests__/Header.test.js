import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";


it("should render header component with Login button", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </MemoryRouter>
  );

  const loginButton = screen.getByRole("button",{name:"LogIn"})
  expect(loginButton).toBeInTheDocument();
});

it("should render header component with Cart Items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/)
  expect(cartItems).toBeInTheDocument();
});

it("should change button LogIn to LogOut on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  const loginButton = screen.getByRole("button",{name:"LogIn"})
  fireEvent.click(loginButton);
  const logOutButton = screen.getByRole("button",{name:"LogOut"})
  expect(logOutButton).toBeInTheDocument();
});

