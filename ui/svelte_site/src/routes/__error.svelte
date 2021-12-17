<script context="module">
    export const load = ({error,status}) =>{
        return{
            props:{
                error,
                status
            }
        }
    }
</script>

<script>
export let error;
export let status;
</script>

<h1>{status}</h1>
<h2>{error}</h2>
