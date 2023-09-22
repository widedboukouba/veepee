

const formElements = document.querySelectorAll(".form input, .form textarea");

formElements.forEach((element) => {
  element.addEventListener("keyup", handleInputEvent);
  element.addEventListener("blur", handleInputEvent);
  element.addEventListener("focus", handleInputEvent);
});

function handleInputEvent(e) {
  const input = e.target;
  const label = input.previousElementSibling;

  if (e.type === "keyup") {
    if (input.value === "") {
      label.classList.remove("active", "highlight");
    } else {
      label.classList.add("active", "highlight");
    }
  } else if (e.type === "blur") {
    if (input.value === "") {
      label.classList.remove("active", "highlight");
    } else {
      label.classList.remove("highlight");
    }
  } else if (e.type === "focus") {
    if (input.value === "") {
      label.classList.remove("highlight");
    } else {
      label.classList.add("highlight");
    }
  }
}

const tabLinks = document.querySelectorAll(".tab a");

tabLinks.forEach((link) => {
  link.addEventListener("click", handleTabClick);
});

function handleTabClick(e) {
  e.preventDefault();

  const link = e.target;
  const parent = link.parentElement;

  parent.classList.add("active");

  const siblings = Array.from(parent.parentElement.children).filter(
    (child) => child !== parent
  );

  siblings.forEach((sibling) => {
    sibling.classList.remove("active");
  });

  const target = link.getAttribute("href");

  const tabContents = document.querySelectorAll(".tab-content > div");

  tabContents.forEach((content) => {
    if (content.id === target.substring(1)) {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}
