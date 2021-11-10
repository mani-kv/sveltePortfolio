<script>
      import SvelteSeo from "svelte-seo";
      import Card from '$lib/card.svelte';
      import Filters from '$lib/Filters.svelte'
// import About from "./about.svelte";

      let Projects = [{
          
            Path:'/projects/project1',
            Description: 'This is a description of Project 1',
            Title: 'Project 1',
            Keywords : ['UX Design', 'UX Research'],
            Img : {
              source: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/05/featured_ux-1.jpg',
              alt: 'Project 1 Featured Img'
            }
          },
          {
            Path:'/projects/project2',
            Description: 'This is a description of Project 2',
            Title: 'Project 2'

        }]
      
      let FilterKeys =['UX Design', 'UX Research'] // script to find unique filterkeys
      let FilteredProjects =[] // Script to selct projects based on Filter keys
      
      function applyFilter (event) {
        console.log(event.detail.filter)
      } 
</script>

<SvelteSeo
  title="Svelte Template"
  description="A short description goes here."
  keywords="key1, key2, key3"
/>


<div class="flex flex-col justify-between w-full gap-5">

  <div class="flex flex-row items-baseline">
    <Filters Keys = {FilterKeys} on:selectedFilter = {applyFilter}/>
  </div>
  
  {#each Projects as project}
  
   
     <Card {...project} />
     
  {/each}
</div>

