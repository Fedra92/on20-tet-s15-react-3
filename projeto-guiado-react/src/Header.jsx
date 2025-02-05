import styles from '../src/styles/header.module.css'

export function Header (props) {
    return(
        <div className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>{props.title}</h1>
            <img className={styles.headerImage} src={props.image} />
        </div>
    )
}