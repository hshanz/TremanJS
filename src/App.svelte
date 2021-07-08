<script>
	import { onMount } from 'svelte';
	import { createScene } from './scene.js'

	let ref; 

	onMount(() =>{
		createScene(ref)
	})
	

</script>
<div  id="parent">
	<canvas id="three" bind:this={ref} > </canvas>
	<div id ="text-holder">
		<h1  id="text">dasdasdas</h1>
	</div>

</div>






<style>
	#parent{
		position: relative;
		z-index: 0;
		min-width:100vw;
		min-height: 100vh;
		max-width: 100vh;
		max-height: 100vh;
	}

	#three{
		position: absolute;
		z-index: 1;
	}

	#text-holder{
 		width: 100%;
		position: absolute;
		z-index: 2;		
		text-align: center;
	}
	
</style>