<script>
import SvelteSeo from "svelte-seo";
import Sidebar from '$lib/Sidebar.svelte'
import {afterUpdate} from 'svelte'
import Breadcrumb from '$lib/Breadcrumb.svelte'

// let toc = runToc()
let Toc

afterUpdate(() => {


        Toc = document.querySelectorAll("h1");

        
    

})


</script>

<SvelteSeo
  title="Project 1"
  description="A short description goes here."
  keywords="key1, key2, key3"
/>

<!-- <svelte:window {toc}/> -->
<Sidebar Toc={Toc}/>
<div class="flex flex-col">

    <Breadcrumb Page="Project 1"/>

    <h1 id="Topic1" class=" text-4xl mb-12">H1: The top level header </h1>
    <p>The H1 font specification is less relevant because in postings and pages the headers will start with H2. Interestingly, the title of the page (i.e. &#8220;Example header text&#8221; in the case of this page) is not styled with an H1.</p>
    <h2>H2: The second level header</h2>
    <p>It turns out that we have some second level headers (for example, on the academic, research, careers, or community profile pages) that are fairly long. While uppercase looks OK for single word titles, it looks less good when the header consists of 7-10 words and spans multiple lines.  To me, the latter case looks like we are SCREAMING AT THE READER TO PAY ATTENTION TO OUR SECTION TITLE.</p>
    <h3>H3: The third level header</h3>
    <p>Because H2 looked like screaming to me, I shifted to H3 as the initial header for some pages. This header is not uppercase, which is an improvement, and is a slightly larger font than the paragraph text, which is OK.  This doesn&#8217;t solve the problem, however, because look what happens when you mix H3 with H4.</p>
    <h4>H4: The fourth level header</h4>
    <p>When we get to H4, bold suddenly enters the picture, and results in a font that is much more prominent than that chosen for H3, which is the reverse of what we want people to perceive.  It looks strange to have a page that consists of H3 and H4, which led me in some pages to only use H4.  That&#8217;s just crazy!  </p>
    <h1 id="Topic2">H2: The fifth level header</h1>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <h1 id="Topic3">H3: The fifth level header</h1>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <h1 id="Topic4">H4: The fifth level header</h1>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <p>H5 looks fine relative to H4, but is still almost as prominent as H3.  </p>
    <hr />
</div>