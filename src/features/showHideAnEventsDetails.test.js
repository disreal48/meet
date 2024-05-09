import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  let EventComponent;
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });
  beforeEach(() => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppComponent;
    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    when("the user sees the list of all upcoming events", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then(
      "the user should see that each event element is collapsed by default",
      () => {
        expect(
          EventComponent.container.querySelector(".details")
        ).not.toBeInTheDocument();
      }
    );
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    when("the user clicks on an event element", async () => {
      const user = userEvent.setup();
      const button = EventComponent.queryByRole("button");
      await user.click(button, "Show Details");
    });

    then(
      "the user should see the event element expanded to show its details",
      () => {
        const details = EventComponent.container.querySelector(".details");
        expect(details).toBeInTheDocument();
      }
    );
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given(
      "the main page is open and the details of an item are shown",
      async () => {
        AppComponent = render(<App />);
        const user = userEvent.setup();
        const buttons = EventComponent.getAllByRole("button");
        await user.click(buttons[0], "Show Details");
        const details = EventComponent.container.querySelector(".details");
        expect(details).toBeInTheDocument();
      }
    );

    when("the user clicks on the hide details button", async () => {
      const user = userEvent.setup();
      const buttons = EventComponent.getAllByRole("button");
      await user.click(buttons[0], "Hide Details");
    });

    then(
      "the user should see the event element collapsed to hide its details",
      () => {
        const details = EventComponent.container.querySelector(".details");
        expect(details).not.toBeInTheDocument();
      }
    );
  });
});
