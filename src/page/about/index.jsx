import React, { useEffect } from 'react';
import styles from './about.module.css';
import Footer from '../../component/footer';
import Tagbar from '../../component/tagbar';
import Header from '../../component/header';

const About = () => {
    useEffect(() => {

        // Thêm width: 1920px cho body
        document.body.style.width = "1920px";
        document.body.style.backgroundColor = "white"; // Màu nền cho trang blog

        return () => {
            // Khôi phục lại giá trị mặc định khi rời khỏi trang
            document.body.style.width = "";
            document.body.style.backgroundColor = "";
        };
    }, []);

    return (
        <>
            <Header />
            <Tagbar />
            <header className={`${styles.masthead}`} style={{ backgroundImage: "url('/imagines/background/KoiFish.jpg')" }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className={`${styles.siteHeading}`}>
                                <h1>Về chúng tôi</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <h2>Về KoiFarmShop</h2>
                            <p>
                                KoiFarmShop được thành lập với mục tiêu mang đến những sản phẩm và dịch vụ chất lượng trong lĩnh vực nuôi dưỡng và chăm sóc cá Koi.
                                Chúng tôi chuyên cung cấp cá Koi Nhật Bản chính hãng, thiết kế và thi công hồ cá Koi, cùng các giải pháp tối ưu về thiết bị và vật tư cho hồ cá.
                                Với kinh nghiệm nhiều năm, KoiFarmShop tự hào đã và đang đồng hành cùng những người yêu thích cá Koi, lan tỏa niềm đam mê này đến khắp mọi nơi.
                            </p>
                            <p>
                                Sứ mệnh của chúng tôi là mang đến những chú cá Koi khỏe mạnh, dịch vụ tư vấn tận tâm, và các sản phẩm hỗ trợ tốt nhất cho hồ cá của bạn.
                                KoiFarmShop không chỉ là nơi bán cá mà còn là nơi kết nối những người yêu thích cá Koi với niềm vui và sự thư giãn khi nuôi dưỡng chúng.
                            </p>

                            {/* YouTube Videos */}
                            <div className="video-container">
                                <h3>Khám phá thêm về KoiFarmShop qua video</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <iframe
                                            width="100%"
                                            height="315"
                                            src="https://www.youtube.com/embed/lE2AfCmsmgE"
                                            title="Video giới thiệu KoiFarmShop"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
                                        </iframe>
                                    </div>
                                    <div className="col-md-6">
                                        <iframe
                                            width="100%"
                                            height="315"
                                            src="https://www.youtube.com/embed/xfLhynCBVwc"
                                            title="Video về dịch vụ của KoiFarmShop"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default About;
