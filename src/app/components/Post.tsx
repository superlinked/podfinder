import { Glory } from '@next/font/google'
import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';
import Icon from './Icon';
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

const glory = Glory({ subsets: ['latin'], weight: ["700"] })

interface IProps {
  url: string;
  image: string;
  author: string;
  age: string;
  episode_title: string;
  episode_description: string;
}

export default function Post(props: IProps) {
  const date = dayjs(props.age, 'MMM DD, YYYY').format('MM/DD/YYYY')

  return (
    <div className="border border-gray-cuatro p-4 rounded-lg mb-4">
      <div className="flex items-start space-x-4">
        <img className='rounded-lg grow-0 shrink-0' src={props.image} alt="" width={52} height={52} />
        <div>
          <h4 className={twMerge(glory.className, 'line-clamp-2 text-gray-uno leading-[1.125rem]')}>{props.episode_title}</h4>
          <h5 className="line-clamp-1 text-gray-dos font-bold text-xs leading-[1.125rem]">{props.author}</h5>
        </div>
      </div>
      <p className="line-clamp-3 mt-[1.2rem] text-xs text-gray-uno leading-[1.125rem]">{props.episode_description}</p>

      <div className='mt-4 flex space-x-6 items-center'>
        <Icon kind="heart" size={24} />
        <Icon kind="play" size={24} />
        <span className='text-gray-dos text-xs leading-[1.125rem]'>
          {date}
        </span>
      </div>
    </div>
  )
}
