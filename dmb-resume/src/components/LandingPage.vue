<template>
  <div class="welcome-container">
      <div class="name">
          Devin Butts
      </div>
      <div class="title"> 
          Senior Financial Analyst
      </div>
      <div class="quote"> 
          Develope a passion for learning. If you do, you will never cease to grow.
      </div>
      <div class="profile-picture"> 
          <img src="../assets/images/Profile.jpg" alt="Devin Butts">
      </div>
      <div class="projects"> 
          This is where my projects will go....
      </div>
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
    padding-top: 10em;
    padding-bottom: 1em;
}

</style>