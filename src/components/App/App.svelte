<script>
  import { Link } from 'svelte-navigator';
</script>

<main>
  <h1>Hello World!</h1>
  <p class="p">Visit the <Link to="/about">Svelte tutorial</Link> to learn how to build Svelte apps.</p>
</main>

<style lang='scss'>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;

    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 4em;
      font-weight: 100;

    }
    .p {
      color: green;
    }
  }
</style>