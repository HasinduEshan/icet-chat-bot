const toastTrigger = document.getElementById("liveToastBtn");
const toastLive = document.getElementById("liveToast");

var i = 0;
var userName = "";
var age = 0;
var contact = "";
var edu = "";
var isEmp = "No";
var isIt = "";
var msg =
  "Hi there! Welcome to iCET Institute. I'm Teci, your digital assistant. Can I please know your name?";

const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive);
function start() {
  // document.getElementById("msg").innerHTML = "";
  i = 0;
  toastBootstrap.show();
  msg =
    "Hi there! Welcome to iCET Institute. I'm Teci, your digital assistant. Can I please know your name?";
  const toast_body = document.getElementById("toast-body");
  toast_body.innerHTML = "";

  const avtr_div = document.createElement("div");
  avtr_div.className = "avtr_div";
  const avtr = document.createElement("img");
  avtr.className = "avtr";
  avtr.src = "./img/teci.png";
  avtr_div.appendChild(avtr);

  //create the msg div element
  const grt = document.createElement("div");
  grt.className = "msg";
  grt.id = "msg";

  avtr_div.appendChild(grt);
  toast_body.appendChild(avtr_div);

  //create the input text field element
  const txt_div = document.createElement("input");
  txt_div.className = "form-control";
  txt_div.id = "txtName";
  txt_div.type = "text";
  txt_div.required = true;
  txt_div.onkeydown = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      if(txt_div.value != ""){
        askAge();
      }
    }
  };
  txt_div.focus();
  txt_div.placeholder = "Please enter your name";

  //create input text field elemnt holder div
  const txt_div_holder = document.createElement("div");
  txt_div_holder.className = "d-flex justify-content-end";
  txt_div_holder.appendChild(txt_div);

  //create submit button element
  const btn_submit = document.createElement("button");
  btn_submit.className = "btn btn-outline-primary";
  btn_submit.type = "button";
  btn_submit.innerHTML = "Next";
  btn_submit.addEventListener("click", () => {
    if(txt_div.value != ""){
      askAge();
    }
  });

  //create submit button holder div element
  const btn_submit_holder = document.createElement("div");
  btn_submit_holder.className = "d-flex justify-content-end btn-submit";
  btn_submit_holder.appendChild(btn_submit);

  //create the input elements wrapper div
  const input_div = document.createElement("div");
  input_div.appendChild(txt_div_holder);
  input_div.appendChild(btn_submit_holder);

  toast_body.appendChild(input_div);

  //create the empty tips div element
  const tips = document.createElement("div");
  tips.className = "mt-2 pt-2 border-top tips";
  tips.id = "tips";

  toast_body.appendChild(tips);

  txt_div.focus();

  writer();
}

//writting effect
function writer() {
  if (i < msg.length) {
    document.getElementById("msg").innerHTML += msg.charAt(i); //set msg from iCET
    i++;
    setTimeout(writer, 40);
  }
}

function sendSMS(contact, sms) {
  //url
  function _0x545a() {
    const _0x38cc20 = [
      "5963481nMiRpT",
      "4062149emYRDf",
      "3oAXNCN",
      "12MVFOwt",
      "11WatqJj",
      "96670HgdLTR",
      "11209730KEFvUq",
      "6HObeUb",
      "2690872shPfXs",
      "https://sms.textware.lk:5001/sms/send_sms.php",
      "223894osqkgQ",
      "11217CXCoUG",
    ];
    _0x545a = function () {
      return _0x38cc20;
    };
    return _0x545a();
  }
  function _0x12f5(_0x2a55ea, _0x552a6b) {
    const _0x545aab = _0x545a();
    return (
      (_0x12f5 = function (_0x12f5d6, _0x992189) {
        _0x12f5d6 = _0x12f5d6 - 0x1a9;
        let _0x22900d = _0x545aab[_0x12f5d6];
        return _0x22900d;
      }),
      _0x12f5(_0x2a55ea, _0x552a6b)
    );
  }
  const _0x795194 = _0x12f5;
  (function (_0x195e67, _0x35a9f2) {
    const _0x4540be = _0x12f5,
      _0x380f5c = _0x195e67();
    while (!![]) {
      try {
        const _0x2665ec =
          (-parseInt(_0x4540be(0x1ad)) / 0x1) *
            (-parseInt(_0x4540be(0x1a9)) / 0x2) +
          (parseInt(_0x4540be(0x1aa)) / 0x3) *
            (parseInt(_0x4540be(0x1ae)) / 0x4) +
          parseInt(_0x4540be(0x1b0)) / 0x5 +
          (-parseInt(_0x4540be(0x1b2)) / 0x6) *
            (parseInt(_0x4540be(0x1ac)) / 0x7) +
          parseInt(_0x4540be(0x1b3)) / 0x8 +
          -parseInt(_0x4540be(0x1ab)) / 0x9 +
          (parseInt(_0x4540be(0x1b1)) / 0xa) *
            (parseInt(_0x4540be(0x1af)) / 0xb);
        if (_0x2665ec === _0x35a9f2) break;
        else _0x380f5c["push"](_0x380f5c["shift"]());
      } catch (_0x168607) {
        _0x380f5c["push"](_0x380f5c["shift"]());
      }
    }
  })(_0x545a, 0x8dcc8);
  const url = _0x795194(0x1b4);

  // Define the form data as an object
  const _0x29dc69 = _0x9c60;
  function _0x9c60(_0x3c4d3c, _0x1abba2) {
    const _0x41e527 = _0x41e5();
    return (
      (_0x9c60 = function (_0x9c60e0, _0x2db99e) {
        _0x9c60e0 = _0x9c60e0 - 0x1ac;
        let _0x2b9d40 = _0x41e527[_0x9c60e0];
        return _0x2b9d40;
      }),
      _0x9c60(_0x3c4d3c, _0x1abba2)
    );
  }
  function _0x41e5() {
    const _0xffa466 = [
      "100850jnRKzN",
      "iCET",
      "3174128MDwAyX",
      "13573lckvjv",
      "4vQJGEZ",
      "2319200TAiefH",
      "789501FJPUye",
      "1089ZFyFNK",
      "738yhPzsX",
      "3216836loYjDy",
      "n9sSPt0APw",
      "235898OEjtqv",
    ];
    _0x41e5 = function () {
      return _0xffa466;
    };
    return _0x41e5();
  }
  (function (_0x560f1c, _0x2b0bf9) {
    const _0xb8e21d = _0x9c60,
      _0x28ec02 = _0x560f1c();
    while (!![]) {
      try {
        const _0xdfc2e3 =
          -parseInt(_0xb8e21d(0x1b3)) / 0x1 +
          (-parseInt(_0xb8e21d(0x1ac)) / 0x2) *
            (-parseInt(_0xb8e21d(0x1ae)) / 0x3) +
          parseInt(_0xb8e21d(0x1b1)) / 0x4 +
          parseInt(_0xb8e21d(0x1ad)) / 0x5 +
          (-parseInt(_0xb8e21d(0x1b0)) / 0x6) *
            (parseInt(_0xb8e21d(0x1b7)) / 0x7) +
          parseInt(_0xb8e21d(0x1b6)) / 0x8 +
          (parseInt(_0xb8e21d(0x1af)) / 0x9) *
            (-parseInt(_0xb8e21d(0x1b4)) / 0xa);
        if (_0xdfc2e3 === _0x2b0bf9) break;
        else _0x28ec02["push"](_0x28ec02["shift"]());
      } catch (_0x3051ec) {
        _0x28ec02["push"](_0x28ec02["shift"]());
      }
    }
  })(_0x41e5, 0x79355);
  const formData = {
    username: "icet.lk",
    password: _0x29dc69(0x1b2),
    src: _0x29dc69(0x1b5),
    dst: contact,
    msg: sms,
    dr: "1",
  };

  // Encode the form data
  const encodedData = new URLSearchParams(formData).toString();

  // Create the fetch request
  fetch(url, {
    method: "POST",
    body: encodedData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    mode: "no-cors",
  }).then((response) => {
    console.log(response);
  });
}

function askAge() {
  // Get the user's input from the input field
  i = 0;
  userName = document.getElementById("txtName").value;
  if (userName != "") {
    // You can use userName as needed (e.g., display it in another toast)
    console.log("Name : " + userName);
    msg =
      "Nice to meet you " + userName + "! Could you please tell me your age?";
    const toast_body = document.getElementById("toast-body");
    toast_body.innerHTML = "";

    const avtr_div = document.createElement("div");
    avtr_div.className = "avtr_div";
    const avtr = document.createElement("img");
    avtr.className = "avtr";
    avtr.src = "./img/teci.png";
    avtr_div.appendChild(avtr);

    //create the msg div element
    const grt = document.createElement("div");
    grt.className = "msg";
    grt.id = "msg";

    avtr_div.appendChild(grt);
    toast_body.appendChild(avtr_div);

    //create the input text field element
    const txt_div = document.createElement("input");
    txt_div.className = "form-control";
    txt_div.id = "txtAge";
    txt_div.type = "text";
    txt_div.required = true; // Mark the field as required

    // Add the pattern attribute for age validation
    txt_div.pattern = "^(0?[1-9]|[1-9][0-9])$"; // This pattern allows ages from 1 to 99

    txt_div.onkeydown = (event) => {
      if (event.key === "Enter" || event.keyCode === 13) {
        age = document.getElementById("txtAge").value;
        if (age > 0 && age < 100) {
          askContact();
        } else {
          txt_div.value = "";
        }
      }
    };
    txt_div.placeholder = "Please enter your age";

    //create input text field elemnt holder div
    const txt_div_holder = document.createElement("div");
    txt_div_holder.className = "d-flex justify-content-end";
    txt_div_holder.appendChild(txt_div);

    //create submit button element
    const btn_submit = document.createElement("button");
    btn_submit.className = "btn btn-outline-primary";
    btn_submit.type = "button";
    btn_submit.innerHTML = "Next";
    btn_submit.addEventListener("click", () => {
      age = document.getElementById("txtAge").value;
      if (age > 0 && age < 100) {
        askContact();
      } else {
        txt_div.value = "";
      }
    });

    //create submit button holder div element
    const btn_submit_holder = document.createElement("div");
    btn_submit_holder.className = "d-flex justify-content-end btn-submit";
    btn_submit_holder.appendChild(btn_submit);

    //create the input elements wrapper div
    const input_div = document.createElement("div");
    input_div.appendChild(txt_div_holder);
    input_div.appendChild(btn_submit_holder);

    toast_body.appendChild(input_div);

    //create the empty tips div element
    const tips = document.createElement("div");
    tips.className = "mt-2 pt-2 border-top tips";
    tips.id = "tips";

    toast_body.appendChild(tips);
    txt_div.focus();

    writer();
  }
}

function askContact() {
  // Get the user's input from the input field
  i = 0;
  if (age != "") {
    // You can use userName as needed (e.g., display it in another toast)
    console.log("Age : " + age);

    msg = "What is your contact number (Whatsapp) ?";
    const toast_body = document.getElementById("toast-body");
    toast_body.innerHTML = "";

    const avtr_div = document.createElement("div");
    avtr_div.className = "avtr_div";
    const avtr = document.createElement("img");
    avtr.className = "avtr";
    avtr.src = "./img/teci.png";
    avtr_div.appendChild(avtr);

    //create the msg div element
    const grt = document.createElement("div");
    grt.className = "msg";
    grt.id = "msg";

    avtr_div.appendChild(grt);
    toast_body.appendChild(avtr_div);

    //create the input text field element
    const txt_div = document.createElement("input");
    txt_div.className = "form-control";
    txt_div.id = "txtContact";
    txt_div.type = "text";
    txt_div.pattern = "^\\d{10}$";

    txt_div.onkeydown = (event) => {
      if (event.key === "Enter" || event.keyCode === 13) {
        if (txt_div.checkValidity()) {
          contact = txt_div.value;
          if (contact != "" && age > 14 && age < 36) {
            askEducation();
          } else if (contact != "" && age > 11 && age < 15) {
            console.log("Contact: " + contact);
            icm();
            sendSMS(
              contact,
              "Thank you for your inquiry. We will contact you soon. For more info, please call or WhatsApp on 0705805805" //115
            );
          } else if (contact != "") {
            disqualified();
            sendSMS(
              contact,
              "Thank you for your inquiry. For more info, please call or WhatsApp on 0705805805" //115
            );
          }
        }
      }
    };
    txt_div.placeholder = "Please enter your contact number";

    //create input text field elemnt holder div
    const txt_div_holder = document.createElement("div");
    txt_div_holder.className = "d-flex justify-content-end";
    txt_div_holder.appendChild(txt_div);

    //create submit button element
    const btn_submit = document.createElement("button");
    btn_submit.className = "btn btn-outline-primary";
    btn_submit.type = "button";
    btn_submit.innerHTML = "Next";
    btn_submit.addEventListener("click", () => {
      if (txt_div.checkValidity()) {
        contact = txt_div.value;
        if (contact != "" && age > 14 && age < 36) {
          askEducation();
        } else if (contact != "" && age > 11 && age < 15) {
          console.log("Contact: " + contact);
          icm();
          sendSMS(
            contact,
            "Thank you for your inquiry. We will contact you soon. For more info, please call or WhatsApp on 0705805805" //115
          );
        } else if (contact != "") {
          disqualified();
          sendSMS(
            contact,
            "Thank you for your inquiry. For more info, please call or WhatsApp on 0705805805" //115
          );
        }
      }
    });

    //create submit button holder div element
    const btn_submit_holder = document.createElement("div");
    btn_submit_holder.className = "d-flex justify-content-end btn-submit";
    btn_submit_holder.appendChild(btn_submit);

    //create the input elements wrapper div
    const input_div = document.createElement("div");
    input_div.appendChild(txt_div_holder);
    input_div.appendChild(btn_submit_holder);

    toast_body.appendChild(input_div);

    //create the empty tips div element
    const tips = document.createElement("div");
    tips.className = "mt-2 pt-2 border-top tips";
    tips.id = "tips";

    toast_body.appendChild(tips);
    txt_div.focus();

    writer();
  }
}

function askEducation() {
  i = 0;

  if (document.getElementById("txtContact").value != "") {
    contact = document.getElementById("txtContact").value;

    console.log("Contact : " + contact);

    msg = "What is your Highest Education Qualification?";
    const toast_body = document.getElementById("toast-body");
    toast_body.innerHTML = "";

    const avtr_div = document.createElement("div");
    avtr_div.className = "avtr_div";
    const avtr = document.createElement("img");
    avtr.className = "avtr";
    avtr.src = "./img/teci.png";
    avtr_div.appendChild(avtr);

    //create the msg div element
    const grt = document.createElement("div");
    grt.className = "msg";
    grt.id = "msg";

    avtr_div.appendChild(grt);
    toast_body.appendChild(avtr_div);

    //create data list
    const list = [
      "Before O/L",
      "O/L",
      "A/L",
      "Diploma",
      "HND",
      "Undergraduate (Non IT)",
      "Undergraduate (IT)",
      "Graduate (Non IT)",
      "Graduate (IT)",
      "Msc.",
      "Above Msc.",
    ];

    const data_list = document.createElement("datalist");
    data_list.id = "browsers";
    list.forEach((val) => {
      const option = document.createElement("option");
      option.value = val;
      data_list.appendChild(option);
    });

    //create the input text field element
    const txt_div = document.createElement("input");
    txt_div.className = "form-control";
    txt_div.id = "txtEdu";
    txt_div.type = "text";
    txt_div.onkeydown = (event) => {
      if (event.key === "Enter" || event.keyCode === 13) {
        edu = txt_div.value;
        if(edu != ""){
          if (edu == "Before O/L" || edu == "O/L") {
            icm();
            sendSMS(
              contact,
              "Thank you for your inquiry.We will contact you soon.For more info please call or WhatsApp on 0705805805" //115
            );
          } else {
            askEmployability();
          }
        }
      }
    };
    txt_div.setAttribute("list", "browsers");
    txt_div.placeholder = "Please enter your qualification";

    //create input text field elemnt holder div
    const txt_holder = document.createElement("div");
    txt_holder.className = "d-flex justify-content-center";
    txt_holder.appendChild(txt_div);
    txt_holder.appendChild(data_list);

    //create submit button element
    const btn_submit = document.createElement("button");
    btn_submit.className = "btn btn-outline-primary";
    btn_submit.type = "button";
    btn_submit.innerHTML = "Next";
    btn_submit.addEventListener("click", () => {
      edu = txt_div.value;
      if(edu != ""){
        if (edu == "Before O/L" || edu == "O/L") {
          icm();
          sendSMS(
            contact,
            "Thank you for your inquiry.We will contact you soon.For more info please call or WhatsApp on 0705805805" //115
          );
        } else {
          askEmployability();
        }
        // sendSMS(
        //   "94712272272",
        //   "Name : " + userName + "\nContact : " + contact + "\nAge : " +age+"\nEducation : "+txt_div.value
        // );
      }
    });

    //create submit button holder div element
    const btn_submit_holder = document.createElement("div");
    btn_submit_holder.className = "d-flex justify-content-end btn-submit";
    btn_submit_holder.appendChild(btn_submit);

    //create the input elements wrapper div
    const input_div = document.createElement("div");
    input_div.appendChild(txt_holder);
    input_div.appendChild(btn_submit_holder);

    toast_body.appendChild(input_div);

    //create the empty tips div element
    const tips = document.createElement("div");
    tips.className = "mt-2 pt-2 border-top tips";
    tips.id = "tips";

    toast_body.appendChild(tips);
    txt_div.focus();

    writer();
  }
}

function askEmployability() {
  i = 0;
  console.log("Education : " + edu);

  msg = "Are you currently employed?";
  const toast_body = document.getElementById("toast-body");
  toast_body.innerHTML = "";

  const avtr_div = document.createElement("div");
  avtr_div.className = "avtr_div";
  const avtr = document.createElement("img");
  avtr.className = "avtr";
  avtr.src = "./img/teci.png";
  avtr_div.appendChild(avtr);

  //create the msg div element
  const grt = document.createElement("div");
  grt.className = "msg";
  grt.id = "msg";

  avtr_div.appendChild(grt);
  toast_body.appendChild(avtr_div);

  //create submit button element
  const btn_yes = document.createElement("button");
  btn_yes.className = "btn btn-outline-primary";
  btn_yes.type = "button";
  btn_yes.innerHTML = "Yes";
  btn_yes.addEventListener("click", () => {
    // console.log("Employability : Yes");
    isEmp = "Yes";
    askITRelated();
  });

  const btn_no = document.createElement("button");
  btn_no.className = "btn btn-outline-primary";
  btn_no.type = "button";
  btn_no.innerHTML = "No";
  btn_no.addEventListener("click", () => {
    // console.log("Employability : No");
    isEmp = "No";
    courses();
  });

  //create submit button holder div element
  const btn_submit_holder = document.createElement("div");
  btn_submit_holder.className = "d-flex justify-content-end btn-submit";
  btn_submit_holder.appendChild(btn_yes);
  btn_submit_holder.appendChild(btn_no);

  //create the input elements wrapper div
  const input_div = document.createElement("div");
  input_div.appendChild(btn_submit_holder);

  toast_body.appendChild(input_div);

  //create the empty tips div element
  const tips = document.createElement("div");
  tips.className = "mt-2 pt-2 border-top tips";
  tips.id = "tips";

  toast_body.appendChild(tips);

  writer();
}

function askITRelated() {
  i = 0;
  console.log("Employability : " + isEmp);

  msg = "Are you working in the IT Industry?";
  const toast_body = document.getElementById("toast-body");
  toast_body.innerHTML = "";

  const avtr_div = document.createElement("div");
  avtr_div.className = "avtr_div";
  const avtr = document.createElement("img");
  avtr.className = "avtr";
  avtr.src = "./img/teci.png";
  avtr_div.appendChild(avtr);

  //create the msg div element
  const grt = document.createElement("div");
  grt.className = "msg";
  grt.id = "msg";

  avtr_div.appendChild(grt);
  toast_body.appendChild(avtr_div);

  //create submit button element
  const btn_yes = document.createElement("button");
  btn_yes.className = "btn btn-outline-primary";
  btn_yes.type = "button";
  btn_yes.innerHTML = "Yes";
  btn_yes.addEventListener("click", () => {
    // console.log("IT Related : Yes");
    isIt = "Yes";
    courses();
  });

  const btn_no = document.createElement("button");
  btn_no.className = "btn btn-outline-primary";
  btn_no.type = "button";
  btn_no.innerHTML = "No";
  btn_no.addEventListener("click", () => {
    // console.log("IT Related : No");
    isIt = "No";
    courses();
  });

  //create submit button holder div element
  const btn_submit_holder = document.createElement("div");
  btn_submit_holder.className = "d-flex justify-content-end btn-submit";
  btn_submit_holder.appendChild(btn_yes);
  btn_submit_holder.appendChild(btn_no);

  //create the input elements wrapper div
  const input_div = document.createElement("div");
  input_div.appendChild(btn_submit_holder);

  toast_body.appendChild(input_div);

  //create the empty tips div element
  const tips = document.createElement("div");
  tips.className = "mt-2 pt-2 border-top tips";
  tips.id = "tips";

  toast_body.appendChild(tips);

  writer();
}

function courses() {
  console.log("Employability : " + isEmp);
  console.log("IT Related : " + isIt);
  // console.log("courses");

  // Get the user's input from the input field
  i = 0;
  // You can use userName as needed (e.g., display it in another toast)

  msg =
    "Congratulations! You are eligible for one of our training programs.Our student Coordinator will contact you soon.";
  const toast_body = document.getElementById("toast-body");
  toast_body.innerHTML = "";

  const avtr_div = document.createElement("div");
  avtr_div.className = "avtr_div";
  const avtr = document.createElement("img");
  avtr.className = "avtr";
  avtr.src = "./img/teci.png";
  avtr_div.appendChild(avtr);

  //create the msg div element
  const grt = document.createElement("div");
  grt.className = "msg";
  grt.id = "msg";

  avtr_div.appendChild(grt);
  toast_body.appendChild(avtr_div);

  //create submit button element
  const btn_submit = document.createElement("button");
  btn_submit.className = "btn btn-outline-primary";
  btn_submit.type = "button";
  btn_submit.innerHTML = "Contact";
  btn_submit.setAttribute("data-bs-toggle", "modal");
  btn_submit.setAttribute("data-bs-target", "#staticBackdrop");
  btn_submit.addEventListener("click", () => {
    console.log("call or whatsApp");
    if (contact != "") {
      sendSMS(
        contact,
        "Thank you for your inquiry.We will contact you soon.For more info please call or WhatsApp on 0705805805" //115
      );
    }
  });

  //create submit button holder div element
  const btn_submit_holder = document.createElement("div");
  btn_submit_holder.className = "d-flex justify-content-end btn-submit";
  btn_submit_holder.appendChild(btn_submit);

  //create the input elements wrapper div
  const input_div = document.createElement("div");
  input_div.appendChild(btn_submit_holder);

  toast_body.appendChild(input_div);

  //create the empty tips div element
  const tips = document.createElement("div");
  tips.className = "mt-2 pt-2 border-top tips";
  tips.id = "tips";
  tips.innerHTML = "terms and conditions apply";

  toast_body.appendChild(tips);

  writer();
}

function icm() {
  // Get the user's input from the input field
  i = 0;
  // You can use userName as needed (e.g., display it in another toast)

  msg =
    "Congratulations! You are eligible for our ICM program. One of our Coordinators will contact you soon.";
  const toast_body = document.getElementById("toast-body");
  toast_body.innerHTML = "";

  const avtr_div = document.createElement("div");
  avtr_div.className = "avtr_div";
  const avtr = document.createElement("img");
  avtr.className = "avtr";
  avtr.src = "./img/teci.png";
  avtr_div.appendChild(avtr);

  //create the msg div element
  const grt = document.createElement("div");
  grt.className = "msg";
  grt.id = "msg";

  avtr_div.appendChild(grt);
  toast_body.appendChild(avtr_div);

  //create submit button element
  const btn_submit = document.createElement("button");
  btn_submit.className = "btn btn-outline-primary";
  btn_submit.type = "button";
  btn_submit.innerHTML = "Contact";
  btn_submit.setAttribute("data-bs-toggle", "modal");
  btn_submit.setAttribute("data-bs-target", "#staticBackdrop");
  btn_submit.addEventListener("click", () => {
    console.log("call or whatsApp");
  });

  //create submit button holder div element
  const btn_submit_holder = document.createElement("div");
  btn_submit_holder.className = "d-flex justify-content-end btn-submit";
  btn_submit_holder.appendChild(btn_submit);

  //create the input elements wrapper div
  const input_div = document.createElement("div");
  input_div.appendChild(btn_submit_holder);

  toast_body.appendChild(input_div);

  //create the empty tips div element
  const tips = document.createElement("div");
  tips.className = "mt-2 pt-2 border-top tips";
  tips.id = "tips";
  tips.innerHTML = "terms and conditions apply";

  toast_body.appendChild(tips);

  writer();
}

function disqualified() {
  // Get the user's input from the input field
  i = 0;
  // You can use userName as needed (e.g., display it in another toast)

  msg =
    "Thank you for inquiring about iCET Software Engineering Training Program. Currently we are unable to find a program suits you. Please call us on 0705805805 for further clarifications.";
  const toast_body = document.getElementById("toast-body");
  toast_body.innerHTML = "";

  const avtr_div = document.createElement("div");
  avtr_div.className = "avtr_div";
  const avtr = document.createElement("img");
  avtr.className = "avtr";
  avtr.src = "./img/teci.png";
  avtr_div.appendChild(avtr);

  //create the msg div element
  const grt = document.createElement("div");
  grt.className = "msg";
  grt.id = "msg";

  avtr_div.appendChild(grt);
  toast_body.appendChild(avtr_div);

  //create submit button element
  const btn_submit = document.createElement("button");
  btn_submit.className = "btn btn-outline-primary";
  btn_submit.type = "button";
  btn_submit.innerHTML = "Contact";
  btn_submit.setAttribute("data-bs-toggle", "modal");
  btn_submit.setAttribute("data-bs-target", "#staticBackdrop");
  btn_submit.addEventListener("click", () => {
    console.log("call or whatsApp");
  });

  //create submit button holder div element
  const btn_submit_holder = document.createElement("div");
  btn_submit_holder.className = "d-flex justify-content-end btn-submit";
  btn_submit_holder.appendChild(btn_submit);

  //create the input elements wrapper div
  const input_div = document.createElement("div");
  input_div.appendChild(btn_submit_holder);

  toast_body.appendChild(input_div);

  //create the empty tips div element
  const tips = document.createElement("div");
  tips.className = "mt-2 pt-2 border-top tips";
  tips.id = "tips";
  tips.innerHTML = "terms and conditions apply";

  toast_body.appendChild(tips);

  writer();
}

function contacts() {}

//set faid-in active of starting options
// function setActiveMainTips() {
//   if (l < children.length) {
//     const element = children[l];
//     element.offsetHeight; // This triggers a reflow.
//     element.classList.add("active");
//     l++;
//     setTimeout(setActiveMainTips, 1000);
//   }
// }

//to create customer toast
// function cmToast(txt, list) {
//   i = 0;
//   greating.innerHTML = ""; //msg from iCET div
//   msg = txt;
//   while (tips.firstChild) {
//     tips.removeChild(tips.firstChild);
//   }

//   toastBootstrap.show();

//   writer();
//   setOptions(list);
// }

// function setOptions(list) {
//     if (j < list.length) {
//       const btn = document.createElement("button");
//       btn.type = "button";
//       btn.className = "btn btn-primary btn-sm fade-in";
//       btn.innerHTML = list[j];

//       // Append the button to the container
//       tips.appendChild(btn);
//       btn.offsetHeight;
//       btn.classList.add("active");

//       j++; // Increment j

//       // Use setTimeout to call setOptions with the next item in the list after 500 milliseconds (0.5 seconds)
//       setTimeout(function() {
//         setOptions(list);
//       }, 1000);
//     }
//   }

function reload() {
  // if (contact != "") {
  //   sendSMS(
  //     contact,
  //     "Thank you for your inquiry.We will contact you soon.For more info please call or WhatsApp on 0705805805" //115
  //   );
  // }
  location.reload();
}
