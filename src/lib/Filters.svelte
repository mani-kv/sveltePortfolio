<script>
    import { createEventDispatcher } from 'svelte';
    export let Keys

    let toggleSelected = 'All'

    const dispatch = createEventDispatcher();

    function sendFilter(filter) {
		dispatch('selectedFilter', {
			filter 
		});
        toggleSelected = filter
	}
</script>



<div class="flex flex-row mb-8">

    <span class="mr-4 text-sm uppercase font-semibold tracking-wider  cursor-pointer {toggleSelected === 'All' ?"text-blue-600  border-b-2 border-blue-600":"text-gray-600 "}" on:click = {() => sendFilter('All')}>All</span>
    {#each Keys as Key}
    <span class="mr-4 text-sm uppercase font-semibold tracking-wider cursor-pointer  hover:text-blue-600 {toggleSelected === Key ?"text-blue-600  border-b-2 border-blue-600":"text-gray-600 "}" on:click = {() => sendFilter(Key)}>

        {Key}
    </span>
    {/each}
</div>