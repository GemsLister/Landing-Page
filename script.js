const signUpBtn = document.querySelector("#sign-up-btn");
const sectionFour = document.querySelector("#section-4");
const containerBg = document.querySelector(".container4");
const containerBg2 = document.querySelector(".container3");
const container3Para = document.querySelector(".quote-section p");

let isActive = false;
signUpBtn.addEventListener("click", () => {
  if (!isActive) {
    sectionFour.style.cssText = `
    background-color: #078080;
    border-radius: 13px;`;
    containerBg.style.backgroundColor = "#f45d48";
    containerBg2.style.backgroundColor = "#d1d1e9";
    container3Para.textContent = "Hello World!";
    console.log("true");
    isActive = true;
  } else {
    sectionFour.style.cssText = ``;
    containerBg.style.backgroundColor = "";
    containerBg2.style.backgroundColor = "";
    container3Para.textContent = `This is an inspiring quote, or a testimonial from a 
                        customer. Maybe it's just filling up space, or maybe
                        people will actually read it. Who knows? All I know
                        is that it looks nice.`;
    isActive = false;
  }
});
