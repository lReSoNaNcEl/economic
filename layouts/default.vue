<template>
    <div>
        <Header/>
        <ContentWrapper>
            <nuxt />
            <Footer/>
        </ContentWrapper>
    </div>
</template>

<script>

    import Header from '@/components/Header';
    import Footer from '@/components/Footer';
    import ContentWrapper from '@/components/ContentWrapper';

    export default {
        components: {
            Header,
            ContentWrapper,
            Footer
        }
    }
</script>

