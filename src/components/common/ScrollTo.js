const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const scrollToProyects = () => {
  if (window.screen.width <= 991) {
    window.scrollTo(0, 750);
  } else if (window.screen.width <= 1272) {
    window.scrollTo(0, 800);
  } else {
    window.scrollTo(0, 1050);
  }
}

const scrollToContact = () => {
  return window.scrollTo(0, 10000);
}

const scrollToFrontProyects = () => {
  if (window.screen.width <= 991) {
    window.scrollTo(0, 750);
  } else if (window.screen.width <= 1272) {
    window.scrollTo(0, 800);
  } else {
    window.scrollTo(0, 1050);
  }
}

const scrollToTestingProyects = () => {
  if (window.screen.width <= 991) {
    window.scrollTo(0, 2100);
  } else if (window.screen.width <= 1272) {
    window.scrollTo(0, 2525);
  } else {
    window.scrollTo(0, 3200);
  }
}

export { scrollToTop, scrollToProyects, scrollToContact, scrollToFrontProyects, scrollToTestingProyects }; // import {} <=