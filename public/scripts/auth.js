const LogForm = document.querySelector(".sign-in");
const RegForm = document.querySelector(".sign-up");

if (LogForm) {
  LogForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;
    const res = await fetch("/api/auth/log", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        score: 0,
      }),
    });
    const data = await res.json();
    if (data.message === "success") {
      window.location.assign("/");
    } else {
      document.querySelector('.error2').innerHTML = data.message;
    }
  });
}

if (RegForm) {
  RegForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, email, password
    } = e.target;
    if (
      name.value.trim() === ''
      || email.value.trim() === ''
      || password.value.trim() === ''
    ) {
      alert('Не все поля заполнены!');
      return;
    }
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    const res = await fetch('/api/auth/registration', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (data.message === 'success') {
      window.location.assign('/');
    } else {
      document.querySelector('.error').innerHTML = data.message;
    }
  });
}