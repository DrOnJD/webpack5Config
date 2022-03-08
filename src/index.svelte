<script>
  import { Router, Route } from 'svelte-routing'
  import routes from 'routes'
</script>

<Router>
  {#each routes as route}
    <Route {...route} />
  {/each}
</Router>