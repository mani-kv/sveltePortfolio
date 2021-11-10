<script>
    import Chip from '$lib/Chip.svelte'
    import {fly, fade} from 'svelte/transition'
    export let Path
    export let Description
    export let Title
    export let Keywords = []
    export let Img = {
        source:'',
        alt:''
    }

    function navigate() {
        window.location = Path
    }
</script>


<div class="flex flex-row mb-12" in:fly="{{ y: 20, duration: 150 }}" out:fade="{{duration: 150}}">
    <div id='img' class="p-1 shadow border rounded cursor-pointer mr-6" on:click={() => navigate()}>
        <img src={Img.source} alt={Img.alt} width="600px" height="100%">
    </div>
    <div id='details' class="flex flex-col p-6 w-auto justify-between">
        <div id="overview" class="flex flex-col ">
            <span class="text-3xl font-bold mb-4 text-gray-800">{Title}</span>
            <div id="chips" class="mb-4 flex flex-row">


                {#each Keywords as Keys}
                     <Chip ChipName = {Keys} />
                {/each}
               
            </div>
            <span class="text-md font-normal text-gray-700">{Description}</span>
           
            
            
        </div>
        <button class="px-3 py-2 border inline-flex w-max bg-white text-gray-800 shadow-sm hover:shadow-md  hover:text-blue-600 transform transition-all font-semibold text-sm rounded" on:click={() => navigate()}>Read More</button>

    </div>
</div>