import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 md:pt-40">
          {/* Section header */}
          <div className="text-center">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl font-geologica"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Especialistas en desarrollo web y aplicaciones móviles para empresas
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-2xl text-gray-700 font-montserrat"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Transformamos tus ideas en tecnología que impulsa tu negocio al siguiente nivel.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn text-xl rounded-2xl group mb-4 w-full bg-gradient-to-t from-primary-600 to-primary-500 bg-[length:100%_100%] bg-[bottom] text-white shadow sm:mb-0 sm:w-auto font-bold font-montserrat hover:from-black hover:to-black"
                    href="https://calendar.app.google/8ys73PGCu3j3UBPeA"
                    target="_blank"
                  >
                    <span className="relative inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right-circle-fill mr-2" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                      </svg> Solicita tu cotización gratis
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
