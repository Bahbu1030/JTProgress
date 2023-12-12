document.querySelectorAll("section").forEach((section) => {
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        section.setAttribute("height", "300");
        observer.unobserve(section);
      }
    });
    observer.observe(section);
  });