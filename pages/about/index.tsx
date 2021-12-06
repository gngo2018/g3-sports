import Image from 'next/image'
import aboutStyles from './about.module.css'

export default function About() {
    return (
        <div className={aboutStyles.about_container}>
            <h2>About Page!</h2>
            <div className={aboutStyles.about_content_flex_container}>
                <div className={aboutStyles.about_content_flex_item}>
                    About Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea maxime autem rerum ipsum natus repudiandae sed blanditiis omnis quidem, asperiores dolorem mollitia! Vel molestias consectetur ad! Suscipit laudantium quod sunt est, nesciunt sequi ea soluta ipsam eligendi illum aliquam molestiae eum eos consectetur nostrum at et nam? Beatae, itaque.
                </div>
                <div className={aboutStyles.image_flex_item}>
                    <Image
                        src='/assets/tennis/tennis1.jpg'
                        alt='tennis'
                        layout="fill"
                    />
                </div>
            </div>
        </div>
    );
}