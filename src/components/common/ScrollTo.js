const scrollToTop = (e) => {
  e.preventDefault()
  window.scrollTo(0, 0)
}

const scrollToProyects = () => {
  if (window.screen.width <= 991) {
    window.scrollTo(0, 625);
  } else if (window.screen.width <= 1272) {
    window.scrollTo(0, 700);
  } else {
    window.scrollTo(0, 875);
  }
}

const scrollToContact = () => {
  return window.scrollTo(0, 10000);
}

const scrollToFrontProyects = () => {
  if (window.screen.width <= 991) {
    window.scrollTo(0, 625);
  } else if (window.screen.width <= 1272) {
    window.scrollTo(0, 700);
  } else {
    window.scrollTo(0, 900);
  }
}

const scrollToTestingProyects = () => {
  if (window.screen.width <= 991) {
    window.scrollTo(0, 2825);
  } else if (window.screen.width <= 1272) {
    window.scrollTo(0, 3250);
  } else {
    window.scrollTo(0, 3800);
  }
}

export { scrollToTop, scrollToProyects, scrollToContact, scrollToFrontProyects, scrollToTestingProyects }; // import {} <=