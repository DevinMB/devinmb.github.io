<template>
  <div>
    <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/career">Career</router-link> 
    <router-link to="/about">About</router-link> 
    </nav>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" >
        <component :is="Component" />
      </transition>
    </router-view>
    
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,500;1,400&display=swap');
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 15pt;
	font-weight: 100;
	/* line-height: 1.75em; */
  text-align: center;
  color: rgba(255, 255, 255, 0.75);

  
  
  }

body{
  background-color: #1c1d26;
}

nav {
  display: flex;
  justify-content: right;
  padding: 30px;
}

/* router-link defaults to "a" tag  */
nav a {
  
  color: rgba(255, 255, 255, 0.75);
  padding-right: 1em;
  padding-left: 1em;
  padding-bottom: .25em;
  padding-top: .25em;
  text-decoration: none;
}

nav a.router-link-exact-active {
 
  background-color: #e44c65;
  border: 0;
  border-radius: .25em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .7s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}



</style>
