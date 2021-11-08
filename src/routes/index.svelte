<script>
      import SvelteSeo from "svelte-seo";
      import Card from '$lib/card.svelte'
// import About from "./about.svelte";

      let Projects = [{
          
            Path:'/projects/project1',
            Description: 'This is a description of Project 1',
            Title: 'Project 1'
          },
          {
            Path:'/projects/project2',
            Description: 'This is a description of Project 2',
            Title: 'Project 2'

        }]
      
</script>

<SvelteSeo
  title="Svelte Template"
  description="A short description goes here."
  keywords="key1, key2, key3"
/>


<div class="">
  
  {#each Projects as project}
  
   
     <Card {...project} />
     
  {/each}
</div>

