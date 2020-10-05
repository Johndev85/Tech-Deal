import HeaderNotRegister from '../components/HeaderNotRegister'
import Footer from '../components/Footer'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import styles from '../styles/termsofuse.module.scss'

export default function TermsofUse () {

    return (
            <>
        <HeaderNotRegister />
        <section className={styles.container}>

            <div className={styles.container__left}>
              <FontAwesomeIcon
                            icon={faArrowLeft}
                            className={styles.container__left__icon}
                        />
          
              <Link href='/'>
              <a >Back to Home</a>
              </Link>
        </div>

            <h1> Terms of Use</h1>
            
                <ol>
                    <li>
                        <p>
                            <h2> General conditions of use for the service of these web pages
                                Identifying data of the owner of the website</h2>

                                These General Conditions of Use regulate the use of the Tech Deal website (hereinafter also referred to as <span> the website</span> ) and the use of the services offered therein. The conditions of use that can be consulted online on the website at the time of the specific visit of an Internet user or the specific use of a service will apply in each case. The use of the website and / or the use of its services implies the users agreement with these General Conditions of Use. Otherwise, the use of the website and the services offered will not be allowed. For certain services on the website, such as the price advisor, special conditions will apply, which will be expressly warned in the corresponding place. The special conditions will be applicable together with these General Conditions of Use and, in case of doubt, the former will take precedence.
                        </p>
                    </li>
                <li>
                    <p>
                    
                    The website is aimed at those end users (hereinafter also called <span>customers </span>) customers who purchase or request products and services through the Internet, or who wish to obtain information (also reciprocally) about them. The website provides customers, free of charge, price summaries as well as sources of supply of products and services offered on the Internet by sellers, suppliers and service providers as well as by other third parties - including affiliated white label companies - (hereinafter also called <span>online stores) </span> ).                    </p>

                </li>
                <li>
                    <p>
                    <h3> User account</h3>
                    Tech Deal offers legal age users the possibility to register for free with idealo to create their own user account and thus be able to use all the functions of the website and receive personalized information and offers.
                </p>
            </li>
                </ol>
        </section>
        <Footer />
        </>
    )
}