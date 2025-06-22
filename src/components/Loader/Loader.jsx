import styles from "./Loader.module.css"

const Loader = () => {
    return(
        <>
        <div className={styles.loader}>
            <span></span>

            <div 
                id="dot-1" 
                className={styles.dot}
                style={{
                    "--dot-start-top": "100px",
                    "--dot-start-left": "140px",
                    "--dot-end-top": "130px",
                    "--dot-end-left": "20px",
                    "--delay": "0s"
                }}></div>
            <div 
                id="dot-2" 
                className={styles.dot}
                style={{
                    "--dot-start-top": "100px",
                    "--dot-start-left": "0px",
                    "--dot-end-top": "-3px",
                    "--dot-end-left": "90px",
                    "--delay": "0s"
                }}
                ></div>
            <div 
                id="dot-3" 
                className={styles.dot}
                style={{
                    "--dot-start-top": "100px",
                    "--dot-start-left": "105px",
                    "--dot-end-top": "18px",
                    "--dot-end-left": "18px",
                    "--delay": "0s"
                }}
                ></div>
            <div 
                id="dot-4" 
                className={styles.dot}
                style={{
                    "--dot-start-top": "110px",
                    "--dot-start-left": "150px",
                    "--dot-end-top": "140px",
                    "--dot-end-left": "30px",
                    "--delay": "0s"
                }}
                ></div>
            <div 
                id="dot-5" 
                className={styles.dot}
                style={{
                    "--dot-start-top": "-5px",
                    "--dot-start-left": "85px",
                    "--dot-end-top": "125px",
                    "--dot-end-left": "120px",
                    "--delay": "4s"
                }}
                ></div>
        </div>
        <span className={styles.Title}>Who is that Pókemon?</span>
        </>
    )
}

export default Loader;