<template>
    <div>
        <Search/>
        <AllProjects/>
    </div>
</template>
<script>

    import Search from '@/components/Search';
    import AllProjects from '@/components/AllProjects';
    export default {
        components: {
            Search,
            AllProjects
        }
    }
</script>
