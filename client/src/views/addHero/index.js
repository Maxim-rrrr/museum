import React from 'react';
import Header from "./components/Header"
import Container from "@material-ui/core/Container";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Checkbox from '@material-ui/core/Checkbox';

import SectionImgText from "./components/Sections/SectionImgText"
import SectionTextImg from "./components/Sections/SectionTextImg"
import SectionText from "./components/Sections/SectionText"
import SectionImg from "./components/Sections/SectionImg"
import SectionImgImg from "./components/Sections/SectionImgImg"
import SectionTextText from "./components/Sections/SectionTextText"

import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

import "./addHero.sass"

import { useHttp } from "../../hooks/http.hook"

export const typeSectionImgText = 1
export const typeSectionTextImg = 2
export const typeSectionText = 3
export const typeSectionImg = 4
export const typeSectionTextText = 5
export const typeSectionImgImg = 6


const AddHero = () => {
  // Alert 
  const [alert, setAlert] = React.useState(false);
  const [alertText, setAlertText] = React.useState("");
  const [alertColor, setAlertColor] = React.useState("error");
  /**
   * Возможные цвета:
   * error, warning, info, success
   */
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert(false);
  };

  // Sidebar
  const [sideBar, setSideBar] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    setSideBar({ ...sideBar, [anchor]: open });
  };

  // Sections
  const [sections, setSections] = React.useState([
    {
      type: typeSectionImgText,
      content: { img: "", text: "" },
      additionallyTop: [],
      additionallyBottom: [],
    }
  ])

  const setContent = (index, key, value) => {
    let s = sections
    s[index].content[key] = value
    setSections(s)
  }

  const addSection = (type) => {
    let section = {
      type,
      content: {},
      additionallyTop: [],
      additionallyBottom: [],
    }

    if (type === typeSectionImgText || type === typeSectionTextImg) {
      section.content = { img: "", img_sign: "", text: "", title: "", subtitle: "" }
    } else if (type === typeSectionText) {
      section.content = { text: "", title: "", subtitle: "" }
    } else if (type === typeSectionImg) {
      section.content = { img: "", img_sign: "", title: "", subtitle: "" }
    } else if (type === typeSectionTextText) {
      section.content = { text1: "", text2: "", title: "", subtitle: "" }
    } else if (type === typeSectionImgImg) {
      section.content = { img1: "", img2: "", img_sign1: "", img_sign2: "", title: "", subtitle: "" }
    }

    setSections([...sections, section])

    // console.log(sections)
  }

  const delSection = (index) => {
    let s = sections
    s.splice(index, 1)
    setSections(s)
    
    // Костыль для перерендеринга
    setSideBar({ ...sideBar, ["right"]: false });
  }

  // Form
  const [values, setValues] = React.useState({
    nameHero: "",
    surnameHero: "",
    patronymicHero: "",
    email: "",
    whoWrote: "",
    byWhom: ""
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [checked, setChecked] = React.useState(true);

  const changeCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  const { request } = useHttp();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Проверка обязательных полей в форме
      if (!values.nameHero) {
        setAlertText("Фамилия не указана")
        setAlertColor("error")
        setAlert(true)
        return
      } 

      if (!values.surnameHero) {
        setAlertText("Имя не указанo")
        setAlertColor("error")
        setAlert(true)
        return
      } 

      if (!values.email) {
        setAlertText("Email не указан")
        setAlertColor("error")
        setAlert(true)
        return
      } 

      if (!checked) {
        setAlertText("Подтвердите согласие с пользовательским соглашением")
        setAlertColor("error")
        setAlert(true)
        return
      } 

      if (!values.whoWrote) {
        setAlertText("Не указан заявитель")
        setAlertColor("error")
        setAlert(true)
        return
      } 

      if (!values.byWhom) {
        setAlertText("Не указано кем приходится вам ветеран")
        setAlertColor("error")
        setAlert(true)
        return
      } 

      // Проверка на заполненность секций
      let validSection = true;

      sections.forEach((section, index) => {
        if (Object.keys(section.content).some(v => v == "img")) {
          if (!section.content.img) {
            setAlertText(`В ${index + 1} секции не загружено изображение`)
            setAlertColor("error")
            setAlert(true)
            validSection = false
          } 
        }
        if (Object.keys(section.content).some(v => v == "img1" || v == "img2")) {
          if (!section.content.img1 || !section.content.img2) {
            setAlertText(`В ${index + 1} секции не загружено изображение`)
            setAlertColor("error")
            setAlert(true)
            validSection = false
          } 
        }

        if (Object.keys(section.content).some(v => v == "text")) {
          if (!section.content.text) {
            setAlertText(`В ${index + 1} не заполнено текстовое поле`)
            setAlertColor("error")
            setAlert(true)
            validSection = false
          } 
        }
        if (Object.keys(section.content).some(v => v == "text1" || v == "text2")) {
          if (!section.content.text1 || !section.content.text2) {
            setAlertText(`В ${index + 1} не заполнено текстовое поле`)
            setAlertColor("error")
            setAlert(true)
            validSection = false
          } 
        }

      })

      if (!validSection) {
        return
      }
      /**
       * Сбор изображений для отправки
       * 
       * С начала собираем все изображения со страницы, в полях img оставляем 
       * пустые строки пока, и на сервер отправляем массив файлов и саму структуру страницы,
       * там этот массив примет multer и сохранит все файлы на сервере.
       */
      let images = []
      sections.forEach((section, index) => {
        if (Object.keys(section.content).some(v => v == "img")) {
          images.push(section.content.img)
        }
        if (Object.keys(section.content).some(v => v == "img1" || v == "img2")) {
          images.push(section.content.img1)
          images.push(section.content.img2)
        }
      })

      

      const formData = new FormData();

      formData.append("surnameHero", values.surnameHero);
      formData.append("nameHero", values.nameHero);
      formData.append("patronymicHero", values.patronymicHero);
      formData.append("email", values.email);
      formData.append("whoWrote", values.whoWrote);
      formData.append("byWhom", values.byWhom);

      formData.append("sections", JSON.stringify(sections));
      
      images.forEach(img => {
        formData.append("images", img);
      })

      const response = await request("/api/hero/create", "POST", formData, true);
      
      if (response) {
        setAlertText("Успешно!")
        setAlertColor("success")
        setAlert(true)
        setRedirect(true)
      } else {
        setAlertText("Ошибка отправки")
        setAlertColor("error")
        setAlert(true)
      }


    } catch (e) {
      console.log(e);
    }
  }
  
  const [redirect, setRedirect] = React.useState(false)

  return (
    <>
      {
        redirect &&
        <Redirect to={{
          pathname: '/'
        }} />
      }

      <Header 
        title="Увековечить память ветерана"
        state={ sideBar }
        toggleDrawer={ toggleDrawer }
        addSection = { addSection }
      />

      {/* <Container> */}
        {
          sections.map((section, index) => {
            if (section.type === typeSectionImgText) {
              return (
                <SectionImgText 
                  index = { index } 
                  last = { index === sections.length - 1 } 
                  first = { index === 0 } 
                  name = { 
                    values.surname || values.name || values.patronymic ? 
                    `${values.surname} ${values.name} ${values.patronymic}` : ""
                  }
                  setContent = {setContent}
                  delSection = {delSection}
                />
              )
            } else if (section.type === typeSectionTextImg) {
              return (
                <SectionTextImg 
                  index = { index } 
                  last = { index === sections.length - 1 } 
                  first = { index === 0 } 
                  setContent = {setContent}
                  delSection = {delSection}
                />
              )
            } else if (section.type === typeSectionText) {
              return (
                <SectionText
                  index = { index } 
                  last = { index === sections.length - 1 } 
                  first = { index === 0 } 
                  setContent = {setContent}
                  delSection = {delSection}
                />
              )
            } else if (section.type === typeSectionImg) {
              return (
                <SectionImg
                  index = { index } 
                  last = { index === sections.length - 1 } 
                  first = { index === 0 } 
                  setContent = {setContent}
                  delSection = {delSection}
                />
              )
            } else if (section.type === typeSectionImgImg) {
              return (
                <SectionImgImg
                  index = { index } 
                  last = { index === sections.length - 1 } 
                  first = { index === 0 } 
                  setContent = {setContent}
                  delSection = {delSection}
                />
              )
            } else if (section.type === typeSectionTextText) {
              return (
                <SectionTextText
                  index = { index } 
                  last = { index === sections.length - 1 } 
                  first = { index === 0 } 
                  setContent = {setContent}
                  delSection = {delSection}
                />
              )
            }
          })
        }

      
        <button 
          className="open-sidebar-btn"
          onClick = { toggleDrawer('right', true) }
        >
          +
        </button>
      {/* </Container> */}
      
      <Container maxWidth="md">
        <form
          onSubmit={(event) => handleSubmit(event)}
          noValidate
          autoComplete="off"
          style = {{ marginBottom: "7rem" }}
        >

          <h2 style = {{ textAlign: "center" }}>ФИО Ветерана</h2>

          <div 
            style = {{ 
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextField
              // className={classes.input}
              id="outlined-basic"
              label="Фамилия"
              variant="outlined"
              value={values.surnameHero}
              onChange={handleChange("surnameHero")}
              required
            />

            <TextField
              // className={classes.input}
              id="outlined-basic"
              label="Имя"
              variant="outlined"
              value={values.nameHero}
              onChange={handleChange("nameHero")}
              required
            />

            <TextField
              // className={classes.input}
              id="outlined-basic"
              label="Отчество"
              variant="outlined"
              value={values.patronymicHero}
              onChange={handleChange("patronymicHero")}
            />
          </div>
          
          <h2 style = {{ textAlign: "center" }}> Заявитель </h2>

          <div 
            style = {{ 
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              // className={classes.input}
              id="outlined-basic"
              label="Студент(ка) N курса, факультета ..., <ФИО>"
              variant="outlined"
              value={values.whoWrote}
              onChange={handleChange("whoWrote")}
              required
              style = {{ 
                width: "100%"
              }}
            />
          </div>

          <h2 style = {{ textAlign: "center" }}> Кем вам приходится ветеран? </h2>

          <div 
            style = {{ 
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              // className={classes.input}
              id="outlined-basic"
              label="Дедушка / Прадедушка / Бабушка / Прабабушка / ..."
              variant="outlined"
              value={values.byWhom}
              onChange={handleChange("byWhom")}
              required
              style = {{ 
                width: "100%"
              }}
            />
          </div>

          <h2 style = {{ textAlign: "center" }}>Email для отправки уведомления о проверки страницы</h2>
          
          <div 
            style = {{ 
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              // className={classes.input}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={values.email}
              onChange={handleChange("email")}
              required
            />
          </div>
          
          <div style={{ 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "2rem 0"
          }}>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              onChange = {event => changeCheckbox(event)}
            />
            <span>Соглашаюсь с условиями <a href="../files/terms-use.pdf" target="_blank">пользовательского соглашения</a></span>
          </div>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{
              display: "block",
              margin: "4rem auto",
              // marginBottom: "7rem",
              width: "25%",
            }}
          >
            Опубликовать
          </Button>
        </form>

        <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={alertColor}>
            { alertText }
          </Alert>
        </Snackbar>
      </Container>
      
      
    </>
  )
}

export default AddHero


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}