<script>
  import Router from 'svelte-navigator/src/Router'
  import Route from 'svelte-navigator/src/Route'
  import routes from 'routes'
</script>

<Router>
  {#each routes as route}
    <Route {...route} />
  {/each}
</Router>