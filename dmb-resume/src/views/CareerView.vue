<template>
    <div class="career">
        <job-3-questx/>
        <job-2-collins/>
        <job-1-robroy/>
    </div>
</template>

<script>
import Job1Robroy from '../components/Job1-Robroy.vue'
import Job2Collins from '../components/Job2-Collins.vue'
import Job3Questx from '../components/Job3-Questx.vue'
export default {
  components: { Job1Robroy, Job2Collins, Job3Questx },

}
</script>

<style>
.job-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-image: linear-gradient(to bottom right, rgb(248, 188, 188,.5), rgb(147, 216, 235,.5));
    transition: color 0.5s ease-in-out;
   
}
.job-image{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1em;
    /* padding-right: 1em; */
    padding-bottom: 1em;
    /* background-image: url("../assets/images/pic04x.jpg"); */


}
.job-image img {
    display: flex;
    width: 15em;
    height: auto;
    justify-content: center;
    
}
.job-quote{
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    font-weight: 300;
    color:rgb(236, 236, 239)
    
}
.job-info {
    display: flex;
    flex-direction: column;
    
  
    align-items: left;
    flex-grow: 1;
    padding: 1em;
    background-color: rgb(28, 29, 38,100);
    /* border-top-left-radius: 1em; 
    border-top-right-radius: 1em;  */

    
}
.job-detail {
    display: flex;
    flex-direction: column;
    align-items: left;
    
    
}
.job-detail li {
    list-style-type: '- ';
    text-align: left;
    justify-content: left;
    padding-bottom: 1em;   
}
.job-company-name a {
    font-size: 1.25em;
    color: #e44c65;
	text-decoration: none;
    transition: background-color 0.2s ease-in-out;
}
.job-date-range {
    font-size: .8em;
    
}
.job-title {
    
    font-size: 1.5em;
   
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
}
.job-company-name a:hover{
    background-color: rgb(248, 188, 188,.2);
    transition: background-color 0.2s ease-in-out;
}
</style>