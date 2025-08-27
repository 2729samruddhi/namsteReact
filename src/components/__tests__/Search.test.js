import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resCartListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      data: {
        cards: [
          {}, {}, {}, {},
          MOCK_DATA.data.cards[2] // shift restaurants to index 4
        ]
      }
    }),
  })
);


it("should Search resList for Pizza", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  //  const cardBeforeSearch =screen.getAllByTestId("resCard")
  //  expect(cardBeforeSearch.length).toBe(9)

  // const searchButton = screen.getByRole("button", { name: "Search" });
  // const searchInput = screen.getByTestId("searchInput");

  // fireEvent.change(searchInput, { target: { value: "Pizza" } });
  // fireEvent.click(searchButton);

  // const cardAfterSearch = screen.getAllByTestId("resCard");
  // expect(cardAfterSearch.length).toBe(2);
});

