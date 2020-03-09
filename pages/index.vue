<template>
    <div>
        <Search/>
        <LastProjects/>
        <LastNews/>
        <LegalDocuments/>
    </div>
</template>

<script>
    import Search from '@/components/Search';
    import LastProjects from '@/components/LastProjects';
    import LastNews from '@/components/LastNews';
    import LegalDocuments from '@/components/LegalDocuments';
    export default {
        components: {
            Search,
            LastProjects,
            LastNews,
            LegalDocuments
        }
    }
</script>


