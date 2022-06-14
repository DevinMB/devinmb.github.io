<template>
  <div class="welcome-container">
      <div class="name">
          Devin Butts
      </div>
      <div class="title"> 
          Financial & Data Consultant
      </div>
      <div class="quote"> 
          Develope a passion for learning. If you do, you will never cease to grow.
      </div>
      <div class="profile-picture"> 
          <img src="../assets/images/Profile.jpg" alt="Devin Butts">
      </div>
      <div class="socials">
            <a href="https://github.com/DevinMB">
                <img src="../assets/images/GitHub-Mark-Light-120px-plus.png" alt="Github">
            </a>
            <a href="https://www.linkedin.com/in/devinmb/">
                <img src="../assets/images/linkedin-logo.png"/>
            </a>

      </div>
      <!-- <div class="projects"> 
          This is where my projects will go....
      </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.welcome-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: color 0.5s ease-in-out;
    padding-top: 1em;
    padding-bottom: 1em;
}

.profile-picture {
    display: flex;
    justify-content: right;
    align-items: center;
    padding-top: 1em;
    padding-bottom: 1em;
    border: 0;
    
}

.profile-picture img {
    display: flex;
    width: 15em;
    height: auto;
    justify-content: center;
    border-radius: 50%;
    padding-top: 1em;
}

.name {
    display: flex;
    
    align-items: center;
    font-weight: 300;
    font-size: 2.5em;
    
}

.title {
    display: flex;
    align-items: center;
    padding-bottom: 1em;
   
    
}

.quote {
    display: flex;
    align-items: center;

    
}
.projects {
    display: flex;
    align-items: center;
    padding-top: 7em;
    padding-bottom: 1em;
}
.socials img {
    height: 4em;
    width: auto;
    padding: 1em;

}

</style>