import { BsFillCalendarCheckFill, BsFillCalendar2EventFill } from 'react-icons/bs';
import moment from "moment";
import 'moment/locale/tr'

async function getEpisode(id) {
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    const episode = res.json();
    return episode;
}

export default async function Episode({ id }) {
    const episode = await getEpisode(id);

    return (
        <>
            <div className='card-stats'>
                <h2><u>Episode Name</u> : {episode.name}</h2>
                <p>{episode.episode}</p>
                <div className='card-stat'>
                    <span>
                        <BsFillCalendarCheckFill /> {moment(episode.air_date).format('LL')}
                    </span>
                </div>
                <div className='card-stat'>
                    <span>
                        <BsFillCalendar2EventFill /> {moment(episode.created).format('LL')}
                    </span>
                </div>
            </div>
        </>
    )
}
