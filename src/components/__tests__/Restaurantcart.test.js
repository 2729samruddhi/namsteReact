import { render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/rescardMock.json";
import "@testing-library/jest-dom"
import Restaurant from "../Restaurant"



it("should  render restaurant component with  props Data",()=>{
      render(
      <Restaurant resData={{ info: MOCK_DATA }}/>
    
    )
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument()
})