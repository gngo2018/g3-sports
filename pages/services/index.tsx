import Image from 'next/image'
import servicesStyles from './services.module.css'

const description ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim harum quae ducimus fugit."

export default function Services() {
    return (
        <>
            <div className={servicesStyles.services_container}>
                <h2>Tennis Services</h2>
                <div className={servicesStyles.disclaimer_text}>
                    <span>*</span><i>All equipment will be inspected before servicing. Equipment deemed unrepairable will be consulted with the customer</i>
                </div>
                <div className={servicesStyles.service_flex_row}>
                    <div className={servicesStyles.service_flex_item}>
                        <div className={servicesStyles.image}>
                            <Image
                                src='/assets/tennis/stringing1.jpg'
                                alt='stringing'
                                layout="fill"
                                priority
                            />
                        </div>
                    </div>
                    <div className={servicesStyles.service_flex_item}>
                        <h3>Stringing</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <div className={servicesStyles.service_flex_row}>
                    <div className={servicesStyles.service_flex_item}>
                        <h3>Regrip</h3>
                        <p>{description}</p>
                    </div>
                    <div className={servicesStyles.service_flex_item}>
                        <div className={servicesStyles.image}>
                            <Image
                                src='/assets/tennis/regrip.jpeg'
                                alt='regrip'
                                layout="fill"
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className={servicesStyles.service_flex_row}>
                    <div className={servicesStyles.service_flex_item}>
                        <div className={servicesStyles.image}>
                            <Image
                                src='/assets/tennis/leadtape1.jpg'
                                alt='lead tape'
                                layout="fill"
                                priority
                            />
                        </div>
                    </div>
                    <div className={servicesStyles.service_flex_item}>
                        <h3>Lead Tape</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <div className={servicesStyles.service_flex_row}>
                    <div className={servicesStyles.service_flex_item}>
                        <h3>Grip Building</h3>
                        <p>{description}</p>
                    </div>
                    <div className={servicesStyles.service_flex_item}>
                        <div className={servicesStyles.image}>
                            <Image
                                src='/assets/tennis/gripbuild.jpg'
                                alt='grip build'
                                layout="fill"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}