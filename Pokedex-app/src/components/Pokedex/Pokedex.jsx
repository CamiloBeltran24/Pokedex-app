import styles from "./Pokedex.module.scss"

const Pokedex = ({ children }) => {
    return(
        <>
            <div className={styles.pokedex}>

                <div className={styles.top}>

                    <svg viewBox="0 0 324 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="4" dy="4" stdDeviation="3" floodColor="#212121" floodOpacity="0.8" />
                            </filter>
                        </defs>

                        <g filter="url(#dropShadow)">
                            <path d="M0 70H72" stroke="#212121" stroke-width="2"/>
                            <path d="M72 70L112 38H197L233 1H324" stroke="#212121" stroke-width="2"/>
                            <path d="M71.9996 70.4999C72.0028 69.823 74.5 68 71.9996 69.9999" stroke="#212121"/>
                        </g>
                    </svg>


                    <div className={styles.circle_blue}></div>
                    <div className={styles.small_circles}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>
                </div>

                { children }

            </div>
        </>
    )
}

export default Pokedex;