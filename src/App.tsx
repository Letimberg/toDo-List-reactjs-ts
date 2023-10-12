import { Header } from "./components/header/Header"
import { NewTask } from "./components/newTask/NewTask"

import styles from "./App.module.css"
import "./global.css"

export function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <NewTask />
            </div>
        </div>
    )
}
