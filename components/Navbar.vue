<template>
  <div className="navbar">
    <nav>
      <ul>
        <li class="logo">
          <a href="https://realdevsquad.com/">
            <img
              src="~/assets/Real-Dev-Squad@1x.png"
              alt="Real Dev Squad logo"
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
          <a class="active" href="https://goals.realdevsquad.com/">Goals</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
nav {
  background: #1d1283;
}
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
nav li {
  float: left;
}
nav li a {
  display: block;
  color: #ffffff;
  text-align: center;
  font-weight: bolder;
  padding: 0 12px;
  text-decoration: none;
}
nav li a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: #87d870;
}
img {
  width: 56px;
  height: 56px;
}
.active {
  color: #87d870;
}
</style>
