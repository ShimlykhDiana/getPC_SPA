const sendForm = () => {
  //using function for incapsulation
  const form = document.querySelector(".modal");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = form.querySelector('input[type="text"]');
    const tel = form.querySelector('input[type="tel"]');
    const email = form.querySelector('input[type="email"]');
    const sendObj = {
      name: text.value,
      phone: tel.value,
      email: email.value,
    };

    // fetch("https://jsonplaceholder.typicode.com/todos/4") //url - 1st arg, 2nd - object of settings: how it works (get, post,putm patch or delete ), if not use it - by default it's GET
    //   .then((response) => response.json()) //waiting for the server to get all data and give here, but this data isn't usual, we need to "compile them" and it takes time, so we need to wait again
    //   .then((json) => console.log(json)); //final waiting is finished, data is shown.

    // fetch("https://jsonplaceholder.typicode.com/todos/4") //url - 1st arg, 2nd - object of settings: how it works (get, post,putm patch or delete ), if not use it - by default it's GET
    //   .then((response) => {
    //     if (response.status === 404) {
    //       throw new Error("Not found");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => console.log(data))

    //   .catch((error) => console.warn(error))

    //   .finally(() => console.log("finally") //work anyway
    //   );

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(sendObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status !== 201) {
          throw new Error("Not working properly");
        }
        return response.json();
      })
      .then((json) => console.log(json))

      .catch((error) => alert(error))
      .finally(() => {
        text.value = "";
        tel.value = "";
        email.value = "";
      });
  });
};

sendForm();
