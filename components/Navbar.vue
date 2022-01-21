<template>
  <header class="wrapper">
    <nav class="navBar">
      <div class="hamburger" @click="toggleClicked(isClicked)">
        <img src="~assets/menu.png" />
      </div>
      <div class="navBarLogin">
        <a
          class="btnLogin"
          href="https://github.com/login/oauth/authorize?client_id=23c78f66ab7964e5ef97"
        >
          <button type="button" class="btnLoginText">
            Sign In With GitHub
            <img
              className="githubLogo"
              src="~/assets/github.png"
              alt="GitHub Icon"
              height="15px"
              width="15px"
            /></button
        ></a>
      </div>

      <div class="navbarMenuItem">
        <ul :class="[isClicked ? 'hide-menu' : 'navBarMenu']">
          <li class="navBarLogoLi">
            <a href="https://realdevsquad.com/">
              <img
                src="~/assets/Real-Dev-Squad@1x.png"
                alt="Real Dev Squad logo"
                width="50px"
                height="50px"
              />
            </a>
          </li>
          <li>
            <a href="https://welcome.realdevsquad.com/">Welcome</a>
          </li>
          <li>
            <a href="https://www.realdevsquad.com/events.html">Events</a>
          </li>
          <li>
            <a href="https://members.realdevsquad.com/">Members</a>
          </li>
          <li>
            <a href="https://crypto.realdevsquad.com/">Crypto</a>
          </li>
          <li>
            <a href="https://status.realdevsquad.com/">Status</a>
          </li>
          <li>
            <a class="activeTab" href="https://goals.realdevsquad.com/"
              >Goals</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isClicked: false,
    }
  },
  methods: {
    toggleClicked(value) {
      this.isClicked = !value
    },
  },
}
</script>

<style scoped>
.wrapper {
  font: 700 16px 'Roboto', sans-serif;
  margin-bottom: 25px;
}
/* .navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: blue;
} */

.navBar li a {
  margin: 10px;
  display: block;
  border-radius: 0.5rem;
  color: #ffffff;
  text-align: center;
  padding: 19px 16px;
  text-decoration: none;
  list-style: none;
}

.navBar li {
  float: left;
}

.navBar li a:hover {
  color: #49a82e;
}

.navBarMenu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #1d1283;
}

.navBarLogoLi {
  list-style: none;
  padding: 12px 20px;
}

.navBar li.navBarLogoLi a {
  margin: 0px;
  padding: 0px;
}

.navBar li.navBarLoginLi {
  float: right;
}

.navBar li.navBarLoginLi .btnLogin {
  padding: 0px;
  margin: 22px;
}

.navBarLogin,
.homeTab {
  display: none;
}
.hide-menu {
  background: #fff;
}
ul > .btnLogin {
  margin-right: auto;
}
.btnLoginText {
  border-radius: 6px;
  padding: 5px;
  background-color: #1d1283;
  color: white;
  cursor: pointer;
  border: 2px solid white;
  display: flex;
}

.userGreet {
  color: #ffffff;
  margin: 23px;
  display: none;
}

.navBarLoginLi .userGreet a {
  padding: 0px;
}

.userProfilePic {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline;
  vertical-align: middle;
}

.userGreetMsg {
  display: inline;
  vertical-align: middle;
  margin-right: 10px;
}

.navBar li a.activeTab {
  color: #49a82e;
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 10px;
}

.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: #fff;
}

.githubLogo {
  margin-left: 4px;
  background-color: white;
  border-radius: 50%;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 5px;
}

.link {
  padding: 10px;
  margin-top: 2px;
  text-decoration: none;
  font-weight: bold;
  color: #041484;
  cursor: pointer;
  background: none;
  border: none;
}

.active {
  color: #e30464;
}
.Homes {
  display: none;
}
.navBarLogin {
  display: block;
  margin: 20px;
  position: absolute;
  top: 0;
  right: 0px;
}

@media screen and (max-width: 970px) {
  .navBar {
    background: #1d1283;
  }
  .Homes {
    display: block;
  }
  .hamburger {
    height: 73px;
    width: 73px;
    padding: 20px;
    display: inline-block;
    cursor: pointer;
    font-size: 30px;
    color: white;
  }
  .hamburger .icon {
    margin-top: 4px;
    padding-left: 2px;
  }
  .navBarMenu {
    background: white;
    display: none;
    width: 100%;
    padding: 10px 0px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.5);
  }

  .navBarMenu.active,
  .homeTab {
    display: block;
  }

  .navBar li a {
    padding: 10px 40px;
    text-align: left;
    color: black;
  }

  .navBarLoginLi,
  .navBarLogoLi {
    display: none;
  }

  .navBar li a.activeTab {
    text-decoration: none;
  }

  .navBar li {
    float: none;
  }

  .mainBanner,
  .logoImg {
    margin-top: 40px;
  }

  .userGreet {
    margin: 0px;
  }
}
</style>
