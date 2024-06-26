import "../components/Styles/About.css";

const About = () => {
  return (
    <div className="main-container-about">
      <nav className="nav-container-about">
        <div className="Navbar-about">
          <ul>
            <li>
              <a href="#">
                <i className="ri-briefcase-4-fill"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-user-3-fill"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-gamepad-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="menu-container-about">
        <div className="personal-info-container">
          <div className="box-personal-info">
            <a href="#">
              <i className="ri-arrow-down-s-fill"></i>
              personal-info
            </a>
          </div>
          {/* Aqui vai sair, presente somente para estilizar */}
          <div className="personal-content">
            <div className="Bio">
              <div className="folder-bio">
                <a href="#">
                  <i className="ri-arrow-right-s-line"></i>
                  <i className="ri-folder-3-fill"></i>
                  bio
                </a>
              </div>
              <div className="bio-content">
                <a href="#">
                  <i className="ri-file-text-line"></i>
                  AboutMe.txt
                </a>
              </div>
            </div>
            <div className="Interests">
              <div className="folder-interests">
                <a href="#">
                  <i className="ri-arrow-right-s-line"></i>
                  <i className="ri-folder-3-fill"></i>
                  interests
                </a>
              </div>
              <div className="interests-content">
                <a href="#">
                  <i className="ri-file-text-line"></i>
                  Interests.txt
                </a>
              </div>
            </div>
            <div className="Education">
              <div className="folder-education">
                <a href="#">
                  <i className="ri-arrow-right-s-line"></i>
                  <i className="ri-folder-3-fill"></i>
                  education
                </a>
              </div>
              <div className="education-content">
                <div className="devquest">
                  <a href="#">
                    <i className="ri-school-fill"></i>
                    DevQuest.exe
                  </a>
                </div>
                <div className="udemy">
                  <a href="#">
                    <i className="ri-school-fill"></i>
                    Udemy.exe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contacts-container-about">
          <div className="box-contacts">
            <a href="#">
              <i className="ri-arrow-down-s-fill"></i>
              contacts
            </a>
          </div>
          <div className="contacts-content">
            <span>
              <i className="ri-mail-fill"></i>
              a.luanjc@gmail.com
            </span>
            <span>
              <i className="ri-phone-fill"></i>
              {"(47)"}99165-3010
            </span>
          </div>
        </div>
      </div>
      <div className="window-content">
        <div className="open-window-container">
          <div className="open-window">
            <p>personal-info</p>
            <a href="#">
              <i className="ri-close-fill"></i>
            </a>
          </div>
          <div className="space-window"></div>
        </div>
        <div className="info">
          <div className="list-numbers">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
          </div>
          <div className="info-content">
            <p>{"/**"}</p>
            <p>{"* About me"}</p>
            <p>{"* Meu nome é Luan tenho 20 anos,"}</p>
            <p>{"* nasci e moro em Blumenau-SC."}</p>
            <p>{"* Trabalho na empresa Karsten, como expedidor,"}</p>
            <p>{"* mas estou buscando ingressar no mercado"}</p>
            <p>{"* de trabalho na área de programação,"}</p>
            <p>{"* como desenvolvedor web."}</p>
            <p>{"*"}</p>
            <p>{"* Estou cursando o curso com mentoria DevQuest."}</p>
            <p>{"* Sou apaixonado por tecnologias e estudo a área"}</p>
            <p>{"* a mais de 1 ano, fazendo vários cursos online."}</p>
            <p>{"*/"}</p>
          </div>
        </div>
      </div>
      <div className="code-snippet-container">
        <div className="empty-space"></div>
        <div className="box-content-snippet-container">
          <div className="box-control-snippet">
            <p id="sub-title-showCase">{"// Code snippet showcase:"}</p>
            <div className="user-data">
              <div className="user">
                <img src="../src/assets/images/perfil.jpg" alt="Logo" />
                <div className="user-txt">
                  <p>@Lujochi</p>
                  <p>Created 5 months ago</p>
                </div>
              </div>
              <div className="details-and-stars">
                <a href="#">
                  <i className="ri-chat-smile-3-line"></i>
                  details
                </a>
                <a href="#">
                  <i className="ri-star-s-fill"></i>
                  10 stars
                </a>
              </div>
            </div>
            <div className="snippet-box">
              <div className="box-code">
                <img src="/src/assets/images/snippet01.png" alt="snippet" />
              </div>
            </div>
            <div className="details-box">
              <div className="msg-details">
                <p>
                  {"->"} Uma função que cria um efeito que simula a digitação de
                  um texto desejado, onde a função vai pegar o texto quebra-lo
                  em caracteres e colocar na tela do usuário caractere por
                  caractere com intervalos de 150ms.
                </p>
              </div>
              <a href="#">
                <i className="ri-close-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
