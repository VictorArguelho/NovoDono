import styles from './NotFound.module.css'

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.error}>404</h1>
            <p className={styles.text}>Página não encontrada.</p>
        </div>
    );
}