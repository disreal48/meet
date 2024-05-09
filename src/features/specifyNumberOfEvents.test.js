import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When the user specifies the number of events", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the user sees the default event list", () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      expect(EventListDOM).toBeInTheDocument();
    });

    when("the user specifies the number of event", async () => {
      const user = userEvent.setup();
      const AppDOM = AppComponent.container.firstChild;
      const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
      const numberOfEventsInput =
        within(NumberOfEventsDOM).queryByRole("spinbutton");
      await user.type(numberOfEventsInput, "{backspace}{backspace}10");
    });

    then("the right amount of events is displayed to the user", () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      const allRenderedEventItems =
        within(EventListDOM).queryAllByRole("listitem");
      expect(allRenderedEventItems.length).toEqual(10);
    });
  });
});
