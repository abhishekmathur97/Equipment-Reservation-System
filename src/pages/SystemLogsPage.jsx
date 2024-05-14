import { useSelector } from "react-redux";
import List from "../components/list/List";

const SystemLogsPage = () => {
    const logs = useSelector(state => state.user.logs);

    return (
        <section>
            {
                logs && logs.map((log, id) => (
                    <div key={id} className="list__item">
                        {log.timestamp} - {log.description}
                    </div>
                ))
            }
        </section>
    )
}

export default SystemLogsPage;