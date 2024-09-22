import React from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom'; // Thêm dòng này

const HeaderForm = () => {
    const navigate = useNavigate(); // Khởi tạo useNavigate

    return (
        <>
            <header className={styles.tagbar}>
                <div className={styles.leftSection}>
                    <img src="/imagines/background/logo.jpg" alt="Koi farm logo" className={styles.logo} />
                    <h1 className={styles.siteTitle}>Koi farm Shop</h1>
                    <nav>
                        <ul className={styles.navList}>
                            <li><a href="/">Trang chủ</a></li>
                            <li><a href="/san-pham">Sản phẩm</a></li>
                            <li><a href="/giong-ca">Giống cá</a></li>
                            <li><a href="/tin-tuc">Tin tức</a></li>
                            <li><a href="/lien-he">Liên hệ</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.rightSection}>
                    <span><i className="fas fa-envelope"></i> koifarmshop@email.com</span>
                    <span><i className="fas fa-bell"></i> Thông báo</span>
                    <span><i className="fas fa-cogs"></i> Cài đặt</span>
                    <span><i className="fas fa-tools"></i> Hỗ trợ kỹ thuật</span>
                </div>
            </header>
        </>
    );
};

export default HeaderForm;