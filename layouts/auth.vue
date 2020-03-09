<template>
    <div>
        <Header/>
        <ContentWrapper>
            <nuxt />
        </ContentWrapper>
    </div>
</template>

<script>

    import Header from '@/components/Header';
    import ContentWrapper from '@/components/ContentWrapper';

    export default {
        components: {
            Header,
            ContentWrapper,
        }
    }
</script>

