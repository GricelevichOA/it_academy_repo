// variables
const formDef1 = [
    { label: "Название сайта:", kind: "longtext", name: "sitename" },
    { label: "URL сайта:", kind: "longtext", name: "siteurl" },
    { label: "Посетителей в сутки:", kind: "number", name: "visitors" },
    { label: "E-mail для связи:", kind: "shorttext", name: "email" },
    {
      label: "Рубрика каталога:",
      kind: "combo",
      name: "division",
      variants: [
        { text: "здоровье", value: 1 },
        { text: "домашний уют", value: 2 },
        { text: "бытовая техника", value: 3 },
      ],
    },
    {
      label: "Размещение:",
      kind: "radio",
      name: "payment",
      variants: [
        { text: "бесплатное", value: 1 },
        { text: "платное", value: 2 },
        { text: "VIP", value: 3 },
      ],
    },
    { label: "Разрешить отзывы:", kind: "check", name: "votes" },
    { label: "Описание сайта:", kind: "memo", name: "description" },
    { caption: "Опубликовать", kind: "submit" },
  ];
  
  const formDef2 = [
    { label: "Фамилия:", kind: "longtext", name: "lastname" },
    { label: "Имя:", kind: "longtext", name: "firstname" },
    { label: "Отчество:", kind: "longtext", name: "secondname" },
    { label: "Возраст:", kind: "number", name: "age" },
    { caption: "Зарегистрироваться", kind: "submit" },
  ];

const formElem = document.querySelector("#main-form");

// functions
function createForm(formElem, elemsArray) {
    elemsArray.forEach(elem => {
        const inputElem = createInputElem(elem);
        formElem.append(inputElem);        
    });
};

function createInputElem(elem) {
    const inputContainer = document.createElement("div");
    const elemLabel = document.createElement("label");

    elemLabel.setAttribute("for", elem.name);
    elemLabel.innerText = elem.label;
    inputContainer.append(elemLabel);

    switch (elem.kind) { //longtext+, shorttext+, number+, combo+, radio+, check+, memo+, submit+
      case "shorttext":
      case "longtext":
        const textInput = createInputField(elem.name, "text");

        if (elem.kind === "longtext") {
          textInput.classList.add("long");
        }

        inputContainer.append(textInput);
        break;
      case "number":
        inputContainer.append(createInputField(elem.name, "number"));        
        break;
      case "check":
        inputContainer.append(createInputField(elem.name, "checkbox"));
        break;
      case "combo":
        const selectInput = document.createElement("select");
        selectInput.name = elem.name;

        elem.variants.forEach((variant, index) => {
          const variantElem = document.createElement("option");
          variantElem.setAttribute("value", variant.value);
          if (index === 0) {
            variantElem.setAttribute("selected", true);
          }
          variantElem.innerText = variant.text;
          selectInput.append(variantElem);
        })

        inputContainer.append(selectInput);
        break;
      case "radio":
        elem.variants.forEach((variant) => {
          const radioInput = document.createElement("input");
          radioInput.name = elem.name;
          radioInput.type = "radio";

          radioInput.value = variant.value;
          inputContainer.append(radioInput);
          inputContainer.append(variant.text)
        });
        break;
      case "memo":
        const memoInput = document.createElement("textarea");
        memoInput.name = elem.name;

        inputContainer.append(document.createElement("br"));
        inputContainer.append(memoInput);
        break;
      case "submit":
        const submitBtn = document.createElement("input");
        submitBtn.setAttribute("type", elem.kind);
        submitBtn.value = elem.caption;
        return submitBtn;
      default:
        break;
    }

    return inputContainer;
}

function createInputField(name, type) {
  const input = document.createElement("input");
  input.name = name;
  input.type = type;
  return input;
}

// function calls
createForm(formElem, formDef1); // вариант 1
// createForm(formElem, formDef2); // вариант 2