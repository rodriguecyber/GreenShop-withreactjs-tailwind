import React from "react"
import {Hero,PopularProduct,SuperQuality,Services,CustomerReviews,Specialoffer,Subscribe,Footer
} from '../sections/index'
const HomePage=()=>{
return(
    <main className="relative">
   <section className="xl:padding-1 wide wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
       <PopularProduct />
    </section>
    <section className="padding">
       <SuperQuality />
    </section>
    <section className="padding">
       <Services />
    </section>
      <section className="padding">
       < Specialoffer />
      </section>
      <section className="pg-pale-blue padding">
       < CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16t w-full">
        <Subscribe />
      </section>
      
  </main>
  )
}
  export default HomePage
