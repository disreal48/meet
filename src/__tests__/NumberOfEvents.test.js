import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  test("renders number input", () => {
    const numberInput = NumberOfEventsComponent.queryByRole("spinbutton");
    expect(numberInput).toBeInTheDocument();
  });

  test("default number of events is 32", () => {
    const numberInput = NumberOfEventsComponent.queryByRole("spinbutton");
    expect(numberInput).toHaveValue(32);
  });

  test("change number of events", async () => {
    const user = userEvent.setup();
    const numberInput = NumberOfEventsComponent.queryByRole("spinbutton");
    await user.type(numberInput, "{backspace}{backspace}24");
    expect(numberInput).toHaveValue(24);
  });

  test("change number of events to 0", async () => {
    const user = userEvent.setup();
    const numberInput = NumberOfEventsComponent.queryByRole("spinbutton");
    await user.type(numberInput, "{backspace}{backspace}0");
    expect(numberInput).toHaveValue(0);
  });

  test("change number of events to null", async () => {
    const user = userEvent.setup();
    const numberInput = NumberOfEventsComponent.queryByRole("spinbutton");
    await user.type(numberInput, "{backspace}{backspace}");
    expect(numberInput).toHaveValue(null);
  });
});
