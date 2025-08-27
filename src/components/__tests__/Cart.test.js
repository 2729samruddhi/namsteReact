import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should Load restaurant menu component", async () => {
  await act(async () =>
    render(
        <BrowserRouter> 
      <Provider store={appStore}>
        <Header/>
        <RestaurantMenu />
      </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Garlic Bread (6)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(6);
  const addBtns = screen.getAllByRole("button", { name: "ADD+" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart (1 items)" )).toBeInTheDocument();
});
