const toastTrigger = document.getElementById("liveToastBtn");
const toastLive = document.getElementById("liveToast");

var i = 0;
var msg = "Hello! How can I help you?";

const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive);
function toast() {
  document.getElementById("msg").innerHTML = "";
  i = 0;
  toastBootstrap.show();
  msg =
    "Hi there! Welcome to iCET - Institute of Computer Engineering and Technology. I'm Teci, your digital assistant. Please can I know your name?";
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

function getAge() {
  // Get the user's input from the input field
  i = 0;
  var userName = document.getElementById("txtName").value;
  if (userName != "") {
    // You can use userName as needed (e.g., display it in another toast)
    console.log("Name : " + document.getElementById("txtName").value);
    msg =
      "Nice to meet you " + userName + "! Could you please tell me your age?";
    const toast_body = document.getElementById("toast-body");
    toast_body.innerHTML = "";

    //create the msg div element
    const grt = document.createElement("div");
    grt.className = "msg";
    grt.id = "msg";

    toast_body.appendChild(grt);

    //create the input text field element
    const txt_div = document.createElement("input");
    txt_div.className = "form-control";
    txt_div.id = "txtAge";
    txt_div.type = "text";
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
      askEducation();
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

    writer();
  }
}

function askEducation() {
  i = 0;

  if (document.getElementById("txtAge").value != "") {
    console.log("Age : " + document.getElementById("txtAge").value);

    msg = "What is your Highest Education Qualification?";
    const toast_body = document.getElementById("toast-body");
    toast_body.innerHTML = "";

    //create the msg div element
    const grt = document.createElement("div");
    grt.className = "msg";
    grt.id = "msg";

    toast_body.appendChild(grt);

    //create the input text field element
    const txt_div = document.createElement("input");
    txt_div.className = "form-control";
    txt_div.id = "txtEdu";
    txt_div.type = "text";
    txt_div.placeholder = "Please enter your qualification";

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
      askEmployability();
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

    writer();
  }
}

function askEmployability() {
  i = 0;
  if (document.getElementById("txtEdu").value != "") {
    console.log("Education : " + document.getElementById("txtEdu").value);

    msg = "Are you currently employed?";
    const toast_body = document.getElementById("toast-body");
    toast_body.innerHTML = "";

    //create the msg div element
    const grt = document.createElement("div");
    grt.className = "msg";
    grt.id = "msg";

    toast_body.appendChild(grt);

    //create submit button element
    const btn_yes = document.createElement("button");
    btn_yes.className = "btn btn-outline-primary";
    btn_yes.type = "button";
    btn_yes.innerHTML = "Yes";
    btn_yes.addEventListener("click", () => {
      askITRelated();
    });

    const btn_no = document.createElement("button");
    btn_no.className = "btn btn-outline-primary";
    btn_no.type = "button";
    btn_no.innerHTML = "No";
    btn_no.addEventListener("click", () => {
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
}

function askITRelated() {
  i = 0;
  console.log("Employability : yes");

  msg = "Are you working in the IT Industry?";
  const toast_body = document.getElementById("toast-body");
  toast_body.innerHTML = "";

  //create the msg div element
  const grt = document.createElement("div");
  grt.className = "msg";
  grt.id = "msg";

  toast_body.appendChild(grt);

  //create submit button element
  const btn_yes = document.createElement("button");
  btn_yes.className = "btn btn-outline-primary";
  btn_yes.type = "button";
  btn_yes.innerHTML = "Yes";
  btn_yes.addEventListener("click", () => {
    courses();
  });

  const btn_no = document.createElement("button");
  btn_no.className = "btn btn-outline-primary";
  btn_no.type = "button";
  btn_no.innerHTML = "No";
  btn_no.addEventListener("click", () => {
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
  console.log("courses");
}

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
  location.reload();
}
