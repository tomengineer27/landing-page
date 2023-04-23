import Header from '../components/Header'
import MainSection from '../components/MainSection'
import ServiceSection from '../components/ServiceSection'
import AboutUsSection from '../components/AboutUsSection'
import ContactUsSection from '../components/ContactUsSection'
import Head from 'next/head'

function HomePage() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <Header></Header>
      <main>
        <MainSection></MainSection>
        <ServiceSection></ServiceSection>
        <AboutUsSection></AboutUsSection>
        <ContactUsSection></ContactUsSection>
      </main>
    </>
  )
}

export default HomePage