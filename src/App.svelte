<script lang="ts">
  import {
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow,
  } from "@floating-ui/dom";

  // Your selected Skeleton theme:
  import "@skeletonlabs/skeleton/themes/theme-skeleton.css";

  // This contains the bulk of Skeletons required styles:
  import "@skeletonlabs/skeleton/styles/skeleton.css";

  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import "./app.postcss";
  import { onMount } from "svelte";
  import LightSwitch from "./components/LightSwitch.svelte";
  import ChangeThemeButton from "./components/ChangeThemeButton.svelte";
  import getStoredTheme from "./utils/getStoredTheme";
  import theme from "./store/store";

  //get stored theme from local storage
  onMount(() => {
    getStoredTheme();
  });
  //onDOMLoaded

  async function storeTheme() {
    //get stored theme from local storage wait for promise
    await getStoredTheme().then((storedTheme) => {
      //set theme to stored theme
      theme.set(storedTheme);
    });
  }
  storeTheme();
</script>

<main>
  <div class="card">
    <LightSwitch />
    <ChangeThemeButton />
  </div>


</main>

<style>
 .card {
  position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

 }
</style>
