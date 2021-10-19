<script context="module">

	export async function load({ fetch }) {
 const url = '/query/settings.json';

   const res = await fetch(url, {
	   method: 'POST',
	   credentials: 'same-origin',
	   headers: {
		   'Content-Type': 'application/json'
	   },

   });

   const data = await res.json();

  
   if (res.ok) {
	   return {
		   props: { data }
	   };
   }
   
   return {
	   status: res.status,
	   error: new Error(`Couldn't load ${url}`)
   };
}

</script> 


	
<script>
	import "../app.postcss";

     import Header from '$lib/header/Header.svelte';

  
export let data;

</script>


<!-- <Header items={data.header.items} answer={42}/> -->

<nav class="bg-blue-900 shadow-lg">
	<div class="container mx-auto">
	  <div class="sm:flex"> 
		<a href="/" class="text-white text-3xl font-bold p-3">APP LOGO</a>
		<div class="ml-55 mt-4">
		  <ul class="text-white sm:self-center text-xl">
			<!-- <li class="sm:inline-block">
			  <a href="#" class="p-3 hover:text-red-900">About</a>
			</li>
			<li class="sm:inline-block">
			  <a href="#" class="p-3 hover:text-red-900">Services</a>
			</li>
			<li class="sm:inline-block">
			  <a href="#" class="p-3 hover:text-red-900">Blog</a>
			</li>
			<li class="sm:inline-block">
			  <a href="#" class="p-3 hover:text-red-900">Contact</a>
			</li> -->
			{#each data.header.items as item}
			<li class="sm:inline-block">
			  <a href={`/pages/${item.url}`} class="p-3 hover:text-red-900">{item.name_en}</a>
			</li>
			{/each}
		  </ul>
		</div>
	  </div>
	</div>
	<!-- <div class="flex flex-wrap">
	  <div class="w-full sm:w-6/12 md:w-4/12 px-4">
		<div class="relative inline-flex align-middle w-full">
		  <button on:click={()=>alert('Yellow')}>click me</button>
		  <button class="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 ease-linear transition-all duration-150" type="button" >
			White Dropdown
		  </button>
		  <div class="hidden bg-white  text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1" style="min-width:12rem" id="dropdown-id">
			<a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
			  Action
			</a>
			<a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
			  Another action
			</a>
			<a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
			  Something else here
			</a>
			<div class="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25"></div>
			<a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
			  Seprated link
			</a>
		  </div>
		</div>
	  </div>
	</div> -->
	</nav>
	

<main>
	<slot>
</slot>
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>


<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
