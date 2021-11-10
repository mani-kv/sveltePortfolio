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
            Title: 'Project 2',
            Keywords : ['UI Design', 'UX Research'],
            Img : {
              source: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/05/featured_ux-1.jpg',
              alt: 'Project 1 Featured Img'
            }

        }]
      
      // let FilterKeys =['UX Design', 'UX Research'] // script to find unique filterkeys
      // let FilteredProjects =[] // Script to selct projects based on Filter keys
      
      let FilterKeys = () => {
        let keys = []
        Projects.forEach((key,i) => {
          key.Keywords.forEach((k,i)=> {
            keys.push(k)
          })
        })

        // console.log(keys)
        return [...new Set(keys)]
       

      }
      // FilterKeys()

      function FilteredProjects(filter){
        let F_proj = []
        Projects.forEach((key,i) => {
          if(key.Keywords.includes(filter)) {
            F_proj.push(key)
          }
        })
        
        return F_proj
      }

      let finalProjectList = Projects

      function applyFilter (event) {
        console.log(event.detail.filter)
        let selected = event.detail.filter

        if (selected === 'All') {
          finalProjectList = Projects
        } 
        else {
          finalProjectList = FilteredProjects(selected)
        }
        
        console.log(finalProjectList)
        return finalProjectList
        
      } 
</script>

<SvelteSeo
  title="Svelte Template"
  description="A short description goes here."
  keywords="key1, key2, key3"
/>


<div class="flex flex-col justify-between w-full gap-5">

  <div class="flex flex-row items-baseline">
    <Filters Keys = {FilterKeys()} on:selectedFilter = {applyFilter}/>
  </div>
  
  {#each finalProjectList as project}
  
   
     <Card {...project} />
     
  {/each}
</div>

