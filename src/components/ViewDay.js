import React from 'react';
import { useParams } from 'react-router-dom';
// import { useAuth0 } from '../react-auth0-spa';

const ViewDay = props => {
    // const { getTokenSilently } = useAuth0();

    let { date } = useParams();

    // const [healthData, setHealthData] = useState({});

    // useEffect(() => {
    //     const fetchData = async data => {
    //         try {
    //             const token = await getTokenSilently();

    //             const response = await fetch(`${process.env.REACT_APP_API_URL}/${date}`, {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             });

    //             const responseData = await response.json();
    //             setHealthData(responseData[0]);
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     };
    //     fetchData();

    // }, [getTokenSilently, date])

    // console.log(healthData.summary_date)

    //     user_id: "auth0|5e3d8e29d82dd00e84f9bd52"
    // summary_date: "2019-12-12"
    // score_total: 76
    // bedtime_start: "2019-12-11T02:13:19+02:00"
    // duration: 27945
    // readiness: 88
    // hrv: 32
    // rhr: 49
    // weight: 191

    return (
        <div>
            <h2>
                {date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")}
            </h2>

            {/* <div>
                <p>Sleep score</p>
                <p>{healthData.score_total}</p>
            </div>

            <div>
                <p>Duration</p>
                <p>{healthData.duration}</p>
            </div>

            <div>
                <p>Bedtime</p>
                <p>{healthData.bedtime_start}</p>
            </div>

            <div>
                <p>Readiness</p>
                <p>{healthData.readiness}</p>
            </div>

            <div>
                <p>HRV</p>
                <p>{healthData.hrv}</p>
            </div>

            <div>
                <p>RHR</p>
                <p>{healthData.rhr}</p>
            </div>

            <div>
                <p>Weight</p>
                <p>{healthData.weight}</p>
            </div> */}

        </div>
    )
}

export default ViewDay;