import HeaderNotRegister from '../components/HeaderNotRegister'
import Footer from '../components/Footer'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Head from 'next/head'

import styles from '../styles/termsofuse.module.scss'

export default function TermsofUse () {

    return (
            <>
        <Head>
            <title>Terms of use - Tech Deal</title>
        </Head>
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

            <h1>Terms and conditions</h1>
            
                <ol>
                    
                    <li>
                        <p>
                            These terms and conditions sets forth the general terms and conditions of your use of the <a href="https://techdeal.vercel.app">techdeal.vercel.app</a> website and any of its related products and services.  This Agreement is legally binding between you and this Website operator. By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. If you are entering into this Agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this Agreement, in which case the terms shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this Agreement, you must not accept this Agreement and may not access and use the Website and Services. You acknowledge that this Agreement is a contract between you and the Operator, even though it is electronic and is not physically signed by you, and it governs your use of the Website and Services.
                        </p>
                    </li>
                    <li>
                        <p>
                            <h2>Accounts and membership</h2>
                            If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may, but have no obligation to, monitor and review new accounts before you may sign in and start using the Services. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
                        </p>
                    </li>
                    <li>
                        <p>
                            <h2>Links to other resources</h2>
                            Although the Website and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. Some of the links on the Website be affiliate links. This means if you click on the link and purchase an item, the Operator will receive an affiliate commission. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other conditions of use of any resource which you access through a link on the Website and Services. Your linking to any other off-site resources is at your own risk.
                        </p>
                    </li>
                    <li>
                        <p>
                            <h2>Changes and amendments</h2>
                            We reserve the right to modify this Agreement or its terms relating to the Website and Services at any time, effective upon posting of an updated version of this Agreement on the Website. When we do, we will post a notification on the main page of the Website. Continued use of the Website and Services after any such changes shall constitute your consent to such changes. Policy was created with <a href="https://www.websitepolicies.com/blog/sample-terms-conditions-template">WebsitePolicies</a>.
                        </p>
                    </li>
                    <li>
                        <p>
                            <h2>Acceptance of these terms</h2>
                            You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Website and Services.
                        </p>
                    </li>
                    <li>
                        <p>
                            <h2>Contacting us</h2>
                            If you would like to contact us to understand more about this Agreement or wish to contact us concerning any matter relating to it, you may send an email to sm&#97;&#114;tcode&#109;ed&#101;r&#105;&#64;&#103;&#109;&#97;&#105;l.&#99;&#111;m
                        </p>
                        <p>
                        This document was last updated on October 5, 2020
                        </p>
                    </li>
                </ol>
        </section>
        <Footer />
        </>
    )
}