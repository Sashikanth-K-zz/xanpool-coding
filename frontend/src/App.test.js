import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookCard from "./components/BookCard";
import BookList from "./components/BookList";
import BookView from "./components/BookView";
import { BrowserRouter as Router } from "react-router-dom";

const booksData = [
  {
    title: "Unlocking Android",
    description:
      "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.\n" +
      "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
    year: "2009",
    bookid: 1,
  },
  {
    title: "Android in Action, Second Edition",
    description:
      `Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond "Hello Android," this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. \n` +
      `When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.    Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond "Hello Android," this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. `,
    year: "2011",
    bookid: 2,
  },
];

test("renders Header component", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const linkElement = screen.getByText(/books catalog/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Footer component", () => {
  render(
    <Router>
      <Footer />
    </Router>
  );
  const linkElement = screen.getByText(/Sashi/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Book Card component", () => {
  render(
    <Router>
      <BookCard data={booksData[0]} />
    </Router>
  );
  const linkElement = screen.getByText(booksData[0].title);
  expect(linkElement).toBeInTheDocument();
});

test("renders Book View component", () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve([booksData[0]]),
    })
  );

  render(
    <Router>
      <BookView />
    </Router>
  );
  // const linkElement = screen.getByText(booksData[0].title);
  // expect(linkElement).toBeInTheDocument();
});
