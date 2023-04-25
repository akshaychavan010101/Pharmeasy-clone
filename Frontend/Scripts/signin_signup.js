// signin

const container = document.querySelector(".container");
const design_div = document.querySelector(".design_div");
const signup_form = document.querySelector(".signup_form");
const signupForm = document.getElementById("signup_form");
const signinForm = document.getElementById("signin_form");
const google_click = document.getElementById("google_click");
const continue_with_google = document.getElementById("continue_with_google");
const forgot_pass = document.getElementById("forgot_pass");
const password_edit_model = document.getElementById("password_edit_model");

const signupFun = async (event) => {
  event.preventDefault();

  let formD = new FormData(signupForm);
  let data = Object.fromEntries(formD.entries());

  let promise = await fetch(
    "https://fair-pink-fawn-cape.cyclic.app//user/signup",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let result = await promise.json();

  if (result.error) {
    Swal.fire({
      title: "Error!",
      text: `${result.error}, Please Login`,
      icon: "error",
    }).then();
  } else {
    Swal.fire({
      title: "Signed Up successfully!",
      text: `Login to continue`,
      icon: "success",
    }).then();
  }
};

const signinFun = async (event) => {
  event.preventDefault();

  let formD = new FormData(signinForm);
  let data = Object.fromEntries(formD.entries());

  let promise = await fetch(
    "https://fair-pink-fawn-cape.cyclic.app//user/signin",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let result = await promise.json();

  if (result.error) {
    Swal.fire({
      title: "Error!",
      text: `${result.error}`,
      icon: "error",
    }).then();
  } else {
    Swal.fire({
      title: "Logged In successfully!",
      text: `Welcome ${result.user.name}`,
      icon: "success",
    }).then(() => {
      window.location.href = "./indexa.html";
    });
  }
};

const googleFun = async (event) => {
  event.preventDefault();
  window.location.href =
    "https://fair-pink-fawn-cape.cyclic.app/user/auth/google";
};

const forgotFun = () => {
  password_edit_model.style.display = "block";

  design_div.classList.add("blur");
  container.classList.add("blur");
  signup_form.classList.add("blur");
};

const closeModel = () => {
  password_edit_model.style.display = "none";
  design_div.classList.remove("blur");
  container.classList.remove("blur");
  signup_form.classList.remove("blur");
};

const sendlink = async (event) => {
  event.preventDefault();
  let email = document.getElementById("email_to_send_link").value;
  let promise = await fetch(
    `https://fair-pink-fawn-cape.cyclic.app/user/forgot-password?email=${email}`,
    {
      method: "GET",
    }
  );

  let result = await promise.json();
  alert(result.msg);
  closeModel();
};
