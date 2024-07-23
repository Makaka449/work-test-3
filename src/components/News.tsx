import React, { useEffect, useState } from 'react';
import '../styles/News.scss';

interface NewsItem {
    title: string;
    content: string;
    imageUrl?: string; 
}

const News: React.FC = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        
        setNews([
            { title: "Назва 1", content: "Детальна інформація  1", imageUrl: "https://via.placeholder.com/150" },
            { title: "Назва 2", content: "Детальна інформація  2", imageUrl: "https://via.placeholder.com/150" },
            { title: "Назва 3", content: "Детальна інформація  3", imageUrl: "https://via.placeholder.com/150" },
            { title: "Назва 4", content: "Детальна інформація  4", imageUrl: "https://via.placeholder.com/150" },
            { title: "Назва 5", content: "Детальна інформація  5", imageUrl: "https://via.placeholder.com/150" },
            { title: "Назва 6", content: "Детальна інформація  6", imageUrl: "https://via.placeholder.com/150" },
        ]);
    }, []);

    const openModal = (item: NewsItem) => {
        setSelectedNews(item);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedNews(null);
        setModalOpen(false);
    };

    return (
        <div className="latest-news">
            <div id="news-container">
                {news.map((item, index) => (
                    <div
                        key={index}
                        className="news-item"
                        onClick={() => openModal(item)}
                    >
                        <div className="news-card">
                            <img src={item.imageUrl} alt={item.title} />
                            <h3>{item.title}</h3>
                            
                        </div>
                    </div>
                ))}
            </div>

            {}
            {modalOpen && selectedNews && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div className="news-card">
                            <img src={selectedNews.imageUrl} alt={selectedNews.title} />
                            <h2>{selectedNews.title}</h2>
                            <p>{selectedNews.content}</p>
                        </div>
                        <button className="logout-button" onClick={closeModal}>
                            Вийти
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default News;
