// signin

const signupForm = document.getElementById("signup_form");
const signinForm = document.getElementById("signin_form");
const google_click = document.getElementById("google_click");

const signupFun = async (event) => {
  event.preventDefault();

  let formD = new FormData(signupForm);
  let data = Object.fromEntries(formD.entries());

  let promise = await fetch("https://fair-pink-fawn-cape.cyclic.app//user/signup", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

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

  let promise = await fetch("https://fair-pink-fawn-cape.cyclic.app//user/signin", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

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
  window.location.href = "https://fair-pink-fawn-cape.cyclic.app/user/auth/google";
};
