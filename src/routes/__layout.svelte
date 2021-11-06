<script>
    import "../styles/global.css";
    import {onMount, afterUpdate} from 'svelte'

    let Nav

    onMount(async () => {
        const module = await import('../lib/Nav.svelte');
        Nav = module.default;

       
    });

    afterUpdate(() => {
		// ...the DOM is now painted, add the active class to nav elements

      if(document.querySelector("a#work")) {
        if(window.location.pathname === '/') {
          document.querySelector("a#about").classList.remove('text-blue-600')
          document.querySelector("a#work").classList.add('text-blue-600')
        }
        if(window.location.pathname === '/about') {
          document.querySelector("a#about").classList.add('text-blue-600')
          document.querySelector("a#work").classList.remove('text-blue-600')

        }
       
      } 


    });

</script>


<div class=" ">
  <svelte:component this={Nav} class=""/>
  <div class="flex text-gray-800 p-20 ">

    <slot />
  </div>
</div>
