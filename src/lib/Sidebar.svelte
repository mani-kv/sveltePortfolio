<script>

    import {afterUpdate} from 'svelte'
    import * as animateScroll from "svelte-scrollto"
    export let Toc = []

    afterUpdate(()=> {

        
        function changeLinkState() {
            let links = document.querySelectorAll('.links');
            let arrayNode = Array.from(Toc)
            let linkNode = Array.from(links)
            // linkNode.reverse()
            let index = arrayNode.length;
            
            // console.log("idx" + index)
            
            if(index) {
                
                let i
                for( i = 0; i < index; i++) {
                    if(window.scrollY + 180 > arrayNode[i].offsetTop){
                        // console.log(window.scrollY - 80, arrayNode[i].offsetTop, i)
                    linkNode.forEach((link) => link.classList.remove('text-gray-800'))
                    
                    // console.log('trigger')
                    linkNode.forEach((link) => 
                    {if(link.classList.contains('text-blue-600')) {
                        // console.log(link)
                        link.classList.remove('text-blue-600')
                    }})
                    linkNode[i].classList.add('text-blue-600') 
                    linkNode[i].classList.add('font-semibold') 
                    }

                }
                    
                }
        }

        changeLinkState();
        window.addEventListener('scroll', changeLinkState);
    })

   
</script>
<div class="">


    <div id='sidebar' class="mr-20 w-32 mt-20 flex flex-col sticky top-60" >
       
        {#each Toc as node}
        <a href='#{node.id}' on:click={() => animateScroll.scrollTo({element: `#${node.id}`, duration: 300, offset: -160})} class="links mb-4 text-gray-800 font-semibold text-base cursor-pointer" >{node.id}</a>
        {/each}

        
        
    
    </div>

</div>
