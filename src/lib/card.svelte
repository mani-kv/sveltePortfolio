<script>
    export let Path
    export let Description
    export let Title

    function navigate() {
        window.location = Path
    }
</script>
<div class="flex flex-col bg-blue-800 p-20 w-auto rounded-md hover:bg-blue-600 hover:shadow-md text-white my-5 cursor-pointer" on:click={() => navigate()}>
    <div id="header" class="text-4xl font-bold mb-12 text-white">
        <h1 class="">{Title}</h1>
    </div>
    <div id="body" class="">
    <p class="">{Description}</p>
    </div>
</div>