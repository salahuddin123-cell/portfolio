import React from "react";

const Header = () => {
  return (
    <>
      <section class="secone">
        <nav>
          <input type="checkbox" name="" id="bars" />
          <label for="bars" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
          <label class="logo" for="">
            <img src="img/sssk.png" alt="MY LOGO" />
          </label>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li class="m">
              <a href="#skilll">Skills</a>
            </li>
            <li class="m">
              {" "}
              <a href="#projects">Projects</a>
            </li>
            <li class="m">
              <a href="#socials">Socials</a>
            </li>
          </ul>
        </nav>
        <div class="wrap">
          <div class="bio">
            <h2 id="aboutme">About me</h2>

            <p id="q">
              Hi, My name is Salahuddin Sk.I am a junior web developer. I have
              done my B.Tech in Mechanical Engineering in 2020 .I have hands on
              skills of front-end web technologies like
              Html,CSS,JavaScript,Bootstrap , Jquery and RecatJs.I I have
              created many dynamic projects using Html,Css and RecatJs.I also
              have knoledge in django and python. And I have made so many dummy
              projects using html,Css ,JavaScript and django. You can view my
              projects on 
              <span>
                <a
                  style={{ textDecoration: "none", color: "blueviolet" }}
                  href="https://gist.github.com/salahuddin123-cell"
                >
                  github.
                </a>
              </span>
            </p>
          </div>
          <div class="img">
            <img src="img/saladinphoto.jpg" alt="sskphoto" />
          </div>
          <div class="cv">
            <a
              id="down"
              href="https://drive.google.com/file/d/14MowD_qoBf3VKlIU5_t39NhcG3maU8ps/view?usp=sharing"
              download=""
              target="_blank"
            >
              Download Cv
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
