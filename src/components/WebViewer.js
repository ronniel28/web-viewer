import React, { useState } from 'react';
import styles from "./WebViewer.module.css";
import { FaMoon, FaSun, FaExpand, FaBookmark, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';


export default function WebViewer() {

    const [url, setUrl] = useState("https://mywebsite.com");
    const [zoom, setZoom] = useState(100);
    const [darkMode, setDarkMode] = useState(false);
    const [bookmarks, setBookmarks] = useState([]);

    const handleZoom = (increment) => {
        setZoom((prevZoom) => Math.min(Math.max(prevZoom + increment, 50), 200));
    };

    const toggleDarkMode = () => {
        document.documentElement.style.setProperty(
            "--background-color",
            darkMode ? "#fff" : "#333"
        );
        document.documentElement.style.setProperty(
            "--text-color",
            darkMode ? "#000" : "#fff"
        );

        setDarkMode(!darkMode);
    };

    const handleFullScreen = () => {
        const element = document.documentElement;
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            element.requestFullscreen();
        }
    };

    const addBookmark = () => setBookmarks([...bookmarks, { url, zoom }]);


  return (
    <div className={styles.container}>
    <div className={styles.toolbar}>
        <button className={styles.button} onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button className={styles.button} onClick={handleFullScreen}>
            <FaExpand /> Fullscreen
        </button>
        <button className={styles.button} onClick={addBookmark}>
            <FaBookmark /> Add Bookmark
        </button>
    </div>
    <div className={styles.toolbar}>
        <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            className={styles.inputField}
        />
        <button className={styles.button} onClick={() => setZoom(100)}>
            <FaSearchPlus /> Reset Zoom
        </button>
        <button className={styles.button} onClick={() => handleZoom(10)}>
            <FaSearchPlus /> Zoom In
        </button>
        <button className={styles.button} onClick={() => handleZoom(-10)}>
            <FaSearchMinus /> Zoom Out
        </button>
    </div>
    <iframe
        src={url}
        style={{ width: `${zoom}%` }}
        className={styles.iframeContainer}
        title="Web Viewer"
    ></iframe>
    <ul className={styles.bookmarkList}>
        {bookmarks.map((bookmark, index) => (
            <li key={index} className={styles.bookmarkItem}>
                <span>{bookmark.url}</span>
                <button
                    className={styles.bookmarkButton}
                    onClick={() => setUrl(bookmark.url)}
                >
                    Go
                </button>
            </li>
        ))}
    </ul>
</div>
  )
}
